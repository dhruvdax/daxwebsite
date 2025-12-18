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

const slug = 'power-apps-portal-non-profit';
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
                    <p className="text-muted-foreground">The organization is a social research organization dedicated to helping people build better communities since 1980. They help communities to measure and improve their quality of life and organizations to measure and improve the impact of their services.</p>
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
                    <span className="text-muted-foreground text-base">The organization did not have an application which could provide the required information to their Internal Users and External Stakeholders such as Agencies whom they were working with.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Lack of a system to capture the complete Family information along with their Children to get a comprehensive view of the Beneficiaries.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Inability to monitor their complete list of Agencies and their Activities.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Absence of process to enforce the Agency and Family Onboarding processes.</span>
                </li>
            </ul>

            <Card className="bg-secondary/50 my-12 not-prose">
                <CardContent className="p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Looking for Power Apps solutions?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">With 20+ years of industry experience in ERP and CRM, DAX is proficient in crafting tailored solutions to meet the needs of businesses.</p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="/contact-us">Contact Us</Link>
                    </Button>
                </CardContent>
            </Card>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Solution</h3>
             <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">The customer implemented Dynamics 365 CE Application to provide a complete view of the Families, Family Members and Agencies.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">PowerApps Portals was implemented to onboard external stakeholders Agencies for them to Register and access the required information.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Required processes were configured in the Portal and the CRM Application to for Agencies and Beneficiaries (Families and Family Members) onboarding.</span>
                </li>
            </ul>

            <h4 className="text-xl font-bold font-headline mt-6 mb-2">Modules Covered:</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3 ml-4"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Power BI</span></li>
                <li className="flex items-start gap-3 ml-4"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Power Automate</span></li>
                <li className="flex items-start gap-3 ml-4"><Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" /><span className="text-muted-foreground text-base">Power Pages</span></li>
            </ul>


            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Benefits</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">The Organization could see the complete list of Beneficiaries and Agencies that they were working with which helped them manage their relationships more effectively Providing access to the agencies using Portal resulted in substantial reduction in Onboarding time for their external stakeholders as well time savings for the organizational Users.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Centralized database for Beneficiaries and Agencies helped improve the effectiveness and efficiency of all stakeholders.</span>
                </li>
            </ul>
          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
