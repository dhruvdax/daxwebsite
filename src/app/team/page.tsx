import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TEAM_MEMBERS } from "@/lib/content";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function TeamPage() {
    const teamImages = TEAM_MEMBERS.map(tm => ({
        ...tm,
        image: PlaceHolderImages.find(img => img.id === tm.imageId)
    }));

  return (
    <div className="bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                Our Team
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Meet our team of digital natives working hard to knit business-centric solutions so that you can spend more time with your loved ones!
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <Card className="p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {teamImages.map((member) => (
                <div key={member.name} className="text-center flex flex-col items-center">
                    <Avatar className="h-32 w-32 border-4 border-primary/20 mb-4">
                        {member.image && (
                            <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint} />
                        )}
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                    <p className="text-md text-primary">{member.role}</p>
                </div>
            ))}
            </div>
        </Card>
      </div>

       <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent">
                        Join our team of global Dynamics 365 experts!
                    </h2>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button asChild size="lg" className="w-full">
                        <Link href="#">EXPLORE OPPORTUNITIES <ArrowRight /></Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
