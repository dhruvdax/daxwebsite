
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
  const slug = 'electronic-invoicing-d365';
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);
  const eInvoiceImage = PlaceHolderImages.find(p => p.id === 'e-invoice-process-flow');

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
            
            <h2 className="text-3xl font-bold font-headline mt-10 mb-4">Overview</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">IRB has mandated the electronic transmission of sales data</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Memorandum consisting of rules governing issue of E-Invoice released in Sept 2023.</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Customer had changed 2 partners without successful resolution.</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Imposition of penalties for non-compliance.</span></li>
            </ul>

            {eInvoiceImage && (
              <div className="my-8 text-center">
                  <Image src={eInvoiceImage.imageUrl} alt={eInvoiceImage.description} data-ai-hint={eInvoiceImage.imageHint} width={800} height={400} className="mx-auto" />
              </div>
            )}

            <h2 className="text-3xl font-bold font-headline mt-10 mb-4">Business Pain Points</h2>
            <p className="text-muted-foreground">Based on the IRB, the requirements, seller to send sales data via E-invoice and buyer to secure copy through IRB’s portal</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Identifying transactions which for which E-Invoice or Self-Billing is to be processed</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">B2B sales to sales and foreign customers through lead ERP</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Self-Billing to foreign and domestic purchases through lead ERP</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">B2C- E-Commerce sales though E-Commerce portal.</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">POS sales from Company owned stores though POS application.</span></li>
            </ul>
            <h4 className="text-xl font-bold font-headline mt-6 mb-2">For submission of data</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Method to issue E-invoice and collect buyer details</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">For Self -billing - If buyers provide E-invoice, then “Self-Billing” is not required.</span></li>
            </ul>
             <h4 className="text-xl font-bold font-headline mt-6 mb-2">Data submission timelines</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Real time or within 72 hours</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Validation of invoice on Government portal in real time</span></li>
            </ul>

            <h2 className="text-3xl font-bold font-headline mt-10 mb-4">Out of Scope</h2>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Transactions at Franchise stores</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Sale of Fixed assets</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Debit notes and Refund notes</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Customer stakeholders have decided to not share mode of payment and other payment details as these are “optional information”</span></li>
            </ul>
            
            <h2 className="text-3xl font-bold font-headline mt-10 mb-4">Solution</h2>
            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Validation from ERP to Middleware</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Along with working on day-to-day issues implemented enhancements which were on hold since long with in short period which helped to increase work efficiency.</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Customer and Vendor - contact details</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Tax registration details - validity as on date of transactions</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Buyer Identification details - BRN, SST and MSIC numbers</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Transaction details - Currency, Item, quantity, sales prices, tax, transaction date and document number, tax types, classification codes</span></li>
            </ul>
            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Validation from Middleware to Government Portal</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Customer/Vendor - TIN number validation</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">E-invoice and Consolidation status check</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">E-Invoice status submission and response</span></li>
            </ul>
             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Design</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Implementation of Middleware for receipt of data from multiple data sources</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">From Lead ERP to Middleware</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Identification of Business Processes</span></li>
            </ul>
             <h4 className="text-xl font-bold font-headline mt-6 mb-2">For E-Invoice Transactions</h4>
             <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Sales Order - Invoice and Credit notes</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">For non-Sales order transaction - Free Text Invoices and Credit notes</span></li>
             </ul>
            <h4 className="text-xl font-bold font-headline mt-6 mb-2">For Self-Billing Transactions</h4>
             <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">For non-Purchase Order - Invoice Journals</span></li>
             </ul>
             <h4 className="text-xl font-bold font-headline mt-6 mb-2">Data transfer to Middle ware</h4>
             <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Medium of data transfer was using the API of Middleware</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Handshake between middleware and lead ERP - based on connection tokens provided by the middleware, both system were connected and connection was tested by transferring limited set of data.</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Trigger of data transfer was posting of Transaction in D365 Finance and Operation</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">For e.g. - On posting of sales order invoice or free text invoice or Accounts Payable invoice Journal</span></li>
            </ul>
            <h4 className="text-xl font-bold font-headline mt-6 mb-2">Format of data which in which it is transferred to Middleware</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Every API has specific template or list of fields</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Before developing the data set for API, data mapping activity between API fields and fields on transaction and master data in the lead ERP was carried out</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Data Header - eg contains Customer/Vendor information, document ID, contact information</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Lines - contains Item, quantity, price, tax etc</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Payload Request - On posting of transaction, payload request is generated which transfers data to D356FO</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Response</span></li>
            </ul>
             <h4 className="text-xl font-bold font-headline mt-6 mb-2">Monitoring of data</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Creation of Repository - Log form was created in Accounts Receivable and Accounts Payable module</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Every Transaction sent to Middleware was updated in log form</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">This helped in the monitoring the transactions which were either successfully transferred or failed transactions</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">For successful transfer of transactions, Middleware is acknowledging receipt of data.</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">For transaction failing - Middleware is sharing the reasons for failure.</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">For resending failed transaction - users could edit few fields like tax registration ID before attempting to resend the data.</span></li>
            </ul>
             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Developments with lead ERP</h3>
             <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Fields to setups classification for Vendors/Customers masters-eg Self Billing, E-Invoice, Exempt</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Government portal mandated fields - Tax Type, Classification codes,</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Fields on Transaction Screens for points mentioned above, logic default the values from the Vendors/Customer masters</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Validation messages to prevent posting of transactions with insufficient or incomplete information i.e. checking for information as required by Middleware and/or Government Portal.</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Transaction level logic - preventing transactions from rolling over to middleware if for e.g the IRB transaction ID is available for self-billed transactions</span></li>
            </ul>
             <h4 className="text-xl font-bold font-headline mt-6 mb-2">Credit Notes/Reversals - program logic to cover following scenarios</h4>
             <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Reversals need to be referenced to original transactions so the information required by Government portal can be copied/derived from original transactions.</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Logic to handle reversals for transactions prior to 01 August’2025 are to be reversed.</span></li>
            </ul>

            <h2 className="text-3xl font-bold font-headline mt-10 mb-4">Challenges</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Frequent changes in government guidelines/regulation</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Potential penalties for non-compliance</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Open Items which were not closed before securing sign off by stakeholders</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Potential Delays in receiving in API from Government Portal which in turn was impacting receiving API from</span></li>
            </ul>
          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
