
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CaseStudyCTA from '@/components/case-study-cta';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';

const slug = 'erp-crm-fedex-api-integration';
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
                    <p className="text-muted-foreground">Delivered multiple integration initiatives for a leading agricultural supplies manufacturer to improve order management, customer visibility, and logistics reliability. The engagement included ERP–CRM synchronization between Microsoft Dynamics AX and Salesforce, along with a critical migration of FedEx integrations from legacy SOAP services to REST APIs ahead of mandated deprecation timelines.</p>
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
            <h4 className="text-xl font-bold font-headline mt-6 mb-2">ERP-CRM Integration</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Synchronized customer, order, and fulfillment data between Dynamics AX and Salesforce.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Enabled near real-time visibility of order status and customer information across sales and operations teams.</span>
                </li>
            </ul>

            <h4 className="text-xl font-bold font-headline mt-6 mb-2">FedEx API Migration</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Migrated FedEx Tracking, Shipping, Rating, and Address Validation services from SOAP to REST APIs.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Assessed and upgraded integrations using six active FedEx meters supporting high-volume shipping operations.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Enabled advanced REST-only capabilities, including Estimated Delivery Time Window.</span>
                </li>
            </ul>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Key Activities</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Impact Analysis:</strong> Identified all custom and third-party applications consuming FedEx SOAP services.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>API Modernization:</strong> Replaced SOAP calls with RESTful endpoints using JSON payloads.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Integration Update:</strong> Updated ERP and CRM integration touchpoints to align with REST APIs.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Testing & Validation:</strong> Conducted functional, regression, and performance testing to ensure stability and parity.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Coordination:</strong> Worked closely with FedEx API Core team to ensure compliance with migration deadlines.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base"><strong>Documentation:</strong> Updated technical design and API reference documentation.</span>
                </li>
            </ul>

             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Outcome</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Achieved 100% compliance with FedEx SOAP retirement, completed four weeks ahead of the May 15, 2024 deadline.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Migrated all six FedEx meters handling ~25,000+ API calls per day with zero downtime.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Improved average API response time by ~35% (1.85s → 1.2s).</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Reduced integration error rates by ~20% through improved JSON validation.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Enhanced shipment tracking accuracy and customer experience using REST-only features.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Reduced developer onboarding time by ~30% through updated documentation.</span>
                </li>
            </ul>

            <div className="not-prose mt-12">
                <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Technology Stack</h3>
                <p className="text-muted-foreground">Microsoft Dynamics AX 2012, Salesforce, FedEx REST APIs, JSON, HTTP(S), FedEx Developer Portal, Postman, Custom Integration Modules.</p>
            </div>
          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}

    