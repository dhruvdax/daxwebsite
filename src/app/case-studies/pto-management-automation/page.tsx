import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import CaseStudyCTA from '@/components/case-study-cta';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';

const slug = 'pto-management-automation';
const study = CASE_STUDIES.find((cs) => cs.slug === slug);

export function generateMetadata(): Metadata {
  if (!study) {
    return buildMetadata({
        title: 'Case Study Not Found',
        description: 'The case study you are looking for does not exist.',
    });
  }

  return buildMetadata({
    title: `${study.title} | Case Study`,
    description: study.summary,
    canonicalPath: `/case-studies/${study.slug}`,
    ogType: 'article',
  });
}

export default function CaseStudyPage() {
  if (!study) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === study.imageId);

  return (
    <div className="bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="font-semibold text-primary">Case Study</p>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mt-2 max-w-4xl mx-auto">
            {study.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Client: Leading Engineering & Professional Services Organization
          </p>
        </div>
      </section>
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-h2:text-accent dark:prose-h2:text-white prose-h3:text-accent dark:prose-h3:text-white prose-h3:text-2xl prose-h3:mb-4 space-y-6">

            <div className="grid md:grid-cols-2 gap-12 items-center not-prose">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-headline mt-8 mb-4 prose">Overview</h3>
                    <p className="text-muted-foreground">The organization required a structured and automated Paid Time Off (PTO) process integrated with project approvals, timesheets, and payroll. Standard Microsoft Dynamics 365 Finance & Operations (D365FO) functionality did not support project-manager-driven PTO approvals, automated timesheet generation, or direct payroll alignment.</p>
                    <p className="text-muted-foreground">DAX Software Solutions designed and implemented a custom PTO management solution to streamline leave requests, approvals, and payroll impact while maintaining data accuracy and auditability.</p>
                </div>
                {image && (
                    <div className="relative h-64 w-full">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                )}
            </div>

            <h3 className="text-2xl font-bold font-headline mt-12 mb-4">Scope</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Designed a PTO request process for employees</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Implemented approval workflows routed to project managers</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Automated creation of timesheets for approved PTO</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Integrated approved PTO entries into earning statements</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Enabled reversal logic for PTO cancellations</span></li>
            </ul>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Key Activities</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Requirement Analysis:</strong> Captured HR, project, and payroll requirements for PTO automation</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Solution Design:</strong> Defined end-to-end PTO lifecycle from request through payroll</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Development:</strong> Built a custom PTO portal and workflow logic in D365FO</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Integration:</strong> Linked PTO approvals to timesheet and earning statement generation</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Testing & Validation:</strong> Conducted functional testing and UAT across PTO, timesheets, and payroll</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Documentation:</strong> Delivered user and administrator documentation</span></li>
            </ul>

             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Outcome</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Implemented a complete PTO management solution integrated with payroll</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Improved accuracy of earning statements</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Reduced manual PTO tracking and processing</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Increased transparency through structured manager approvals</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Improved compliance and audit readiness</span></li>
            </ul>

            <div className="not-prose mt-12">
                <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Technology Stack</h3>
                <p className="text-muted-foreground">Microsoft Dynamics 365 Finance & Operations (D365FO), X++, Custom PTO Portal, Workflow Engine, Project Accounting & Payroll Modules</p>
            </div>

          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
