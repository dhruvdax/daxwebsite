
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Phone, Settings, Users, ArrowRight, TrendingUp, Search, Handshake, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

const SUPPORT_PROCESS = [
    {
        title: 'You Report & Connect',
        description: 'You can reach out to us by raising a service request via email, phone, chat or self serve tool.'
    },
    {
        title: 'We Act immediately',
        description: 'Our experts located around the world acknowledge and complete the task, resolve issues, provide user training, share root cause analysis or suggest an improvement project for recurring issues.'
    },
    {
        title: 'We Innovate',
        description: 'We don\'t stop at quick fixes. We suggest and implement long-term system improvements that may involve multiple technologies. We are one stop shop for all your extended technical support.'
    },
    {
        title: 'Happy or Not?',
        description: 'We follow up to ensure your satisfaction and act on the feedback.'
    },
    {
        title: 'FYI',
        description: 'We establish a clear communication strategy, send regular status reports, and hold regular meetings with various stakeholders from your organization.'
    }
];

const SERVICE_DETAILS = [
    {
        icon: Phone,
        title: "Just A Call Away (24/7/365 Support)",
        description: "DAX Software Solutions solutions provide production support round the clock. We work on incident management, daily tasks, change management and more. We ensure that solutions do not break any running processes after the successful deployment."
    },
    {
        icon: Settings,
        title: "IT Application Support",
        description: "DAX Software Solutions extends its services to the businesses for project upgrades, roll-outs, and system optimizations. We also provide hassle-free licensing and provisioning services. DAX Software Solutions encourages optimizations in business application systems to save time. DAX Software Solutions also maintains live system stability with minimal manual interventions. Insightful reporting via ERPs reduces business risks."
    },
    {
        icon: Users,
        title: "Functional Consultation",
        description: "Our goal is to provide a sustainable solutions with minimal impact on existing processes. We ensure to make each functionality configurable and easily customizable so that your application stays relevant in constantly changing market scenarios. To accomplish these goals we work with Functional experts to analyse the business processes from different perspectives and provide best-fit solutions. We have worked in several industries like Finance, Manufacturing, Agriculture, Pharma., Logistics and Retail."
    },
    {
        icon: ArrowRight,
        title: "Technical Consultation",
        description: "Dax software Solutions would partner with you for Microsoft Dynamics 365 F&O Custom development using -JavaScript/Web API Dev./Plugins/Workflow Creation/Microsoft SQL/ XML/ Scripting/ .NET/ C#, Data Migrations, Integrations, Upgrades, SSRS Reports and Patch fixes to deliver immediate business requirements. Additionally, we work towards sustainable solutions so that solutions remain relevant for longer period in constantly changing market conditions (Configurable solutions, Tech./Func. Documentations)."
    },
    {
        icon: TrendingUp,
        title: "System Improvements",
        description: "Sometimes non-functional requirements become very critical for business if appropriate attention is not paid. Dax is committed to bring value while fulfilling functional requirements like: Application performance, turnaround time, non-complex solutions, System compliance with local laws (if applicable), System security considerations, min. system downtime and Understandable UI for business."
    },
    {
        icon: Search,
        title: "Beyond Dynamics 365",
        description: "A lot more comes with an ERP. Integration is one of the important services where we shine. We have worked on more than 100+ integration projects and extended our support in integration needs like Dell Boomi, Celigo, Mulesoft, and API connectors to integrate Dynamics 365 F&O, CE, Power Platform, SFDC, Maximo CMMS, and Leaflogix. We are well versed in Digital Transformation, Website development, Product development, and more as a value addition."
    }
];

export default function ApplicationManagedServicesClientPage() {
    
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

  return (
    <div className="bg-background">
      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Dynamics 365 Application Managed Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Improve, Secure, and Optimize your Dynamics operations with DAX.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {SUPPORT_PROCESS.map((step, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col text-center p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                      <CardContent className="p-0 flex-grow flex flex-col items-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-bold font-headline mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline">Looking for some help on existing Dynamics 365 Solution?</h2>
            <Button asChild size="lg" className="mt-6">
                <Link href="/contact-us">SCHEDULE AN ASSESSMENT CALL</Link>
            </Button>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold font-headline mb-12">Dynamics 365 Application Managed Services by DAX</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {SERVICE_DETAILS.map(service => (
                    <Card key={service.title} className="p-6">
                        <CardContent className="p-0">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <service.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline text-accent">Ready for choosing us as your application managed support partner?</h2>
            <Button asChild size="lg" className="mt-6">
                <Link href="/contact-us">Let's Connect</Link>
            </Button>
        </div>
      </section>

    </div>
  );
}
