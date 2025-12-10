'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function CaseStudyPage() {
  const slug = 'd365-fo-fast-food';
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
            
            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Overview</h3>
            <p className="text-muted-foreground">The company is one of the biggest Manufacture and Retail companies that produces Coffee beans and sells Coffee and Tea through its retail stores in the United States, Malaysia, and Singapore.</p>
            
            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Business Pain Points</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Global franchising involving bulk movement and recording of fixed assets.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Asset depreciation entries not coinciding with asset's actual utilization.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">ERP global template roll-out affecting project deadlines.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Global delivery Issues, Slow resolution of Support issues.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Month end closing issues, Cross company toll Manufacturing issues.</span>
                </li>
            </ul>

            <Card className="bg-secondary/50 my-12">
                <CardContent className="p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Looking for support with Dynamics 365 implementation or managed services?</h3>
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
                    <span className="text-muted-foreground text-base">Customize to Facilitate bulk transfer and disposal of asset</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Quantitative information of assets on hand to enable intelligent decision making</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Amendment to depreciation functionality to consider asset utilization</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Auto generation of vendor payments for Singapore and Malaysia</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Devised functionality to facilitate recording of Store Transactions</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Toll manufacturing solution using combination of out of box functionalities</span>
                </li>
            </ul>

            <h4 className="text-xl font-bold font-headline mt-6 mb-2">Modules:</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Microsoft Dynamics 365 F&O</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Fixed Assets</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">GL, AP & AR</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Product Information Management</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Manufacturing</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Warehouse Management</span></li>
            </ul>


            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Benefits</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">With implementation of functionality - the customer had successful roll out of fixed asset module to its group company in Asia.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Made new product for Fixed assets which was very successful.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Smooth migration of Companies in ERP system after M&A (Review).</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Significant man hours saving and reduction of redundancy in processes.</span>
                </li>
            </ul>
          </div>

            <div className="text-center mt-16">
                 <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Want to know more?</h3>
                  <Button asChild size="lg" className="mt-4">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
             <div className="mt-12 text-center">
                <Button asChild variant="outline">
                  <Link href="/case-studies">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Case Studies
                  </Link>
                </Button>
              </div>
        </div>
      </main>
    </div>
  );
}
