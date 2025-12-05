
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === study.imageId);

  return (
    <div className="bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-primary font-semibold">Case Study</p>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mt-2">
            {study.title}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-lg rounded-2xl">
          {image && (
            <div className="relative h-64 md:h-96 w-full mb-8">
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold font-headline">Summary</h2>
            <p className="lead">{study.summary}</p>

            <h2 className="text-2xl font-bold font-headline mt-8">Details</h2>
            <p>{study.details}</p>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}
