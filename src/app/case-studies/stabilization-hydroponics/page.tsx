

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
  const slug = 'stabilization-hydroponics';
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
                    <p className="text-muted-foreground">The company is leading industry in Hydroponics products that sells gardening equipment. They are largest seller in this industry.</p>
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
                    <span className="text-muted-foreground text-base">They went live in 2017 with AX 2012 R3 CU8 version with Warehouse management and transportation management.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Application was heavily customized and multiple ISVs were installed which were not working fine.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Over a period, their purchase, sales, return, and finance processes have been severely impacted due to issues with costing and WMS processes.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Major reasons for issues are setups were not correct and they were fixing data issues directly through SQL.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Finance team was not able to get correct inventory value due to incorrect cost settlements and huge unsettled inventory transactions.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">All enhancements were on hold due to lack of support from support vendor.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Customer had changed 2 partners without successful resolution.</span>
                </li>
            </ul>

            <Card className="bg-secondary/50 my-12 not-prose">
                <CardContent className="p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Looking for Dynamics 365 stabilization and managed services?</h3>
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
                    <span className="text-muted-foreground text-base">Along with working on day-to-day issues implemented enhancements which were on hold since long with in short period which helped to increase work efficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Reviewed all parameters and setups and made necessary changes to resolve long pending issues in warehouse management and sales processes.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Resolved inventory values issues and closing issues. Company was able to close inventory without any issues once previous issues were resolved.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Upgrading from AX2012 R3 CU8 to AX2012 R3 CU13 to resolve long pending issues in warehouse management. Planning to upgrade to D365FO.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Fixed issues with Avalara since ISV Partner not able to address.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Salesforce Dynamics Ax integration.</span>
                </li>
            </ul>

            <h4 className="text-xl font-bold font-headline mt-6 mb-2">Modules:</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Microsoft Dynamics</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Warehouse Management</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Product Information Management</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Inventory Management</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Manufacturing</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Fixed Assets</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">GL, AP & AR</span></li>
            </ul>


            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Benefits</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Business was able to close monthly inventory without any issues.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Warehouse and inventory processes are running fine without any major issues.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Financials, inventory values, cost prices are working fine as per business requirement.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Monthly Inventory and financial closing done in time without issues.</span>
                </li>
            </ul>
          </div>
            <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}

    
