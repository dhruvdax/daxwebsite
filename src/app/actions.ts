
'use server';

import { suggestConsultingServices } from '@/ai/flows/suggest-consulting-services';
import { z } from 'zod';

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
    
    // Here you would typically send an email
    // For this example, we'll just log it and return a success message.
    console.log('New M365 Licensing Inquiry:');
    console.log(validatedFields.data);

    // This is where you'd integrate with an email service like Nodemailer, SendGrid, etc.
    // Since we can't do that in this environment, we'll simulate a success response.
    
    return { message: 'Thank you for your inquiry! We will get back to you shortly.', errors: {} };
}
