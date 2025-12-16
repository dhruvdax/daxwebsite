
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SECTIONS = [
  {
    title: 'System Optimization',
    description: 'DAX System Optimization Services focuses on supercharging your Dynamics 365 platform, ensuring it runs at peak efficiency even during the peak usage. Our Dynamics 365 experts are apt to streamline processes, enhance productivity, bring in business automation, reduce system complexities and unlock new features for business excellence.',
    imageId: 'performance-tuning-system-optimization',
  },
  {
    title: 'Ensure Seamless Operations',
    description: 'We supervise live applications where multiple processes are running every minute. We work to make sure that all the processes are working upright without any pause. We provide a detailed analysis of any breakage in production along with a foolproof resolution to avoid the further occurrence of similar incidents in the future.',
    imageId: 'performance-tuning-seamless-operations',
  },
  {
    title: 'Productivity Enhancement',
    description: 'We understand that “Time is money” and that is reflected in our work methodology. We work with businesses to understand the critical bottlenecks to fine-tune ERP applications so that it adds up to business’s performance. This is not only limited to bottlenecks mentioned by businesses, we proactively provide strategies to introduce scalability factor during busy seasons.',
    imageId: 'performance-tuning-productivity-enhancement',
  },
  {
    title: 'System Stabilization and Administration',
    description: 'Application stabilization undoubtedly puts business on the paddle to success. DAX Software Solutions consultants carry out a comprehensive audit on the process and architectural designs to list down performance strain points and mentor the users while troubleshooting the root cause. System administration and basic necessities for application to run smoothly are taken care of. This provides a base for scalable robust applications for businesses.',
    imageId: 'performance-tuning-system-stabilization',
  },
];

export default function PerformanceTuningPage() {
    const sectionImages = SECTIONS.map(section => ({
        ...section,
        image: PlaceHolderImages.find(img => img.id === section.imageId)
    }));

  return (
    <div className="bg-background text-foreground">
      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Dynamics 365 – Performance Tuning
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            An Empathetic Business Partner Delivering Exceptional System and Productivity Solutions
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="flex flex-col gap-16 max-w-5xl mx-auto">
                {sectionImages.map((section, index) => (
                    <div key={section.title} className="grid md:grid-cols-2 gap-12 items-center">
                        <div className={`space-y-4 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                            <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">{section.title}</h2>
                            <p className="text-muted-foreground text-lg">{section.description}</p>
                        </div>
                        {section.image && (
                            <div className="relative h-72 w-full">
                                <Image
                                    src={section.image.imageUrl}
                                    alt={section.image.description}
                                    data-ai-hint={section.image.imageHint}
                                    fill
                                    className="object-cover rounded-lg shadow-xl"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-secondary text-accent">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
                <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Looking for some help on existing Dynamics 365 Solution?
                </h2>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
                <Button asChild size="lg" variant="default">
                    <Link href="/contact-us">Contact Us</Link>
                </Button>
            </div>
        </div>
    </section>
    </div>
  );
}

