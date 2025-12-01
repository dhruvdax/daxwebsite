
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CASE_STUDIES, METRICS } from '@/lib/content';
import { ArrowRight } from 'lucide-react';
import { CountUp } from '@/components/count-up';

export default function Home() {
  const caseStudyImages = CASE_STUDIES.map(cs => ({
    ...cs,
    image: PlaceHolderImages.find(img => img.id === cs.imageId)
  }));
  const featuredImage = PlaceHolderImages.find(img => img.id === 'case-study-4');

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-48 bg-white dark:bg-card overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHBlb3BsZSUyMGxhcHRvcHxlbnwwfHx8fDE3MjE4MzY3MTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Business people with laptop"
                fill
                className="object-cover"
                data-ai-hint="business people laptop"
            />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  The <span className="text-primary">Empathetic</span> ERP Partner - Prioritizing <span className="text-primary">People</span> over Technology
                </h1>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">QUICK FIX PACKAGES<ArrowRight /></Link>
                </Button>
              </div>
              <p className="text-lg text-gray-300">We're listening!</p>
            </div>
          </div>
        </div>
      </section>

       {/* Why should I do it? Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-accent dark:text-white">Why should I do it?</h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl">
            ERP is expensive, time-consuming and ERP vendors are arrogant. As Empathetic ERP Partners, we redefine the narrative. With your dedicated ERP implementation experts and trusted support, our approach turns ERP from a burden into a strategic asset. We don't just fix problems; we empower people who drive business success.
            </p>
        </div>
       </section>
      
       {/* Metrics Section */}
      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-accent dark:text-white">Why should I do it with DAX?</h2>
                <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
                Success happens when your ERP partner is collaborative, a good listener, and has the skill you need in Microsoft Dynamics Solutions.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3">
                {METRICS.map((metric) => (
                    <Card key={metric.label} className="text-center h-full flex flex-col justify-center p-6 shadow-lg hover:shadow-xl transition-shadow rounded-2xl border-t-4 border-primary">
                        <CardHeader className="p-0">
                        <div className="mx-auto text-primary rounded-full w-20 h-20 flex items-center justify-center">
                            <metric.icon className="w-12 h-12" />
                        </div>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                        <p className="text-4xl font-bold font-headline text-accent dark:text-white">
                          <CountUp end={parseInt(metric.value)} suffix={metric.value.includes('+') ? '+' : ''} />
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Featured ERP Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {featuredImage && (
                    <Image 
                        src={featuredImage.imageUrl}
                        alt={featuredImage.description}
                        data-ai-hint={featuredImage.imageHint}
                        width={500}
                        height={350}
                        className="rounded-lg shadow-2xl"
                    />
                )}
                <div className="text-accent-foreground">
                    <p className="text-sm font-bold tracking-widest text-primary">FEATURED PAGE</p>
                    <h2 className="font-headline text-3xl font-bold mt-2">EMPATHETIC ERP</h2>
                    <p className="mt-4 text-lg">The Key to Successful Implementations and Lasting Partnerships: Projects led by empathetic partnerships demonstrate a 30% improvement in on-time delivery.</p>
                    <Button asChild className="mt-6">
                        <Link href="#">READ MORE<ArrowRight /></Link>
                    </Button>
                </div>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's talk about how we can help you achieve your goals. Schedule a free consultation today.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact">Contact Us<ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
