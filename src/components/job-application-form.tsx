'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MailCheck, Loader2, Upload } from 'lucide-react';
import { submitJobApplication } from '@/app/actions';

const initialState = {
  message: null,
  errors: {},
  isSuccess: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Apply Now'}
    </Button>
  );
}

export default function JobApplicationForm({ jobPostingId, jobTitle }: { jobPostingId: string, jobTitle: string }) {
  const [state, formAction] = useActionState(submitJobApplication, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.isSuccess) {
      formRef.current?.reset();
    }
  }, [state.isSuccess]);

  return (
    <section id="apply-form" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline text-center">Apply for this job now</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} ref={formRef} className="space-y-4">
              <input type="hidden" name="jobPostingId" value={jobPostingId} />
              <input type="hidden" name="jobTitle" value={jobTitle} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="applicantName">Full Name</Label>
                  <Input id="applicantName" name="applicantName" required />
                  {state.errors?.applicantName && <p className="text-destructive text-sm mt-1">{state.errors.applicantName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="applicantEmail">Email</Label>
                  <Input id="applicantEmail" name="applicantEmail" type="email" required />
                  {state.errors?.applicantEmail && <p className="text-destructive text-sm mt-1">{state.errors.applicantEmail}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                <Textarea id="coverLetter" name="coverLetter" placeholder="Tell us why you're a great fit for this role..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resume">Resume (PDF, DOC, DOCX)</Label>
                <Input id="resume" name="resume" type="file" required accept=".pdf,.doc,.docx" />
                {state.errors?.resume && <p className="text-destructive text-sm mt-1">{state.errors.resume}</p>}
              </div>
              <SubmitButton />
              {state.message && (
                <Alert variant={state.isSuccess ? 'default' : 'destructive'} className="mt-4">
                  <MailCheck className="h-4 w-4" />
                  <AlertTitle>{state.isSuccess ? 'Success' : 'Error'}</AlertTitle>
                  <AlertDescription>
                    {state.message}
                  </AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
