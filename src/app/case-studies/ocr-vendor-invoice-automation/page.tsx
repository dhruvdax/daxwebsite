
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
  const slug = 'ocr-vendor-invoice-automation';
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }
  
  const ocrOverviewImage = PlaceHolderImages.find(p => p.id === 'ocr-overview-image');
  const ocrSolutionImage = PlaceHolderImages.find(p => p.id === 'ocr-solution-image');

  return (
     <div className="bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="font-semibold text-primary">Case Study</p>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mt-2 max-w-4xl mx-auto">
            OCR (Optical Character Recognition) for Vendor Invoice Automation
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Research shows that companies using OCR for automated data entry from invoices process 25-60% more invoices than companies using manual data entry.
          </p>
        </div>
      </section>
      <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
              <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-h2:text-accent dark:prose-h2:text-white prose-h3:text-accent dark:prose-h3:text-white prose-h3:text-2xl prose-h3:mb-4 space-y-6">
                  
                  <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Overview</h3>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="md:w-3/5 space-y-4">
                          <p className="text-muted-foreground">Recognizing the value of innovative technologies, Dax made a strategic decision to integrate Microsoft’s OCR (Optical Character Recognition) functionality into its existing suite of business applications. This move aimed to simplify document processing, automate data extraction, and drive digital transformation for its clients.</p>
                      </div>
                      {ocrOverviewImage && (
                          <div className="md:w-2/5 flex items-center justify-center">
                              <Image src={ocrOverviewImage.imageUrl} alt={ocrOverviewImage.description} data-ai-hint={ocrOverviewImage.imageHint} width={400} height={300} className="rounded-lg shadow-lg" />
                          </div>
                      )}
                  </div>
                  
                  <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Business Pain Points</h3>
                  <p className="text-muted-foreground">Prior to implementing OCR, business faced several key challenges:</p>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base"><b>Manual Data Entry Overload:</b> Excessive manual data entry consumed valuable time and resources, hindering productivity, and creating room for errors.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base"><b>Inefficient Paper-Based Processes:</b> Traditional paper interactions and document handling slowed down operations, leading to delays and decreased efficiency.</span>
                      </li>
                       <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base"><b>Data Inaccuracy and Integrity Concerns:</b> Transcription errors and inconsistencies compromised data integrity, impacting decision-making and jeopardizing business outcomes.</span>
                      </li>
                       <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base">There are too many resources in the AP department, and it is hard to manage them.</span>
                      </li>
                  </ul>

                  <Card className="bg-secondary/50 my-12">
                      <CardContent className="p-8 md:p-12 text-center">
                          <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Looking for OCR solutions for automated data entry?</h3>
                          <p className="mt-2 text-lg text-muted-foreground">With 20+ years of industry experience in ERP and CRM, DAX is proficient in crafting tailored solutions to meet the needs of businesses.</p>
                          <Button asChild size="lg" className="mt-6">
                              <Link href="/contact">Contact Us</Link>
                          </Button>
                      </CardContent>
                  </Card>

                  <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Solution</h3>
                  <p className="text-muted-foreground">Dax meticulously worked to integrate Microsoft’s OCR functionality into its software solutions, ensuring seamless integration with various business applications. Leveraging the power of AI (Artificial Intelligence) and machine learning, the OCR system was trained to recognize and extract relevant data points from a wide range of documents, regardless of format, template, or layout.</p>
                   {ocrSolutionImage && (
                      <div className="my-8">
                          <Image src={ocrSolutionImage.imageUrl} alt={ocrSolutionImage.description} data-ai-hint={ocrSolutionImage.imageHint} width={1200} height={400} className="mx-auto" />
                      </div>
                  )}

                  <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Benefits</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base"><b>Substantial time and effort savings:</b> By automating data extraction from paper-based documents you can cut down your invoice processing time by 50%.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base"><b>Seamless Integration:</b> OCR technology can be seamlessly integrated with various ERP (Enterprise Resource Planning) software, including SAP, Oracle, and D365 F&O (Dynamics 365 Finance and Operations). If there is no inbuilt connector, a custom connector can be added on demand.</span>
                      </li>
                       <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base"><b>Enhanced Accuracy and Data Integrity:</b> OCR enhanced the performance of multiple processes like AP, AR, Manufacturing via consistent data extraction, eliminating transcription errors, and enhancing data integrity.</span>
                      </li>
                       <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base"><b>Amplified Productivity and Scalability:</b> Automating manual work, employees became efficient, leading to increased productivity. Additionally, the OCR functionality allowed for easy scalability, enabling organizations to handle growing document volumes.</span>
                      </li>
                       <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-base"><b>Cost Reduction:</b> By automating paper-based processes, companies experienced a reduction in operational costs, making up their ROI (Return on Investment) to 80% on this project.</span>
                      </li>
                  </ul>
              </div>

              <CaseStudyCTA />
          </div>
      </main>
    </div>
  );
}
