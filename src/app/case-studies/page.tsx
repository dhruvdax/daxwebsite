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
                DISCOVER HOW WE'VE PARTNERED WITH CLIENTS TO ACHIEVE REMARKABLE RESULTS.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudyImages.map((study, index) => (
            <Card key={study.title} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl dark:bg-card p-4 rounded-[24px]">
              <div className="flex flex-col h-full">
                {study.image && (
                    <div className="relative h-48 w-full">
                        <Image
                            src={study.image.imageUrl}
                            alt={study.image.description}
                            data-ai-hint={study.image.imageHint}
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                )}
                <div className="pt-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold font-headline">{study.title}</h2>
                   <p className="mt-4 text-muted-foreground flex-grow">{study.summary}</p>
                   <Button asChild className="mt-6 self-start">
                        <Link href="#">READ MORE<ArrowRight /></Link>
                    </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
