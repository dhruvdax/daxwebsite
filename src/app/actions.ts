
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
