
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CaseStudyCTA from '@/components/case-study-cta';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';

const slug = 'hr-erp-payroll-integration';
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
            Client: Leading Technology Services Company
          </p>
        </div>
      </section>
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-h2:text-accent dark:prose-h2:text-white prose-h3:text-accent dark:prose-h3:text-white prose-h3:text-2xl prose-h3:mb-4 space-y-6">

            <div className="grid md:grid-cols-2 gap-12 items-center not-prose">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-headline mt-8 mb-4 prose">Overview</h3>
                    <p className="text-muted-foreground">A leading technology services company required a reliable payroll solution after Microsoft discontinued native payroll functionality in Dynamics 365 Finance & Operations (D365FO). The organization needed to continue payroll processing without disrupting financial postings, compliance, or reporting workflows.</p>
                    <p className="text-muted-foreground">DAX Software Solutions implemented a seamless integration between BambooHR and D365FO, enabling payroll calculations to be handled externally while maintaining accurate financial postings within the ERP.</p>
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
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Assessed the impact of payroll deprecation in D365FO on HR and finance operations</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Designed an integration framework to synchronize employee master data between systems</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Enabled payroll calculation in BambooHR with automated posting of payroll journals into D365FO</span></li>
            </ul>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Key Activities</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Requirement Analysis:</strong> Defined business requirements for shifting payroll processing from ERP to HR platform</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Integration Design:</strong> Architected secure, controlled data flows for employee data and payroll outputs</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Development:</strong> Built custom connectors to sync employee records and import payroll journals into D365FO</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Testing & Validation:</strong> Performed end-to-end testing for data accuracy, payroll integrity, and financial postings</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Documentation:</strong> Delivered technical and user documentation for ongoing support</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base"><strong>Stakeholder Coordination:</strong> Worked closely with HR and finance teams to ensure payroll continuity</span></li>
            </ul>

             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Outcome</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Restored end-to-end payroll processing without disruption</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Ensured accurate synchronization between HR and finance systems</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Reduced payroll processing risk following Microsoft’s payroll discontinuation</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Improved compliance and reporting accuracy</span></li>
            </ul>

            <div className="not-prose mt-12">
                <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Technology Stack</h3>
                <p className="text-muted-foreground">Microsoft Dynamics 365 Finance & Operations, BambooHR, REST APIs, Custom Integration Connectors, X++</p>
            </div>

          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
