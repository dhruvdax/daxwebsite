
'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CaseStudyCTA from '@/components/case-study-cta';

export default function CaseStudyPage() {
  const slug = 'd365-field-service-security';
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

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
                    <p className="text-muted-foreground">The customer’s business is to design, build, maintain, and service superior security systems including wired and wireless networks and low voltage systems to protect their clients’ interests and enhance their operations.</p>
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
                    <span className="text-muted-foreground text-base">The organization lacked an application which could provide them a real time status of their New, Open and In Progress work orders for their Field Service Team.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">No application access over Mobile and other hand-held devices for Field Service personnel including Support technicians.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">ERP application was being used to track Time Sheets of the field technician which was cumbersome and of lead to Data leakages.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Lack of consolidation of Costs incurred and revenue to be booked.</span>
                </li>
            </ul>

            <Card className="bg-secondary/50 my-12 not-prose">
                <CardContent className="p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Looking for support with D365 Field Service integration or implementation?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">With 20+ years of industry experience in ERP and CRM, DAX is proficient in crafting tailored solutions to meet the needs of businesses.</p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </CardContent>
            </Card>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Solution</h3>
             <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">The customer implemented Field Service Module of Dynamics 365 CE integrated with Finance and Supply Chain Modules of D365 F&O.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">End to end business process was mapped across the applications with the key data moving from CE to F&O to provide an integrated solution.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Additional Automation was built so that there is minimal User Intervention and data entry required thus maintaining the sanctity and integrity of the data.</span>
                </li>
            </ul>
            
            <h4 className="text-xl font-bold font-headline mt-6 mb-2">Modules:</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Microsoft Dynamics 365 F&O & CRM</span></li>
                <li className="flex items-start gap-3 ml-4"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Field Sales/ Marketing</span></li>
                <li className="flex items-start gap-3 ml-4"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Fixed assets, GL, AP, AR & Project Accounting</span></li>
                <li className="flex items-start gap-3 ml-4"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Fixed Assets</span></li>
                <li className="flex items-start gap-3 ml-4"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Power BI (Utilization)</span></li>
            </ul>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Benefits</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">A single integrated system across the CE and F&O applications provided complete visibility about the customer including their Service Requests with status and financials.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Enhanced experience for field as well as office personnel with real time information regarding the allocated task as well as their progress.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Improved customer satisfaction since with enhanced SLA attainment and real time visibility into the status of their work orders along with precise billing with respect to products and labor hours consumed.</span>
                </li>
            </ul>
          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
