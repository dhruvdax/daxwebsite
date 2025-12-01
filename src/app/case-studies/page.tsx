import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CASE_STUDIES } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function CaseStudiesPage() {
    const caseStudyImages = CASE_STUDIES.map(cs => ({
        ...cs,
        image: PlaceHolderImages.find(img => img.id === cs.imageId)
    }));
  
  return (
    <div className="bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Case Studies
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                DISCOVER HOW WE'VE PARTNERED WITH CLIENTS TO ACHIEVE REMARKABLE RESULTS.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12">
          {caseStudyImages.map((study, index) => (
            <Card key={study.title} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl dark:bg-card">
              <div className={cn(
                  "grid md:grid-cols-2 items-center",
                  index % 2 !== 0 && "md:grid-flow-col-dense"
                  )}>
                {study.image && (
                    <div className={cn(index % 2 !== 0 && "md:col-start-2")}>
                        <Image
                            src={study.image.imageUrl}
                            alt={study.image.description}
                            data-ai-hint={study.image.imageHint}
                            width={600}
                            height={400}
                            className="aspect-video w-full object-cover"
                        />
                    </div>
                )}
                <div className={cn("p-8", index % 2 !== 0 && "md:col-start-1")}>
                  <h2 className="text-2xl font-bold font-headline">{study.title}</h2>
                   <p className="mt-4 text-muted-foreground">{study.summary}</p>
                   <Button asChild className="mt-6">
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
