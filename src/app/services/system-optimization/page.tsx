
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CASE_STUDIES } from '@/lib/content';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const OPTIMIZATION_SECTIONS = [
  {
    id: 'post-go-live-stabilization',
    title: 'Post Go-Live Stabilization',
    description: 'Dax proactively supports businesses during the hypercare period, addressing and resolving issues. Even after hypercare, Dax continues to provide proactive and empathetic management services to assist businesses effectively.',
    imageId: 'optimization-post-go-live',
  },
  {
    id: 'assessment-health-checks',
    title: 'Assessment & Health Checks',
    description: 'DAX performs routine IT health checkups and continuous monitoring of vital business activities, such as orders from e-commerce platforms, to swiftly identify and report potential malicious activities.',
    imageId: 'optimization-assessment',
  },
  {
    id: 'performance-tuning',
    title: 'Performance Tuning',
    description: 'We value time as a crucial asset, shaping our work methodology. Collaborating closely with businesses, we identify and refine ERP bottlenecks, optimizing applications to enhance overall performance. Our proactive approach extends beyond identified bottlenecks, as we strategize for scalability during peak seasons.',
    imageId: 'optimization-performance-tuning',
  },
  {
    id: 'data-cleanup-migration',
    title: 'Data Cleanup & Migration',
    description: 'Dax simplifies data migration for Dynamics 365 ERP and CRM, utilizing standard tools. We support clients with custom solutions and third-party apps for a comprehensive approach to meet unique needs.',
    imageId: 'optimization-data-cleanup',
  },
  {
    id: 'complex-legacy-code',
    title: 'Complex Legacy Code',
    description: 'At Dax, we prioritize code efficiency and security through trimming legacy code and maintaining best coding practices across all projects for enhanced system performance and adaptability.',
    imageId: 'optimization-legacy-code',
  },
  {
    id: 'erp-adoption-challenges',
    title: 'ERP Adoption Challenges',
    description: 'DAX addresses challenges in adopting new ERP features by offering user training, comprehensive documentation, hypercare support, and fostering empathetic relationships, ensuring a smoother transition and successful implementation.',
    imageId: 'optimization-erp-adoption',
  },
];


export default function SystemOptimizationPage() {
  const [activeSection, setActiveSection] = useState(OPTIMIZATION_SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -200; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '-200px 0px -50% 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, observerOptions);

    OPTIMIZATION_SECTIONS.forEach(section => {
        const el = document.getElementById(section.id);
        if(el) {
            sectionRefs.current[section.id] = el;
            observer.observe(el);
        }
    });
    
    return () => {
         Object.values(sectionRefs.current).forEach(el => {
            if (el) {
                observer.unobserve(el);
            }
        });
    };
  }, []);


  const sectionImages = OPTIMIZATION_SECTIONS.map(section => ({
    ...section,
    image: PlaceHolderImages.find(img => img.id === section.imageId)
  }));
  const caseStudy = CASE_STUDIES.find(cs => cs.slug === 'stabilization-hydroponics');
  const caseStudyImage = PlaceHolderImages.find(img => img.id === caseStudy?.imageId);

  return (
    <div className="bg-background">
      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Dynamics 365 Optimization
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            DAX helps you manage your IT investment smartly for early, impactful results.
          </p>
        </div>
      </section>

      <section className="sticky top-[108px] z-30 bg-card-foreground/5 backdrop-blur-lg py-4 shadow-md">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-2">
                <div className="flex justify-center gap-2 flex-wrap">
                    {OPTIMIZATION_SECTIONS.slice(0, 4).map(section => (
                        <Button 
                            key={section.id} 
                            variant="primary-outline"
                            size="sm" 
                            onClick={(e) => handleLinkClick(section.id, e)}
                             className={cn(
                                "text-xs h-auto py-2 transition-all",
                                activeSection === section.id 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-white text-primary border-primary hover:bg-white hover:text-accent hover:border-accent"
                            )}
                        >
                            {section.title}
                        </Button>
                    ))}
                </div>
                <div className="flex justify-center gap-2 flex-wrap">
                    {OPTIMIZATION_SECTIONS.slice(4).map(section => (
                        <Button 
                            key={section.id} 
                            variant="primary-outline"
                            size="sm" 
                            onClick={(e) => handleLinkClick(section.id, e)}
                           className={cn(
                                "text-xs h-auto py-2 transition-all",
                                activeSection === section.id 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-white text-primary border-primary hover:bg-white hover:text-accent hover:border-accent"
                            )}
                        >
                            {section.title}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-semibold text-accent">Experiencing issues with a broken or failed implementation?</h2>
            <Button asChild className="mt-4">
                <Link href="/quick-fix-packages">Quick-Fix Packages</Link>
            </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
            <div className="flex flex-col gap-8 md:gap-16 max-w-5xl mx-auto">
                {sectionImages.map((section, index) => (
                    <Card key={section.id} id={section.id} className="overflow-hidden shadow-lg border-none">
                        <div className={`grid md:grid-cols-2 items-center gap-8`}>
                            {section.image && (
                                <div className={`relative h-64 md:h-80 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                                    <Image
                                        src={section.image.imageUrl}
                                        alt={section.image.description}
                                        data-ai-hint={section.image.imageHint}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">{section.title}</h3>
                                <p className="mt-4 text-muted-foreground">{section.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
       {caseStudy && caseStudyImage && (
        <section className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Image 
                        src={caseStudyImage.imageUrl}
                        alt={caseStudyImage.description}
                        data-ai-hint={caseStudyImage.imageHint}
                        width={550}
                        height={350}
                        className="rounded-lg shadow-2xl mx-auto"
                    />
                  <div className="text-secondary-foreground">
                      <p className="text-sm font-bold tracking-widest text-primary uppercase">Featured Case Study</p>
                      <h2 className="font-headline text-3xl font-bold mt-2 text-accent">{caseStudy.title}</h2>
                      <p className="mt-4 text-lg">
                          Managed services can help businesses reduce IT costs by 20-40% by offloading the management of applications to a specialized provider. Learn how one of the kleading Hydroponics company optimised it AMS costs with DAX.
                      </p>
                      <Button asChild variant="default" className="mt-6">
                          <Link href={`/case-studies/${caseStudy.slug}`}>READ MORE<ArrowRight /></Link>
                      </Button>
                  </div>
                </div>
            </div>
        </section>
      )}

    </div>
  );
}
