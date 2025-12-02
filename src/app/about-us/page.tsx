
'use client';
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TEAM_MEMBERS } from "@/lib/content";
import { useState, useEffect, useRef } from "react";

const TABS = {
    'global-team': 'Global Team',
    'deep-expertise': 'Deep Expertise',
    'core-values': 'Our Core Values',
    'our-leadership': 'Our Leadership',
};

const INDUSTRY_EXPERTISE = [
    'Agriculture', 'Food and Beverages', 'Apparel', 'Public sector enterprises', 'Energy sector', 'Information Technologies', 'Retail', 'Oil and Gas'
];

const TECHNOLOGY_EXPERTISE = [
    'Dynamics 365 Finance', 'Dynamics 365 Sales', 'Dynamics 365 Marketing', 'Dynamics 365 Customer Service', 'Dynamics 365 Field Service', 'Dynamics 365 Supply Chain Management', 'Dynamics 365 Commerce', 'Dynamics 365 Business Central', 'Dynamics 365 CRM', 'Dynamics 365 AI for Sales, Customer Service & Market Insights', 'Power Apps', 'Integrations with Dynamics 365', 'Microsoft Licensing'
];

const CORE_VALUES = [
    {
        title: 'Integrity',
        description: 'Integrity is our moral compass that guides our decisions. We hold ourselves to the highest ethical standards in all our endeavors. Our Say-Do ratio is an indicator of our integrity. We take accountability for our actions regardless of the circumstances.'
    },
    {
        title: 'Diversity & Inclusion',
        description: 'We foster a culture of inclusion and diversity with a diverse team bringing their unique perspectives. We ensure that every voice is heard and valued. This helps us bring innovative solutions for the diverse business portfolios of our customers.'
    },
    {
        title: 'Flexibility',
        description: 'We are agile, adaptable, and always willing to pivot toward achieving the best results. We understand and respond quickly to changes and minimize their impact on our overall deliverables. Flexibility is not just a core value, but a promise that we will always be on the front foot in rapidly changing market conditions.'
    }
];

const LEADERSHIP = [
    { name: 'Sanjeev Munjal', role: 'Founder & Managing Partner', imageId: 'leadership-1' },
    { name: 'Munish Sethi', role: 'Founder & Managing Partner', imageId: 'leadership-2' },
    { name: 'Puneet Nasa', role: 'Managing Partner', imageId: 'leadership-3' },
];

export default function AboutUsPage() {
    const [activeTab, setActiveTab] = useState('global-team');
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -50% 0px', // Adjust top margin to account for sticky header
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        }, observerOptions);

        Object.keys(TABS).forEach(id => {
            const el = document.getElementById(id);
            if(el) {
                sectionRefs.current[id] = el;
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

    const leadershipImages = LEADERSHIP.map(l => ({
        ...l,
        image: PlaceHolderImages.find(img => img.id === l.imageId)
    }));

    const globalTeamImage = PlaceHolderImages.find(img => img.id === 'global-team');

  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
                Microsoft Solution Partner with <span className="text-primary">20+ years</span> of industry experience in ERP and CRM
            </h1>
            <p className="mt-6 max-w-4xl mx-auto text-lg text-muted-foreground">
                Microsoft Dynamics | Power Apps | Salesforce | ERP Consulting | Managed Services | Microsoft Licensing
            </p>
        </div>
      </section>

      <div className="sticky top-[108px] z-40 bg-card shadow-md">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-center border-b">
                {Object.entries(TABS).map(([key, value]) => (
                     <button 
                        key={key}
                        onClick={() => {
                            setActiveTab(key);
                            const element = document.getElementById(key);
                            if (element) {
                                const yOffset = -100; // a little space from top
                                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({top: y, behavior: 'smooth'});
                            }
                        }}
                        className={`py-4 px-2 sm:px-6 text-center font-medium text-sm sm:text-base border-b-4 transition-colors ${
                            activeTab === key
                                ? 'border-primary text-primary'
                                : 'border-transparent text-muted-foreground hover:text-foreground'
                        }`}
                     >
                        {value}
                     </button>
                ))}
            </div>
        </div>
      </div>

      <main>
        <section id="global-team" className="py-16 md:py-24 bg-white dark:bg-card">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">Global Team</h2>
                  <p className="text-muted-foreground text-lg">
                    Our teams span the globe, with a dynamic presence in India, the US, and the ASEAN region. This global footprint translates into 24-hour service coverage for our managed services, ensuring that we are always there when you need us. With an average experience of 10 years, DAX boasts a blend of seasoned consultants and architects with over two decades of expertise. Each team member's contribution is held in high regard, reflecting in the quality of work we deliver to our clients. The collective experience and expertise of each member are the driving force behind DAX’s success meter, standing & rising high from more than a decade!
                  </p>
                   <Button asChild>
                    <a href="/team">Meet Our Team</a>
                  </Button>
                </div>
                <div className="relative h-80 w-full">
                    {globalTeamImage && (
                        <Image
                            src={globalTeamImage.imageUrl}
                            alt={globalTeamImage.description}
                            fill
                            className="rounded-lg object-cover shadow-lg"
                            data-ai-hint={globalTeamImage.imageHint}
                        />
                    )}
                </div>
              </div>
            </div>
        </section>

        <section id="deep-expertise" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Deep Expertise</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">We bring a wealth of know-how, making things easy for you.</p>
                </div>
                <Card className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold font-headline mb-6">Industry</h3>
                            <ul className="space-y-3">
                                {INDUSTRY_EXPERTISE.map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span className="text-muted-foreground text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h3 className="text-2xl font-bold font-headline mb-6">Technology</h3>
                            <ul className="space-y-3">
                                {TECHNOLOGY_EXPERTISE.map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span className="text-muted-foreground text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </section>

        <section id="core-values" className="py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our Core Values</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {CORE_VALUES.map(value => (
                        <Card key={value.title} className="p-8 text-center shadow-md hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl font-bold font-headline mb-4">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="our-leadership" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Meet Our Leadership</h2>
                     <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground italic">"A leader is one who knows the way, goes the way, and shows the way." — John C. Maxwell</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {leadershipImages.map((member) => (
                        <div key={member.name} className="text-center flex flex-col items-center">
                            <Avatar className="h-40 w-40 border-4 border-primary/20 mb-4">
                                {member.image && (
                                    <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint} />
                                )}
                                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                            <p className="text-md text-primary">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

         <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent">
                        Join our team of global Dynamics 365 experts!
                    </h2>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button asChild size="lg" className="w-full">
                        <a href="#">Explore Opportunities</a>
                    </Button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

    