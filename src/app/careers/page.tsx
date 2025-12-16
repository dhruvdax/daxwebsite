
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CountUp } from '@/components/count-up';
import {
  Briefcase,
  CheckCircle,
  MapPin,
  Clock,
  BookOpen,
  Award,
  Users,
  HeartHandshake,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const METRICS = [
  { value: 330, suffix: '+', label: 'Active Clients' },
  { value: 850, suffix: '+', label: 'Projects Done' },
  { value: 25, suffix: '+', label: 'Team Advisors' },
];

const BENEFITS = [
  {
    icon: CheckCircle,
    title: 'Comprehensive Benefits',
    description:
      "DAX offers a competitive benefits package, including health insurance, paid time off, and competitive salary, ensuring your holistic well-being.",
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Elevate your skills with ongoing learning opportunities, workshops, and mentorship programs, fostering professional growth.',
  },
  {
    icon: HeartHandshake,
    title: 'Flexibility in Work',
    description:
      'Enjoy a balanced life with flexible work arrangements, including remote options, acknowledging the importance of work-life harmony.',
  },
  {
    icon: Award,
    title: 'Recognition and Advancement',
    description:
      'DAX values your contributions, providing clear paths for career advancement.',
  },
];

const OPENINGS = [
    {
        title: 'Warehouse Management Consultant',
        description: "We're looking for a mid-level Warehouse Management Consultant to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
    },
    {
        title: 'Functional Consultant (Manufacturing and Warehouse Management)',
        description: "We're looking for a mid-level Functional Consultant to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
    },
    {
        title: 'Technical Architect',
        description: "We're looking for a Technical Architect to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
    },
    {
        title: 'Technical Consultant',
        description: "We're looking for a Technical Consultant to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
    },
    {
        title: 'Applications Consultant',
        description: "We're looking for a Applications Consultant to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
    },
    {
        title: 'Business Software Analyst',
        description: "We're looking for a Business Software Analyst to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
    },
    {
        title: 'Senior ERP Developer',
        description: "We're looking for a Senior ERP Developer to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
    },
];

const scrollToOpenings = () => {
    const openingsSection = document.getElementById('current-openings');
    if (openingsSection) {
        openingsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

export default function CareersPage() {
  return (
    <div className="bg-background">
      <section className="bg-accent text-accent-foreground py-20 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Join us to Revolutionize the <span className="text-primary">Solutions of Future</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Take Charge of Your Career Growth
          </p>
          <Button onClick={scrollToOpenings} size="lg" className="mt-8">
            Browse Current Openings
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 transform -translate-y-20">
        <div className="container mx-auto">
            <Card className="shadow-xl">
                <CardContent className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {METRICS.map((metric) => (
                            <div key={metric.label}>
                                <p className="text-5xl font-bold font-headline text-primary">
                                    <CountUp end={metric.value} suffix={metric.suffix} />
                                </p>
                                <p className="text-muted-foreground mt-2">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      <section className="pb-16 md:pb-24 -mt-16">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold font-headline text-accent">Let's grow together</h2>
                    <p className="text-muted-foreground">At DAX, growth is not just an individual pursuit; it's a shared adventure. We're committed to providing an environment that nurtures your professional development, offering opportunities for skill enhancement, career advancement, and continuous learning.</p>
                </div>
                <div className="relative h-72 w-full">
                    <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHBlb3BsZSUyMGxhcHRvcHxlbnwwfHx8fDE3MjE4MzY3MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team collaborating in an office" fill className="rounded-lg object-cover shadow-lg" data-ai-hint="team collaboration office" />
                </div>
            </div>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-72 w-full md:order-last">
                    <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb2xsYWJvcmF0aXZlJTIwdGVhbXxlbnwwfHx8fDE3NjkyNzM3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Diverse team working together at a table" fill className="rounded-lg object-cover shadow-lg" data-ai-hint="diverse team working" />
                </div>
                <div className="space-y-4 md:order-first">
                    <h2 className="text-3xl font-bold font-headline text-accent">We don't just want Dax to be a fantastic place for you to work.</h2>
                    <p className="text-muted-foreground">While our goal is to create an environment where your skills are valued, your contributions are recognized, and your career finds purpose. Here, you're not just an employee; you're an integral part of a collaborative and innovative team.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1 space-y-4">
                    <h2 className="text-3xl font-bold font-headline">Join Us and Experience the DAX Difference!</h2>
                    <p className="text-muted-foreground">We're not just building a team; we're creating a family of talented individuals who share a common goal of excellence. When you join DAX, you become a part of something extraordinary – a place where your skills are valued, your ideas are heard, and your career flourishes.</p>
                    <Button onClick={scrollToOpenings}>Check Latest Openings</Button>
                </div>
                 <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {BENEFITS.map((benefit) => (
                        <Card key={benefit.title} className="p-6">
                            <CardContent className="p-0">
                                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-lg font-bold font-headline">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section id="current-openings" className="py-16 md:py-24">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold font-headline text-center mb-2">Current Openings</h2>
             <div className="flex justify-center mb-12">
                <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
                {OPENINGS.map((opening, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-4 gap-4 items-center">
                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-bold font-headline text-primary">{opening.title}</h3>
                                    <p className="text-muted-foreground mt-1 mb-4">{opening.description}</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{opening.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{opening.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:text-right">
                                    <Button asChild>
                                        <Link href="/contact">Apply</Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
}
