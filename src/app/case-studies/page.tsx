import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CASE_STUDIES } from "@/lib/content";

export default function CaseStudiesPage() {
    const caseStudyImages = CASE_STUDIES.map(cs => ({
        ...cs,
        image: PlaceHolderImages.find(img => img.id === cs.imageId)
    }));
  
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            Recent Articles
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover how we've partnered with clients to overcome challenges and achieve remarkable results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-1">
          {caseStudyImages.map((study) => (
            <Card key={study.title} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl dark:bg-card">
              <div className="grid md:grid-cols-5 md:gap-8">
                {study.image && (
                    <div className="md:col-span-2">
                        <Image
                            src={study.image.imageUrl}
                            alt={study.image.description}
                            data-ai-hint={study.image.imageHint}
                            width={600}
                            height={400}
                            className="aspect-video w-full object-cover md:aspect-auto md:h-full"
                        />
                    </div>
                )}
                <div className="md:col-span-3 p-6">
                  <Badge variant="secondary">{study.client}</Badge>
                  <h2 className="mt-4 text-2xl font-bold font-headline">{study.title}</h2>
                   <p className="mt-4 text-muted-foreground">{study.summary}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
