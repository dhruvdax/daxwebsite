
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Calendar, Users, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CaseStudyCTA from '@/components/case-study-cta';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';

const slug = 'autodesk-vault-implementation-energy-sector';
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
                    <p className="text-muted-foreground">DAX Software Solutions implemented Autodesk Vault Professional for a leading energy sector company in the United States, replacing the limitations of Autodesk Vault Basic with a scalable, enterprise-ready document management solution. The project scope included installation of Vault Professional in a secure environment, deployment of a remote SQL Server database, and complete migration of the client’s existing file store and database.</p>
                    <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" /><span>Client: Leading Energy Sector Company (USA)</span></div>
                        <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /><span>Project: Autodesk Vault Implementation & Migration</span></div>
                        <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /><span>Timeline: Mar 2025 - Aug 2025</span></div>
                    </div>
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
            
            <h3 className="text-2xl font-bold font-headline mt-12 mb-4">Key Project Phases</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Pre-installation readiness assessments.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Autodesk Vault Professional setup and SQL Server configuration.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Structured migration of files and metadata.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Comprehensive validation and integrity testing.</span>
                </li>
            </ul>

            <Card className="bg-secondary/50 my-12 not-prose">
                <CardContent className="p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Need an effective Document Management Solution?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">With 20+ years of industry experience, DAX is proficient in crafting tailored solutions to meet your business needs.</p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="/contact-us">Contact Us</Link>
                    </Button>
                </CardContent>
            </Card>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Solution & Benefits</h3>
             <p className="text-muted-foreground">The implemented solution delivered improved collaboration capabilities, controlled access management, enhanced data integrity, and the flexibility to scale across cloud or on-premises infrastructure. Engineering and operations teams benefited from improved system performance, reduced manual effort, and reliable version control for critical design and engineering documents.</p>

            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Results Achieved</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">End-to-end delivery covering preparation, installation, migration, and validation.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">100% successful migration with zero data loss.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">35% improvement in system responsiveness through SQL optimization.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Enhanced data security and scalability aligned with the client’s renewable energy operations.</span>
                </li>
            </ul>
          </div>
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
