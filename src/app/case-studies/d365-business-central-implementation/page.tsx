'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import CaseStudyCTA from '@/components/case-study-cta';

// This is a placeholder for a more sophisticated slug-to-component mapping if needed
// For now, we will use a simple details string.
const CaseStudyContent = ({ details }: { details: string }) => (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-h2:text-accent dark:prose-h2:text-white prose-h3:text-accent dark:prose-h3:text-white prose-h3:text-2xl prose-h3:mb-4 space-y-6">
        <p className="text-muted-foreground">{details}</p>
    </div>
);


export default function CaseStudyPage() {
  const slug = 'd365-business-central-implementation';
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  // Find the master image from the placeholder list
  const image = PlaceHolderImages.find((img) => img.id === study.imageId);

  // A simple way to check if a component for this case study exists
  // This could be expanded into a proper mapping
  const hasCustomComponent = [
    'd365-business-central-implementation',
    'd365-field-service-integrator',
    'd365-field-service-security',
    'd365-fo-fast-food',
    'd365-fo-real-estate',
    'electronic-invoicing-d365',
    'ocr-vendor-invoice-automation',
    'stabilization-hydroponics'
  ].includes(slug);

    if (hasCustomComponent) {
        // Here you could dynamically import a component based on slug if you wanted
        // For simplicity, we just show a message or a simplified view
        // to avoid duplicating the large component structures in this file.
        // In a real scenario, you'd have separate component files.
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
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p>{study.details}</p>
                        <p className='mt-4'><i>(This case study has a detailed layout. Showing summary for brevity.)</i></p>
                    </div>
                  <CaseStudyCTA />
                </div>
              </main>
            </div>
         )
    }

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
          {image && (
            <div className="relative h-96 w-full mb-12">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover rounded-lg shadow-lg"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}
          <CaseStudyContent details={study.details} />
          <CaseStudyCTA />
        </div>
      </main>
    </div>
  );
}
