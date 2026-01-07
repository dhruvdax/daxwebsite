
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FileText,
  Settings,
  Database,
  Users,
  Wrench,
  Link as LinkIcon,
  TrendingUp,
  DollarSign,
  Heart,
  Package,
  Scaling,
  ThumbsUp,
} from 'lucide-react';
import Link from 'next/link';

const SOLUTIONS = [
    {
        icon: FileText,
        title: "Business Needs Assessment",
        description: "DAX will conduct a comprehensive analysis to understand your unique business goals. We'll identify areas where Business Central can drive significant value. This assessment will provide a clear roadmap for optimizing your operations."
    },
    {
        icon: Settings,
        title: "Customization and Configuration",
        description: "DAX specializes in customizing Business Central to meet your unique needs. Our experts will design a tailored solution to streamline your operations and enhance efficiency."
    },
    {
        icon: Database,
        title: "Data Migration",
        description: "DAX will efficiently migrate your data to Business Central, ensuring minimal disruption and data integrity. Our experts will carefully assess your existing data and tailor the migration process to meet your specific needs."
    },
    {
        icon: Users,
        title: "Training and Support",
        description: "DAX offers tailored training to empower your team to use Business Central effectively. Our training programs and ongoing support ensure your team is proficient and confident."
    },
    {
        icon: Wrench,
        title: "Ongoing Maintenance and Support",
        description: "DAX provides ongoing maintenance and support to ensure your Business Central runs smoothly. Our team monitors updates, patches, and security, offering regular support and troubleshooting. With us, you can focus on your business."
    },
    {
        icon: LinkIcon,
        title: "Integration with Other Systems",
        description: "DAX can seamlessly integrate Business Central with your existing systems. Our advanced integration technologies and in-house platform, AonFlow, ensure smooth data flow and tailored integration solutions."
    }
];

const BENEFITS = [
    {
        icon: TrendingUp,
        title: "Enhanced Efficiency and Productivity",
        description: "Streamline workflows and automate repetitive tasks, reducing manual data entry and improving overall efficiency. Gain real-time insights to make informed decisions and empower your team with a centralized and intuitive platform."
    },
    {
        icon: DollarSign,
        title: "Improved Financial Management",
        description: "Gain a comprehensive view of your financial performance, automate accounts receivable, accounts payable, and general ledger. Improve accuracy and reduce errors, ensuring financial compliance and peace of mind."
    },
    {
        icon: Heart,
        title: "Enhanced Sales and Customer Management",
        description: "Build stronger relationships with your customers by streamlining sales processes and closing deals faster. Provide exceptional customer service with a unified platform, enhancing customer satisfaction and loyalty."
    },
    {
        icon: Package,
        title: "Improved Inventory Management",
        description: "Avoid stockouts and excess inventory by tracking product movement and inventory levels in real time. Reduce costs associated with inventory management, optimizing your supply chain."
    },
    {
        icon: Scaling,
        title: "Scalability and Flexibility",
        description: "Easily adapt Business Central to your business's changing needs, customizing it to your specific requirements. Seamlessly integrate with other business applications, ensuring a cohesive and efficient workflow."
    },
    {
        icon: ThumbsUp,
        title: "Reduced Costs",
        description: "Streamline processes, minimize errors, and eliminate the need for multiple, disparate systems to reduce costs and improve your bottom line. By consolidating your business operations, you can achieve significant cost savings."
    }
]

export default function BusinessCentralClientPage() {
  return (
    <div className="bg-background">
       <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Microsoft Dynamics 365 Business Central
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Unify your business operations into a single, intelligent platform
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 transform -translate-y-20">
        <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 max-w-4xl mx-auto shadow-xl bg-card">
                <p className="text-lg text-center text-card-foreground">
                    Maximize your business potential with expert implementation of Microsoft Dynamics 365 Business Central with DAX. Our tailored solutions focus on optimizing your financial management, sales automation, inventory control, and customer relationship management. Experience the difference today.
                </p>
            </Card>
        </div>
      </section>

      <section className="pb-16 md:pb-24 -mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold font-headline mb-2">Microsoft Dynamics 365 Business Central Solutions Partner | DAX</h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution) => (
              <Card key={solution.title} className="p-6 text-center flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary rounded-xl">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <solution.icon className="w-10 h-10 text-primary" />
                    </div>
                  <h3 className="text-xl font-bold font-headline">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Are you struggling to streamline your business operations and maximize your efficiency?</h2>
            <Button asChild size="lg">
                <Link href="/contact-us">CONTACT US</Link>
            </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold font-headline mb-2">What are the benefits of Microsoft Dynamics 365 Business Central for your business?</h2>
            <div className="flex justify-center mb-12">
                <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {BENEFITS.map(benefit => (
                    <div key={benefit.title} className="flex items-start gap-6">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            <benefit.icon className="w-8 h-8 text-primary flex-shrink-0" />
                        </div>
                        <div>
                            <h3 className="font-bold font-headline text-lg">{benefit.title}</h3>
                            <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline text-accent">Which ERP fits you best: Dynamics 365 Business Central or Finance & Supply Chain?</h2>
            <p className="mt-2 text-lg text-muted-foreground">Discover the perfect Dynamics 365 solution for your business.</p>
            <Button asChild size="lg" className="mt-6">
                <Link href="/contact-us">Know More</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
