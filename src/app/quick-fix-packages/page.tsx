
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const QUICK_FIX_PACKAGES = [
    {
        title: "Data Migration",
        description: "Explore DAX's swift data solutions",
        href: "#"
    },
    {
        title: "Integration Failures",
        description: "Start with DAX Rapid Integration Rescue strategy",
        href: "#"
    },
    {
        title: "Performance Bottlenecks",
        description: "Receive a performance health checkup report from DAX",
        href: "#"
    },
    {
        title: "Custom Code Bugs",
        description: "Implement future proof standard coding practices",
        href: "#"
    },
    {
        title: "Broken Implementations",
        description: "Experience DAX's Empathetic Support System.",
        href: "#"
    },
    {
        title: "Reporting Error",
        description: "Eliminate Reporting Errors and access pre-built reports to save time.",
        href: "#"
    },
    {
        title: "Challenges with System Upgrades",
        description: "Unlock smooth upgrade process with zero downtime",
        href: "#"
    },
    {
        title: "ERP Cost Overruns",
        description: "Optimize Licensing Post-Assessment by DAX.",
        href: "#"
    }
];

export default function QuickFixPackagesPage() {
  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
              Secure Your ERP
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                Choose the most relevant quick-fix package to set things right.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24 transform -translate-y-20">
        <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
                <div className="text-center">
                     <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">How does it apply to me?</h2>
                     <p className="mt-4 text-lg text-muted-foreground">
                        You have a high number of incidents and system performance issues. You lack resources internally or externally to get the job done. You've experienced a bad implementation with your current ERP vendor. Your business is not able to scale due to various manual processes.
                    </p>
                </div>
            </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 -mt-32">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">DAX Quick-Fix Packages</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {QUICK_FIX_PACKAGES.map((pkg) => (
                    <Card key={pkg.title} className="p-6 text-center flex flex-col items-center justify-between shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold font-headline mb-3 uppercase">{pkg.title}</h3>
                            <p className="text-muted-foreground">{pkg.description}</p>
                        </div>
                        <Button asChild variant="default" className="mt-6 w-full">
                            <Link href={pkg.href}>QUICK FIX <ArrowRight /></Link>
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
                <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent-foreground">
                    Issue isn't listed or require multiple fixes?
                </h2>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
                <Button asChild size="lg" variant="primary-outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                    <Link href="/contact">BUILD A CUSTOMIZED SOLUTIONS <ArrowRight /></Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
