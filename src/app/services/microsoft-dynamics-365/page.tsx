
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Shield, Handshake, Clock, Users, Wrench, Package, Award, BrainCircuit, Recycle, ServerCog, Zap } from 'lucide-react';
import {
  Briefcase,
  GitCommit,
  BarChart,
  Cog,
  HeartHandshake,
  Timer,
  Rocket,
  Settings,
} from 'lucide-react';

const D365_SERVICES = [
  {
    icon: Cog,
    title: 'Application Managed Services',
    description: 'DAX excels in Application Managed Services, offering seamless support and optimization to ensure your applications run at peak performance, allowing you to focus on your core business while we take care of the technical intricacies.',
    href: '/services/application-managed-services',
  },
  {
    icon: Recycle,
    title: 'Continuous Enhancements',
    description: 'DAX specializes in Continuous Enhancements, providing agile solutions and iterative improvements to keep your systems at the forefront of innovation, ensuring sustained efficiency and adaptability in an ever-evolving digital landscape.',
    href: '/services/continuous-enhancements',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'DAX seamlessly implements cutting-edge solutions tailored to your business needs, ensuring a smooth transition and optimal functionality from legacy to future ready solutions unlocking enhanced performance and efficiency.',
    href: '/implementation',
  },
  {
    icon: GitCommit,
    title: 'Integration',
    description: 'DAX helps integration by harmonizing diverse systems, streamlining data flow, and fostering seamless connectivity. Our expertise ensures a cohesive and efficient digital ecosystem for your business operations via 3rd Party and In-House Applications.',
    href: '/integration',
  },
  {
    icon: Zap,
    title: 'Performance Tuning',
    description: 'DAX brings efficiency by fine-tuning operations to peak performance levels. Our Dynamics Experts ensures optimal functionality, allowing your business to operate seamlessly even in business critical hours.',
    href: '/services/performance-tuning',
  },
  {
    icon: ServerCog,
    title: 'System Optimization',
    description: 'We regularly fine-tune your system for peak performance through our ongoing optimization programs. Our team works 24*7 to ensure your systems run optimally without downtime.',
    href: '/services/system-optimization',
  },
];

const WHY_DAX_ITEMS = [
    {
        icon: Award,
        title: "Experience and Expertise",
        description: "Over two decades mastering Microsoft Dynamics 365. Our team brings unparalleled expertise, making us the go-to partner for ERP and CRM excellence."
    },
    {
        icon: Handshake,
        title: "Empathetic Trustworthy Partner",
        description: "More than a partner, we're your empathetic ally. Trust built on transparency, reliability, and a commitment to delivering tangible business value."
    },
    {
        icon: Clock,
        title: "24*7 Support Model",
        description: "We deliver both remote and on-site support for almost always. Our team works hard to make themselves available in different shifts which suits business timings."
    },
    {
        icon: BrainCircuit,
        title: "Proactive",
        description: "Dax Anticipates and solves challenges before they arise due to our extensive experience in industry and technology."
    },
    {
        icon: Package,
        title: "One-Stop-Shop",
        description: "Not just limited to ERP and CRM, our strong hand in integrations, issue resolution, customizations help in acting as a one stop for all your IT issues, backed by strong industry collaborations."
    },
    {
        icon: Users,
        title: "Resource Management",
        description: "We provide effective resource management as per the work in hand. We have an experienced workforce to handle urgent implementations or support to avoid any kind of hindrance or downtime while working."
    },
     {
        icon: Wrench,
        title: "In-House Product Development",
        description: "Our strength lies in product development. Our reliable in-house integration platform AonFlow reflects our competence in developing end-to-end products. We also have repository of Dynamics 365 plugins and generic customizations that can be reused in any industry."
    }
];

export default function MicrosoftDynamics365Page() {
  return (
    <div className="bg-background">
      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Microsoft Dynamics 365
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Dax, your reliable Microsoft Dynamics 365 Partner
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 transform -translate-y-20">
        <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
                <p className="text-lg text-center text-muted-foreground">
                    As seasoned ERP implementation experts and your trusted ERP support team, we're here to simplify your journey. Our focus is on delivering tailored services to boost your business and foster steady growth. Count on us for seamless ERP implementations and ongoing support, ensuring your experience in the ERP and CRM space is smooth and successful.
                </p>
                <div className="mt-8 text-center">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Our Partner:</p>
                    <div className="flex justify-center">
                      <Image src="/la-chamber-logo.png" alt="Los Angeles Area Chamber of Commerce" width={200} height={50} />
                    </div>
                </div>
            </Card>
        </div>
      </section>

      <section className="pb-16 md:pb-24 -mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold font-headline mb-12">Microsoft Dynamics 365 Solutions Partner | DAX</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {D365_SERVICES.map((service) => (
              <Card key={service.title} className="p-6 flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0 flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
                <div className="mt-6">
                    <Button asChild variant="link" className="px-0">
                        <Link href={service.href}>Learn More <ArrowRight className="ml-2" /></Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
           <h2 className="text-center text-3xl font-bold font-headline mb-12">Looking for customized Dynamics 365 solution cost?</h2>
           <div className="text-center">
                <Button asChild size="lg">
                    <Link href="/pricing">CHECK OUR PRICING</Link>
                </Button>
           </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold font-headline mb-12">Why should I choose DAX as my Dynamics 365 Partner?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {WHY_DAX_ITEMS.map(item => (
                    <div key={item.title} className="flex items-start gap-4">
                        <item.icon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold font-headline text-lg">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline">Looking for AX 2012 to Dynamics 365 upgrade services?</h2>
            <p className="mt-4 text-lg text-gray-300">Experience expert-led AX2012 to D365 migration with minimal disruption.</p>
            <Button asChild size="lg" className="mt-6" variant="primary-outline">
                <Link href="/services/ax-2012-to-d365-upgrade">Know More</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
