"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/app/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const initialState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactPage() {
    const [state, formAction] = useFormState(submitContactForm, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.success ? 'Success!' : 'Error',
                description: state.message,
                variant: state.success ? 'default' : 'destructive',
            });
        }
    }, [state, toast]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We're here to help. Whether you have a question about our services or want to start a project, please reach out.
        </p>
      </div>
      
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 font-headline">Contact Form</h2>
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="How can we help you?" rows={6} required />
            </div>
            <SubmitButton />
          </form>
        </Card>

        <div className="space-y-8">
            <Card>
                <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 font-headline">Our Office</h3>
                    <div className="space-y-4 text-muted-foreground">
                        <div className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span>6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <a href="mailto:contact@daxsws.com" className="hover:text-primary">contact@daxsws.com</a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <a href="tel:+1.818.568.6460" className="hover:text-primary">+1.818.568.6460</a>
                        </div>
                         <div className="flex items-start space-x-3">
                            <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <a href="tel:+1.949.351.2404" className="hover:text-primary">+1.949.351.2404</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
