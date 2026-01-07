
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import CaseStudyCTA from '@/components/case-study-cta';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const slug = 'electronic-invoicing-d365';
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
  
  const image = PlaceHolderImages.find(p => p.id === 'e-invoice-process');

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
                
                <Card>
                    <CardContent className="p-6">
                        <h2 className="not-prose">Overview</h2>
                        <ul className="space-y-2 mt-4 text-muted-foreground">
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>IRB has mandated the electronic transmission of sales data</span></li>
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Memorandum consisting of rules governing issue of E-Invoice released in Sept 2023</span></li>
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Deadline for full compliance is 01 August 2024</span></li>
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Imposition of penalties for non-compliance</span></li>
                        </ul>
                    </CardContent>
                </Card>

                <h2>Business Requirements</h2>
                <p>Based on the IRB, the requirements, seller to send sales data via E-invoice and buyer to secure copy through IRB’s portal</p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                    <li>Identifying transactions which for which E-Invoice or Self-Billing is to be processed
                        <ul className="list-disc pl-6 mt-2">
                            <li>B2B sales to sales and foreign customers through lead ERP</li>
                            <li>Self-Billing to foreign and domestic purchases through lead ERP</li>
                            <li>B2C- E-Commerce sales though E-Commerce portal.</li>
                            <li>POS sales from Company owned stores though POS application.</li>
                        </ul>
                    </li>
                    <li>For submission of data
                        <ul className="list-disc pl-6 mt-2">
                            <li>Method to issue E-invoice and collect buyer details</li>
                            <li>For Self -billing – If buyers provide E-invoice, then “Self-Billing” is not required.</li>
                        </ul>
                    </li>
                    <li>Data submission timelines
                         <ul className="list-disc pl-6 mt-2">
                            <li>Real time or within 72 hours</li>
                            <li>Validation of invoice on Government portal in real time</li>
                        </ul>
                    </li>
                </ol>

                <h2>Out of Scope</h2>
                <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Transactions at Franchise stores</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Sale of Fixed assets</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Debit notes and Refund notes</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Customer stakeholders have decided to not share mode of payment and other payment details as these are “optional information”</span></li>
                </ul>

                <h2>Solution</h2>
                {image && (
                    <div className="relative h-auto w-full my-8 not-prose">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={1200}
                            height={600}
                            className="object-cover rounded-lg shadow-lg mx-auto"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                )}
                
                <h3>Design</h3>
                 <ol className="list-decimal pl-6 space-y-4 text-muted-foreground">
                    <li>Implementation of Middleware for receipt of data from multiple data sources</li>
                    <li>From Lead ERP to Middleware
                        <ol className="list-[lower-alpha] pl-6 mt-4 space-y-4">
                            <li>
                                <strong>Identification of Business Processes</strong>
                                <p className="mt-2">For E-Invoice Transactions:</p>
                                <ul className="list-disc pl-6 mt-2">
                                    <li>Sales Order – Invoice and Credit notes</li>
                                    <li>For non-Sales order transaction – Free Text Invoices and Credit notes</li>
                                </ul>
                                 <p className="mt-2">For Self-Billing Transactions:</p>
                                <ul className="list-disc pl-6 mt-2">
                                    <li>For non-Purchase Order – Invoice Journals</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Data transfer to Middleware</strong>
                                <ul className="list-disc pl-6 mt-2">
                                    <li>Medium of data transfer was using the API of Middleware</li>
                                    <li>Handshake between middleware and lead ERP – based on connection tokens provided by the middleware, both system were connected and connection was tested by transferring limited set of data.</li>
                                    <li>Trigger of data transfer was posting of Transaction in D365 Finance and Operation. For Eg - On posting of sales order invoice or free text invoice or Accounts Payable invoice Journal</li>
                                </ul>
                            </li>
                             <li>
                                <strong>Monitoring of data</strong>
                                 <ul className="list-disc pl-6 mt-2">
                                    <li>Creation of Repository – Log form was created in Accounts Receivable and Accounts Payable module</li>
                                    <li>Every Transaction sent to Middleware was updated in log form</li>
                                    <li>This helped in the monitoring the transactions which were either successfully transferred or failed transactions</li>
                                    <li>For successful transfer of transactions, Middleware is acknowledging receipt of data.</li>
                                    <li>For transaction failing – Middleware is sharing the reasons for failure.</li>
                                    <li>For resending failed transaction – users could edit few fields like tax registration ID before attempting to resend the data.</li>
                                </ul>
                            </li>
                             <li>
                                <strong>Developments with lead ERP</strong>
                                <ul className="list-disc pl-6 mt-2">
                                    <li>Fields to setups classification for Vendors/Customers masters-eg Self Billing, E-Invoice, Exempt</li>
                                    <li>Government portal mandated fields – Tax Type, Classification codes,</li>
                                    <li>Fields on Transaction Screens for points mentioned above, logic default the values from the Vendors/Customer masters</li>
                                    <li>Validation messages to prevent posting of transactions with insufficient or incomplete information (i.e. checking for information as required by Middleware and/or Government Portal.</li>
                                    <li>Transaction level logic – preventing transactions from rolling over to middleware if for eg the IRB transaction ID is available for self-billed transactions</li>
                                    <li>Credit Notes/Reversals – program logic to cover following scenarios:
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>Reversals need to be referenced to original transactions so the information required by Government portal can be copied/derived from original transactions.</li>
                                            <li>Logic to handle reversals for transactions prior to 01 August’2025 are to be reversed.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                </ol>

                <h2>Challenges</h2>
                 <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Frequent changes in government guidelines/regulation</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Potential penalties for non-compliance</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Open Items which were not closed before securing sign off by stakeholders</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span>Potential Delays in receiving in API from Government Portal which in turn was impacting receiving API from</span></li>
                </ul>

            </div>
            <CaseStudyCTA />
          </div>
      </main>
    </div>
  );
}

    