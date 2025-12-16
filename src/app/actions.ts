'use server';

import { suggestConsultingServices } from '@/ai/flows/suggest-consulting-services';
import { z } from 'zod';
import { getFirebaseAdmin } from '@/firebase/admin';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

// AI Suggester Action
const aiFormSchema = z.object({
  businessDescription: z.string().min(20, 'Please provide a more detailed description (at least 20 characters).'),
});

type AiState = {
  message?: string | null;
  suggestions?: string | null;
  errors?: {
    businessDescription?: string[];
  }
}

export async function getConsultingSuggestions(prevState: AiState, formData: FormData): Promise<AiState> {
  const validatedFields = aiFormSchema.safeParse({
    businessDescription: formData.get('businessDescription'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid input.',
      suggestions: null,
    };
  }
  
  try {
    const result = await suggestConsultingServices({
      businessDescription: validatedFields.data.businessDescription,
    });
    return { message: 'Suggestions generated.', suggestions: result.suggestions, errors: {} };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while generating suggestions. Please try again.', suggestions: null, errors: {} };
  }
}

// M365 Licensing Inquiry Action
const m365FormSchema = z.object({
    fname: z.string().min(1, 'First name is required.'),
    lname: z.string().min(1, 'Last name is required.'),
    email: z.string().email('Please enter a valid email.'),
    phone: z.string().min(1, 'Phone number is required.'),
    company: z.string().min(1, 'Company name is required.'),
    requirements: z.string().min(10, 'Please describe your requirements in at least 10 characters.'),
});

type M365State = {
    message?: string | null;
    errors?: {
        fname?: string[];
        lname?: string[];
        email?: string[];
        phone?: string[];
        company?: string[];
        requirements?: string[];
    }
}

export async function getM365LicensingInquiry(prevState: M365State, formData: FormData): Promise<M365State> {
    const validatedFields = m365FormSchema.safeParse({
        fname: formData.get('fname'),
        lname: formData.get('lname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        requirements: formData.get('requirements'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please correct the errors and try again.',
        };
    }
    
    console.log('New M365 Licensing Inquiry:');
    console.log(validatedFields.data);
    
    return { message: 'Thank you for your inquiry! We will get back to you shortly.', errors: {} };
}


// Job Application Action
const jobApplicationSchema = z.object({
  jobPostingId: z.string().min(1, 'Job ID is missing.'),
  jobTitle: z.string().min(1, 'Job title is missing.'),
  applicantName: z.string().min(1, 'Full name is required.'),
  applicantEmail: z.string().email('Please enter a valid email address.'),
  coverLetter: z.string().optional(),
  resume: z
    .instanceof(File)
    .refine((file) => file.size > 0, 'Resume is required.')
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      'Resume must be less than 5MB.'
    )
    .refine(
      (file) =>
        ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(
          file.type
        ),
      'Invalid file type. Please upload a PDF, DOC, or DOCX file.'
    ),
});

type JobApplicationState = {
    message: string | null;
    errors: {
        jobPostingId?: string[];
        applicantName?: string[];
        applicantEmail?: string[];
        resume?: string[];
        coverLetter?: string[];
        form?: string[];
    };
    isSuccess: boolean;
}

export async function submitJobApplication(prevState: JobApplicationState, formData: FormData): Promise<JobApplicationState> {
    const validatedFields = jobApplicationSchema.safeParse({
        jobPostingId: formData.get('jobPostingId'),
        jobTitle: formData.get('jobTitle'),
        applicantName: formData.get('applicantName'),
        applicantEmail: formData.get('applicantEmail'),
        coverLetter: formData.get('coverLetter'),
        resume: formData.get('resume'),
    });
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please correct the errors below.',
            isSuccess: false,
        };
    }
    
    const { firebaseApp, firestore, storage } = getFirebaseAdmin();
    const { jobPostingId, jobTitle, applicantName, applicantEmail, coverLetter, resume } = validatedFields.data;

    try {
        const fileExtension = resume.name.split('.').pop();
        const resumeFileName = `${jobPostingId}/${uuidv4()}.${fileExtension}`;
        const bucket = storage.bucket();
        const file = bucket.file(`resumes/${resumeFileName}`);
        
        const fileBuffer = await resume.arrayBuffer();

        await file.save(Buffer.from(fileBuffer), {
            metadata: {
                contentType: resume.type,
            },
        });
        
        const [resumeUrl] = await file.getSignedUrl({
            action: 'read',
            expires: '03-09-2491', // Far-future expiration date
        });

        const applicationData = {
            id: uuidv4(),
            jobPostingId,
            jobTitle,
            applicantName,
            applicantEmail,
            coverLetter: coverLetter || '',
            resumeUrl,
            submissionDate: new Date().toISOString(),
        };
        
        await firestore.collection(`jobPostings/${jobPostingId}/jobApplications`).add(applicationData);

        return {
            message: "Thank you for your application! We've received it successfully and will be in touch if you're a good fit.",
            errors: {},
            isSuccess: true,
        };
    } catch (error: any) {
        console.error('Error submitting application:', error);
        return {
            message: error.message || 'An unexpected error occurred. Please try again later.',
            errors: { form: [error.message || 'An unexpected error occurred.'] },
            isSuccess: false,
        };
    }
}
