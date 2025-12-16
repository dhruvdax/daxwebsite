
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CountUp } from '@/components/count-up';
import { Check, Smile, TrendingUp, Zap, ThumbsUp, ShieldCheck, TrendingDown } from 'lucide-react';
import Link from 'next/link';

const IMPACT_METRICS = [
  {
    icon: TrendingDown,
    value: 30,
    suffix: '%',
    label: 'cost savings in utilizing these models',
  },
  {
    icon: Zap,
    value: 30,
    suffix: '%',
    label: 'boost in operational efficiency',
  },
  {
    icon: TrendingUp,
    value: 20,
    suffix: '%',
    label: 'boost in revenue',
  },
  {
    icon: ThumbsUp,
    value: 95,
    suffix: '%',
    label: 'customer satisfaction',
  },
  {
    icon: ShieldCheck,
    value: 99,
    suffix: '%',
    label: 'issue resolution',
  },
  {
    icon: Smile,
    value: 90,
    suffix: '%',
    label: 'Happy CEOs, CFOs, and CIOs',
  },
];

const SUBSCRIPTION_MONTHLY = [
    "Monthly billing", "Renewable", "Rapid deployment", "Ticket-based support", "Voice support", "User training sessions", "Supporting documents"
];

const SUBSCRIPTION_EXPERTISE = [
    "Annual billing", "Renewable", "Access to all Microsoft dynamics applications", "In-depth requirement gathering", "Ticket-based support", "Voice support", "User training sessions", "Prepayment and Customer loyalty discounts"
];

const PAYG_RESOURCES = [
    "Resource-based pricing", "Work with experts in the field", "Highly customizable model", "Supports short and long term projects", "Voice support", "User training sessions", "Supporting documents"
];

const PAYG_EFFORTS = [
    "Hourly pricing", "Targeted approach", "Utilization-based effort estimation", "Supports short implementations or support tasks", "Throughout user support", "Breakdown implementations", "Highly customisable model", "Convertible to other models"
];

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}


export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-accent">
                Flexible Pricing Models
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Unparalleled by our peers, our pricing models are customizable to suit your specific business needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button onClick={() => scrollToSection('quick-fix')} variant="default" size="lg">Quick-Fix Packages</Button>
                <Button onClick={() => scrollToSection('subscription')} variant="default" size="lg">Subscription Based</Button>
                <Button onClick={() => scrollToSection('payg')} variant="default" size="lg">Pay as You Go!</Button>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-accent dark:text-white">A Snapshot of Our Impact</h2>
            </div>
             <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3">
                {IMPACT_METRICS.map((metric) => (
                    <Card key={metric.label} className="text-center h-full flex flex-col justify-center p-6 shadow-lg hover:shadow-xl transition-shadow rounded-2xl border-t-4 border-primary bg-card">
                        <CardContent className="p-0 flex flex-col items-center gap-4">
                            <div className="mx-auto text-primary rounded-full w-20 h-20 flex items-center justify-center bg-primary/10">
                                <metric.icon className="w-10 h-10" />
                            </div>
                            <p className="text-5xl font-bold font-headline text-accent dark:text-white">
                                <CountUp end={metric.value} />{metric.suffix}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section id="quick-fix" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl">
                <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">Quick-Fix Packages</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                   Simply share your concerns, and DAX will analyze, create a winning plan, and provide a comprehensive end-to-end solution. With included training, Post Go-Live support, and on-the-go enhancements, we're dedicated to bring you ahead on track asap.
                </p>
                <Button asChild size="lg" className="mt-6">
                    <Link href="/quick-fix-packages">LEARN MORE</Link>
                </Button>
            </Card>
        </div>
      </section>

      <section id="subscription" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Subscription Based</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    We at DAX Software Solutions, offer the best deal amongst all of our peers. We have a very dynamic pricing model that can be moulded according to your need.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="p-8">
                    <h3 className="text-2xl font-bold font-headline mb-6 text-center">Monthly</h3>
                    <ul className="space-y-4">
                        {SUBSCRIPTION_MONTHLY.map(item => (
                            <li key={item} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
                <Card className="p-8 border-primary border-2 shadow-lg">
                     <h3 className="text-2xl font-bold font-headline mb-6 text-center text-primary">Industry Expertise</h3>
                    <ul className="space-y-4">
                        {SUBSCRIPTION_EXPERTISE.map(item => (
                            <li key={item} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </div>
      </section>

      <section id="payg" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Pay as You Go!</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Empowers You with Flexibility and Control, Allowing Customers to Pay Only for the Resources or the Efforts They Consume.
                </p>
            </div>
             <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="p-8">
                    <h3 className="text-2xl font-bold font-headline mb-6 text-center">Resources</h3>
                    <ul className="space-y-4">
                        {PAYG_RESOURCES.map(item => (
                            <li key={item} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
                <Card className="p-8">
                     <h3 className="text-2xl font-bold font-headline mb-6 text-center">Efforts</h3>
                    <ul className="space-y-4">
                        {PAYG_EFFORTS.map(item => (
                            <li key={item} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </div>
      </section>

       <section className="w-full py-16 md:py-24 bg-accent/90">
            <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent-foreground">
                        Seeking a personalized pricing plan tailored to your needs?
                    </h2>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button asChild size="lg" variant="primary-outline">
                        <Link href="/contact-us">Contact Us Now</Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
