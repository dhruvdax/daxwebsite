
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SERVICES } from '@/lib/content';
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Consulting Services | DAX Software Solutions",
  description: "Explore our comprehensive consulting services, including business strategy, market analysis, operational efficiency, and organizational development.",
  canonicalPath: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-card">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            Our Consulting Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive suite of services designed to address your most critical business challenges and drive sustainable growth.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
            {SERVICES.map((service) => (
                <div key={service.title} id={service.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <service.icon className="h-6 w-6" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                        <p className="mt-1 text-muted-foreground">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-24">
            <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Detailed Service Offerings
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-md text-muted-foreground">
                    Dive deeper into how we can help your business.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {SERVICES.map((service) => (
                    <AccordionItem key={service.title} value={service.title}>
                        <AccordionTrigger className="text-lg font-headline">{service.title}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                        {service.details}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </div>
  );
}
