import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CaseStudyCTA from '@/components/case-study-cta';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';

const slug = 'pto-functionality-security';
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
            {study.summary}
          </p>
        </div>
      </section>
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-h2:text-accent dark:prose-h2:text-white prose-h3:text-accent dark:prose-h3:text-white prose-h3:text-2xl prose-h3:mb-4 space-y-6">
            
            <div className="grid md:grid-cols-2 gap-12 items-center not-prose">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-headline mt-8 mb-4 prose">Overview</h3>
                    <p className="text-muted-foreground">One of the leaders in security solutions provider, aimed to enhance its internal operations by implementing a comprehensive Paid Time Off (PTO) management system. The primary objectives were to:</p>
                    <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Streamline the PTO request and approval process.</li>
                        <li>Automate the creation of related payroll documents.</li>
                        <li>Provide insightful reports and dashboards for both management and employees.</li>
                    </ul>
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
            
            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Business Pain Points</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><b>Inefficient PTO Request and Approval Process:</b> Employees faced difficulties submitting PTO requests, and the approval workflow was cumbersome for reporting managers.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><b>Manual Payroll Integration:</b> The payroll team struggled with manually updating timesheets and earning statements to reflect approved PTO.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><b>Lack of Reporting and Visibility:</b> Management and employees lacked clear visibility into leave balances and trends, affecting planning and decision-making.</span>
                </li>
            </ul>

            <Card className="bg-secondary/50 my-12 not-prose">
                <CardContent className="p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Looking for support with CRM implementation?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">With 20+ years of industry experience in ERP and CRM, DAX is proficient in crafting tailored solutions to meet the needs of businesses.</p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="/contact-us">Contact Us</Link>
                    </Button>
                </CardContent>
            </Card>

            <div>
                <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Solution</h3>
                
                <h4 className="text-xl font-bold font-headline mt-6 mb-2">PTO Request and Approval Workflow</h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-foreground">Employee Submission:</span>
                            <p className="text-muted-foreground text-base">Developed a user-friendly interface for employees to submit PTO requests easily.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                         <div>
                            <span className="font-semibold text-foreground">Manager Approval:</span>
                            <p className="text-muted-foreground text-base">Implemented a seamless workflow for routing requests to reporting managers for approval.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                         <div>
                            <span className="font-semibold text-foreground">Notification System:</span>
                            <p className="text-muted-foreground text-base">Developed a user-friendly interface for employees to submit PTO requests easily.</p>
                        </div>
                    </li>
                </ul>

                <h4 className="text-xl font-bold font-headline mt-6 mb-2">Payroll Integration</h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                         <div>
                            <span className="font-semibold text-foreground">Timesheet Creation:</span>
                            <p className="text-muted-foreground text-base">Automated the generation of timesheets marking approved PTO days as holidays.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                         <div>
                            <span className="font-semibold text-foreground">Earning Statement Generation:</span>
                            <p className="text-muted-foreground text-base">Created earning statements reflecting approved leave to keep the payroll team informed.</p>
                        </div>
                    </li>
                </ul>

                <h4 className="text-xl font-bold font-headline mt-6 mb-2">Reporting and Dashboards</h4>
                 <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                         <div>
                            <span className="font-semibold text-foreground">Management Reports:</span>
                            <p className="text-muted-foreground text-base">Developed custom reports to assist management in planning and resource allocation based on employee availability.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                         <div>
                            <span className="font-semibold text-foreground">Employee Dashboards:</span>
                            <p className="text-muted-foreground text-base">Created interactive dashboards for employees to track their leave balances, including the number of leaves taken and remaining for the year.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Benefits</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><b>Increased Efficiency:</b> Automated workflows reduced the administrative burden on managers and the HR department, leading to faster PTO approvals and processing.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><b>Accurate Payroll Processing:</b> Integration with payroll systems ensured accurate and timely updates of employee leave records, reducing errors and manual interventions.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><b>Improved Visibility:</b> Comprehensive reports and dashboards provided real-time insights into leave trends and balances, aiding in better decision-making for both management and employees.</span>
                </li>
            </ul>
          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
