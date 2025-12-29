
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CASE_STUDIES } from '@/lib/content';

const IMPLEMENTATION_PHASES = [
  {
    title: 'Requirements and Planning',
    description:
      'Our expert consultants conduct a deep-dive analysis of your current processes. We prepare comprehensive project documentation, including a Statement of Work (SOW), conduct fit-gap analysis, and prepare a detailed environment specification to lay a solid foundation for your project.',
    id: 'phase-1',
  },
  {
    title: 'Configuration and Set-up',
    description:
      'The DAX team designs the solution architecture and develops detailed Functional, Technical, and Solution Design Documents. We finalize data migration designs, configure standard modules, write custom code for any gaps, and perform rigorous testing.',
    id: 'phase-2',
  },
  {
    title: 'Data Migration and Testing',
    description:
      'We securely migrate your data to the new system. Our process includes comprehensive unit testing, integration testing, and User Acceptance Testing (UAT) to ensure all functionalities work as expected. We also conduct performance and security evaluations.',
    id: 'phase-3',
  },
  {
    title: 'Training and Deployment',
    description:
      'A production environment is meticulously set up and final data is migrated. We run user tests, provide extensive user training to ensure a smooth transition, and perform a final go-live check before deployment.',
    id: 'phase-4',
  },
  {
    title: 'Monitoring and Support',
    description:
      'Post-deployment, we focus on resolving any pending issues and finalizing all project documentation. Our team conducts knowledge transfer sessions, reviews system performance, and offers ongoing support to ensure your continued success.',
    id: 'phase-5',
  },
];

const IMPLEMENTATION_OPTIONS = [
  {
    title: 'Empathetic ERP Implementation',
    description: 'We prioritize user adoption and collaboration at every step, ensuring the technology serves your people, not the other way around.',
    imageId: 'implementation-empathetic',
  },
  {
    title: 'Greenfield Implementation',
    description: 'Perfect for businesses moving from traditional systems. We provide end-to-end documentation and knowledge transfer for a fresh start.',
    imageId: 'implementation-greenfield',
  },
  {
    title: 'Broken Implementation Rescue',
    description: 'Stuck with an inefficient or failed ERP project? Our experts can rescue, restructure, and deliver a sustainable, high-performing solution.',
    imageId: 'implementation-rescue',
  },
  {
    title: 'Rollouts',
    description: 'Leverage our globally distributed team to deploy your existing Dynamics 365 solution across multiple regions seamlessly.',
    imageId: 'implementation-rollouts',
  },
  {
    title: 'Upgrades and Enhancement',
    description: 'Stay competitive by promptly upgrading your systems. We provide continuous enhancements to keep your ERP ahead of the curve.',
    imageId: 'implementation-upgrades',
  },
];

const FAQS = [
    {
        question: "How long does a typical Dynamics 365 implementation take?",
        answer: "A typical implementation for a medium-sized business (300-500 employees) covering finance, sales, supply chain, purchasing, and inventory modules can take around 8-9 months. However, the timeline varies based on complexity and scope."
    },
    {
        question: "What are the key benefits of implementing Dynamics 365?",
        answer: "Key benefits include seamless integration with Microsoft products, easy customization, scalability, real-time data for decision-making, robust reporting, automation of repetitive tasks, and reduced manual errors."
    },
    {
        question: "How does Dynamics 365 licensing work?",
        answer: "Dynamics 365 uses a user-based licensing model. DAX assists clients with the entire license procurement process to ensure you get the right licenses for your needs."
    },
    {
        question: "Is Dynamics 365 right for my business?",
        answer: "Dynamics 365 is essential for any business that aims to be scalable. Companies often start with the finance module and extend to other areas like sales or supply chain as they grow. Its flexibility makes it suitable for a wide range of industries."
    },
    {
        question: "How does Dynamics 365 compare to SAP or Oracle ERP?",
        answer: "For medium-to-large firms, Dynamics 365 is often more suitable due to its superior flexibility, scalability, and seamless integration with the broader Microsoft ecosystem of tools that your team likely already uses."
    },
    {
        question: "What is the cost of implementing Microsoft Dynamics 365?",
        answer: "The project cost depends on your company's size and the project's scope, with separate charges for licensing and module implementation. We also offer monthly, quarterly, or annual subscription-based support services."
    }
];


export default function ImplementationClientPage() {
    const implementationImages = IMPLEMENTATION_OPTIONS.map(opt => ({
        ...opt,
        image: PlaceHolderImages.find(img => img.id === opt.imageId)
    }));
    const caseStudy = CASE_STUDIES.find(cs => cs.slug === 'd365-fo-cannabis');
    const caseStudyImage = PlaceHolderImages.find(img => img.id === caseStudy?.imageId);


  return (
    <div className="bg-background text-foreground">
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Dynamics 365 Implementation</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            YOUR TRUSTED PARTNER FOR DYNAMICS 365 SUCCESS
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">What is it?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Ever felt like your business is operating on an outdated system that just can’t keep up? An ERP implementation is like a superhero upgrade for your core business processes. At DAX, a certified Microsoft Solutions Partner, we specialize in transforming your ERP and CRM systems into a powerhouse of efficiency with Microsoft Dynamics 365.
                </p>
            </div>
            <div className="text-center max-w-4xl mx-auto mt-12">
                <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">How does it apply to me?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We’re not about jargon or one-size-fits-all solutions. We believe technology should adapt to your business, not the other way around. Our collaborative approach means we work with you to tailor your ERP and CRM processes, making them intuitive and effective for your team. This empathetic approach ensures higher user adoption and a system that truly supports your goals.
                </p>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Working with Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                Our structured 5-phase approach ensures a seamless and successful Dynamics 365 implementation from start to finish.
            </p>
          </div>
          <Tabs defaultValue={IMPLEMENTATION_PHASES[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
              {IMPLEMENTATION_PHASES.map((phase, index) => (
                <TabsTrigger key={phase.id} value={phase.id} className="flex flex-col gap-2 p-3 whitespace-normal text-gray-300 data-[state=active]:text-primary">
                    <span className="text-sm font-semibold">PHASE {index + 1}</span>
                    <span className="font-headline text-base">{phase.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
             {IMPLEMENTATION_PHASES.map((phase) => (
                <TabsContent key={phase.id} value={phase.id}>
                    <p className="text-gray-300 text-center max-w-3xl mx-auto pt-6">{phase.description}</p>
                </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent dark:text-white">
                Looking for support with ERP Implementation?
            </h2>
            <Button asChild size="lg" className="mt-6">
                <Link href="/contact">TALK TO US <ArrowRight /></Link>
            </Button>
        </div>
       </section>

      <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Which Dynamics 365 Solution is Right for You?</h2>
              </div>
              <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                  {implementationImages.map((option, index) => (
                      <Card key={option.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className={`md:flex items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            {option.image && 
                                <div className="relative h-56 w-full md:w-1/3 flex-shrink-0">
                                    <Image
                                        src={option.image.imageUrl}
                                        alt={option.image.description}
                                        data-ai-hint={option.image.imageHint}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            }
                            <CardContent className="p-6 flex flex-col justify-center">
                                <h3 className="text-xl font-bold font-headline">{option.title}</h3>
                                <p className="mt-2 text-muted-foreground">{option.description}</p>
                            </CardContent>
                        </div>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

       <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        Dynamics 365 Implementation FAQs
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {FAQS.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-headline text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
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
                      <p className="text-sm font-bold tracking-widest text-primary">CASE STUDY</p>
                      <h2 className="font-headline text-3xl font-bold mt-2">{caseStudy.title}</h2>
                      <p className="mt-4 text-lg">{caseStudy.summary}</p>
                      <Button asChild variant="primary-outline" className="mt-6">
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
