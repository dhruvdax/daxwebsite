
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import JobApplicationForm from '@/components/job-application-form';
import { OPENINGS } from '@/lib/content';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';

const job = OPENINGS.find(o => o.slug === 'business-software-analyst');

export function generateMetadata(): Metadata {
    if (!job) {
        return buildMetadata({
            title: 'Job Not Found',
            description: 'The job you are looking for does not exist.',
        });
    }

    return buildMetadata({
        title: `${job.title} | Careers at DAX`,
        description: job.description,
        canonicalPath: `/careers/${job.slug}`,
    });
}

export default function CareerDetailPage() {
    if (!job) {
        notFound();
    }

    const scrollToForm = () => {
        document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="bg-background">
             <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
                        {job.title}
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">{job.location}</p>
                    <Button onClick={scrollToForm} size="lg" className="mt-8">
                        APPLY NOW
                    </Button>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold font-headline">Job Title: {job.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: job.fullDescription }}>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <JobApplicationForm jobPostingId={job.slug} jobTitle={job.title} />
        </div>
    );
}
