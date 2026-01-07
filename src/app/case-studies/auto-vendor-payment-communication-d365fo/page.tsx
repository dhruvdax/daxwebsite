
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Calendar, Users, Briefcase, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CaseStudyCTA from '@/components/case-study-cta';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';

const slug = 'auto-vendor-payment-communication-d365fo';
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
                    <p className="text-muted-foreground">DAX Software Solutions developed a custom auto-email functionality in Microsoft Dynamics 365 Finance & Operations (D365FO) for a global coffee and tea retailer to automate vendor communication after payment processing. By default, D365FO requires manual effort to notify vendors and share payment advice. The client required an automated solution to ensure vendor emails were sent immediately after payment journals were posted.</p>
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
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Designed functionality to trigger automatic email notifications to vendors upon posting of payment journals.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Configured the system to attach payment advice documents automatically to outgoing emails.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Ensured end-to-end automation with minimal user intervention and no disruption to standard finance workflows.</span>
                </li>
            </ul>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Key Activities</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Requirement Analysis:</strong> Gathered detailed specifications for vendor communication and payment advice requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Solution Design:</strong> Designed logic to seamlessly integrate email notifications with vendor payment journal posting.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Development:</strong> Built X++ customizations to auto-generate and send emails with payment advice attachments at posting.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Testing & Validation:</strong> Conducted functional and UAT testing to validate email triggers, content accuracy, and attachment delivery.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Documentation:</strong> Delivered comprehensive user and technical documentation for long-term support.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Client Collaboration:</strong> Worked closely with the finance team to validate process efficiency and vendor satisfaction.</span>
                </li>
            </ul>

             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Outcome</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Enabled automatic vendor email notifications immediately upon payment posting, significantly reducing manual effort.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Ensured vendors receive timely and accurate payment advice, improving transparency.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Improved efficiency of the payment process and strengthened vendor relationships.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Delivered a robust, automated solution fully aligned with standard D365FO finance processes.</span>
                </li>
            </ul>

            <div className="not-prose mt-12">
                <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Technology Stack</h3>
                <Card>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground">Microsoft Dynamics 365 Finance & Operations (D365FO), X++, SMTP / Email Integration, Finance Module, SSRS Payment Advice Reports</p>
                    </CardContent>
                </Card>
            </div>
          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
