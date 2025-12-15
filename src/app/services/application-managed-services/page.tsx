
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Phone, Settings, Users, ArrowRight, TrendingUp, Search, Handshake, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

const WHY_DAX_ITEMS = [
    {
        title: "Certified Microsoft Partner",
        description: "We are certified Microsoft partners and well versed in resolving Dynamics 365 F&O, Business Central, CE/CRM, Power Platform or SFDC, Dell Boomi, 3rd Party integration issues."
    },
    {
        title: "Experienced Consultants",
        description: "Average experience of Dax team is 12+ years under guidance of senior architects having experience of around 20+ years."
    },
    {
        title: "One Stop Shop",
        description: "Along with supporting Dynamics 365 ERP, we are well versed in Digital Transformation, Website development, Product dev, SFDC, and more."
    },
    {
        title: "Global Team and 24/7 Support Help Desk",
        description: "Onshore-Offshore model to ensure full coverage."
    },
    {
        title: "Business Trainings",
        description: "All the trainings and business support documents provided for future reference."
    },
    {
        title: "Continuously Innovating",
        description: "We innovate constantly to bring the latest technology to resolve issues and keep you one step ahead of competitors."
    },
    {
        title: "Case Studies",
        description: "We learn and conquer. Access our case studies here (blog)."
    },
    {
        title: "Flexible Pricing",
        description: "We don’t force businesses into annual commitments or contracts. We have flexible pricing contracts based on business requirements and suitability."
    },
    {
        title: "Resource Allocation",
        description: "We allocate resources as per industry type, resource experience, business region, and criticality of the application. We take feedback from businesses regarding resources and bring improvement in our services."
    },
    {
        title: "Speed of Delivery",
        description: "Expedite the project delivery as team is available offshore and onshore. We overlap with customer timezone while operating on 24/7 support delivery model."
    },
    {
        title: "Cost Saving",
        description: "Since project delivery is faster and solutions from experience Dynamics Consultants are made configurable, you can save more time and money."
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

export default function ApplicationManagedServicesPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'application-managed-services');

  return (
    <div className="bg-background">
      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            {heroImage && (
                <div className="relative h-48 w-full max-w-lg mx-auto mb-8">
                    <Image 
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        data-ai-hint={heroImage.imageHint}
                        fill
                        className="object-contain"
                    />
                </div>
            )}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {SUPPORT_PROCESS.map((step, index) => (
                    <div key={step.title} className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">
                            {index + 1}
                        </div>
                        <h3 className="text-lg font-bold font-headline mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold font-headline mb-12">Why is DAX the right Dynamics 365 Managed Support Partner?</h2>
            <Card>
                <CardContent className="p-8 md:p-12">
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                        {WHY_DAX_ITEMS.map(item => (
                            <li key={item.title} className="flex items-start gap-3">
                                <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline">Looking for some help on existing Dynamics 365 Solution?</h2>
            <Button asChild size="lg" className="mt-6">
                <Link href="/contact">SCHEDULE AN ASSESSMENT CALL</Link>
            </Button>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold font-headline mb-12">Dynamics 365 Application Managed Services by DAX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline">Ready for choosing us as your application managed support partner?</h2>
            <Button asChild size="lg" variant="primary-outline" className="mt-6">
                <Link href="/contact">Let's Connect</Link>
            </Button>
        </div>
      </section>

    </div>
  );
}
