
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CASE_STUDIES } from "@/lib/content";

export default function CaseStudiesPage() {
    const caseStudyImages = CASE_STUDIES.map(cs => ({
        ...cs,
        image: PlaceHolderImages.find(img => img.id === cs.imageId)
    }));
  
  return (
    <div className="bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Case Studies
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Explore how we've helped businesses achieve remarkable results through our innovative solutions.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {caseStudyImages.map((study, index) => (
            <Card key={study.title} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl dark:bg-card rounded-[24px] flex flex-col md:flex-row h-full">
              {study.image && (
                  <div className="md:w-1/3 relative h-48 md:h-auto w-full flex-shrink-0">
                      <Image
                          src={study.image.imageUrl}
                          alt={study.image.description}
                          data-ai-hint={study.image.imageHint}
                          fill
                          className="object-cover"
                      />
                  </div>
              )}
              <div className="md:w-2/3 p-12 flex flex-col">
                <h2 className="text-xl font-bold font-headline">{study.title}</h2>
                 <p className="mt-4 text-muted-foreground flex-grow">{study.summary}</p>
                 <Button asChild className="mt-6 self-start">
                      <Link href={`/case-studies/${study.slug}`}>LEARN MORE<ArrowRight /></Link>
                  </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
