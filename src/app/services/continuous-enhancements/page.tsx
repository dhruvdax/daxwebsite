
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CASE_STUDIES } from '@/lib/content';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const ENHANCEMENT_SECTIONS = [
  {
    id: 'post-implementation-assessment',
    title: 'Post-implementation Assessment',
    description: 'We conduct a comprehensive evaluation of performance, user adoption, data integrity, security, and integrations. This thorough examination ensures that your Dynamics 365 solution is up-to-date. We value ongoing feedback from all stakeholders to continuously enhance capabilities.',
    imageId: 'enhancement-post-implementation',
  },
  {
    id: 'module-feature-expansion',
    title: 'Module & Feature Expansion',
    description: 'We begin by conducting a thorough assessment of evolving client needs, crafting a strategic roadmap that aligns with long-term business goals. Through prioritization, customization, and configuration, we tailor expansions and corrections to fit business workflows, ensuring seamless integrations.',
    imageId: 'enhancement-module-expansion',
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    description: 'DAX conducts meticulous needs assessment, we identify unique challenges, strategically planning and prioritizing custom solutions aligned with overarching business goals. Leveraging the flexibility of Dynamics 365, our team crafts tailored developments that prioritize user experience, scalability, and seamless integration with existing systems.',
    imageId: 'enhancement-custom-development',
  },
  {
    id: 'global-expansion',
    title: 'Global Expansion & International Deployment',
    description: 'DAX brings local expertise, 24/7 service coverage, and a diverse skillset across key regions. Our industry collaborations, cultural sensitivity, scalability, diverse team members and global compliance model ensure tailored solutions helping you navigate international complexities with strategic success.',
    imageId: 'enhancement-global-expansion',
  },
  {
    id: 'security-compliance-updates',
    title: 'Security & Compliance Updates',
    description: 'We prioritise protection against evolving threats. Our proactive measures includes microsoft security module implementation, strong access management, encryption and more.',
    imageId: 'enhancement-security-compliance',
  },
  {
    id: 'performance-monitoring-support',
    title: 'Performance Monitoring & Support',
    description: "DAX's robust monitoring tools swiftly identify and address issues, guaranteeing optimal system performance. Real-time analytics empower strategic decision-making, fostering a high-performing digital landscape. With DAX, clients experience not just support but a proactive partner in achieving and sustaining operational excellence.",
    imageId: 'enhancement-performance-monitoring',
  },
];


export default function ContinuousEnhancementsPage() {
  const [activeSection, setActiveSection] = useState(ENHANCEMENT_SECTIONS[0].id);
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

    ENHANCEMENT_SECTIONS.forEach(section => {
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


  const sectionImages = ENHANCEMENT_SECTIONS.map(section => ({
    ...section,
    image: PlaceHolderImages.find(img => img.id === section.imageId)
  }));
  const caseStudy = CASE_STUDIES.find(cs => cs.slug === 'ocr-vendor-invoice-automation');
  const caseStudyImage = PlaceHolderImages.find(img => img.id === caseStudy?.imageId);

  return (
    <div className="bg-background">
      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Continuous Enhancements for Dynamics 365
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Ongoing process of refining and optimizing your Dynamics 365 experience.
          </p>
        </div>
      </section>

       <section className="sticky top-[108px] z-30 bg-card-foreground/5 backdrop-blur-lg py-4 shadow-md">
        <div className="container mx-auto px-4">
            <div className="flex justify-center gap-2 flex-wrap">
                {ENHANCEMENT_SECTIONS.map(section => (
                    <Button 
                        key={section.id} 
                        variant="primary-outline"
                        size="sm" 
                        onClick={(e) => handleLinkClick(section.id, e)}
                        className={cn(
                            "text-xs h-auto py-2 transition-all basis-auto",
                            activeSection === section.id 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-white text-primary border-primary hover:bg-white hover:text-accent hover:border-accent"
                        )}
                    >
                        <span className="whitespace-normal">
                          {section.title.split(' ').map((word, i, arr) => (
                              <React.Fragment key={i}>
                                  {word}
                                  {arr.length > 2 && i === Math.floor(arr.length / 2) -1 && <br />}
                                  {i < arr.length - 1 && ' '}
                              </React.Fragment>
                          ))}
                        </span>
                    </Button>
                ))}
            </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary text-accent">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-semibold">Experiencing issues with a broken or failed implementation?</h2>
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
                          {caseStudy.summary}
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
