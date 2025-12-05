'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const CHAPTERS = [
    {
        id: 'chapter-1',
        title: 'Understanding User Needs',
        content: `The first chapter asserts that ERP projects succeed when implementers genuinely understand the human element of a business. DAX explores not only explicit requirements but also **implicit needs** – pain points, growth plans and a client’s future vision. During discovery and assessment calls the team researches and documents functional, technical and regulatory requirements. They explain how existing applications integrate with **Dynamics 365** and plan for future integrations. This empathetic approach uncovers hidden requirements that might otherwise be missed.`,
    },
    {
        id: 'chapter-2',
        title: 'Stakeholder Engagement',
        content: `Enterprise-wide ERP changes touch multiple departments (sales, marketing, procurement, manufacturing, finance etc.), so engaging the right stakeholders at the right time is critical. DAX’s **Stakeholder Management Operating System (MOS)** keeps all parties informed through transparent status reports, change-impact discussions and feedback sessions. Cross-department meetings, prioritization workshops, impact measurement matrices, surveys and adoption checkpoints ensure that voices from across the organization are heard.`,
    },
    {
        id: 'chapter-3',
        title: 'Communication',
        content: `DAX emphasises open dialogue and tailored communication. They integrate apps (e.g., Teams, email) to streamline information flow and design communication plans specific to each organisation. Their Management Operating System schedules updates, collects feedback and provides regular status reports. This ensures stakeholders feel valued and fosters trust throughout the implementation.`,
    },
    {
        id: 'chapter-4',
        title: 'Change Management',
        content: `Change management is positioned as essential for maximizing return on investment. DAX starts by aligning with leadership on vision, defining goals and preparing teams. After finalizing stakeholder engagement and communication plans, they organise training sessions, create “how to” documents and schedule feedback checkpoints. Robust change-management support helps users adopt new processes and understand how the ERP will transform their daily workflows.`,
    },
    {
        id: 'chapter-5',
        title: 'User Adoption',
        content: `ERP success depends on widespread adoption. DAX designs intuitive interfaces to minimize the learning curve and provides extensive training, user-friendly onboarding resources and responsive support. They tailor the platform to align with each client’s workflows, so users feel comfortable and motivated to use the system.`,
    },
    {
        id: 'chapter-6',
        title: 'Problem Solving',
        content: `The company’s problem-solving strategy focuses on **empathy and responsiveness** rather than repeatedly applying the same solution. Support teams undergo empathy training and practise active listening to diagnose root causes. DAX offers personalised solutions, follows up after resolutions and maintains continuous feedback loops to ensure issues are truly resolved.`,
    },
    {
        id: 'chapter-7',
        title: 'Feedback and Continuous Improvement',
        content: `DAX treats feedback as an opportunity for improvement. They solicit input via surveys, reviews and direct communications. The company digs into the “why” behind feedback to understand not just what clients say but what they need. Empathetic listening informs the roadmap for enhancements and shapes product features so that they resonate with real-world needs.`,
    },
    {
        id: 'chapter-8',
        title: 'Reduced Resistance',
        content: `The final chapter acknowledges that change is constant and aims to keep clients ahead of the curve. To minimise adoption resistance, DAX provides personalised onboarding experiences and intuitive solution interfaces. They clearly articulate the ERP’s value proposition, highlighting long-term benefits and improvements. Robust change-management support helps clients navigate transitions through proactive communication, addressing concerns and showing the positive impacts on daily workflows. Success stories illustrate how other clients have benefited, and flexible implementation allows customers to tailor the system to their processes.`,
    },
];

export default function EmpatheticErpPage() {
    const [activeChapter, setActiveChapter] = useState('chapter-1');
    const chapterRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -65% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveChapter(entry.target.id);
                }
            });
        }, observerOptions);
        
        Object.keys(chapterRefs.current).forEach(id => {
            const el = chapterRefs.current[id];
            if (el) observer.observe(el);
        });

        return () => {
            Object.values(chapterRefs.current).forEach(el => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const handleLinkClick = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        setActiveChapter(id);
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -120; // to account for sticky header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-background">
            <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                        Empathetic ERP
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        The key to a successful & empathetic implementation
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-lg text-muted-foreground">
                            DAX Software Solutions’ **Empathetic ERP** guide explains how an empathy-driven approach to ERP implementation yields long-term success. It positions the company as a *partner* rather than a vendor, stressing the importance of understanding people, effective communication, change management and continuous improvement. Below are the main points from each chapter of the guide and the concluding call to action.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-[1fr_300px] gap-12">
                        <div className="space-y-12">
                            {CHAPTERS.map((chapter) => (
                                <Card 
                                    key={chapter.id} 
                                    id={chapter.id}
                                    ref={el => { chapterRefs.current[chapter.id] = el; }}
                                    className="bg-card shadow-sm p-8"
                                >
                                    <h2 className="text-2xl font-bold font-headline mb-4 uppercase">{chapter.title}</h2>
                                    <div 
                                        className="text-muted-foreground space-y-4"
                                        dangerouslySetInnerHTML={{ __html: chapter.content.replace(/\* \*(.*?)\* \*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                                    />
                                    <Button variant="link" className="px-0 mt-4">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                </Card>
                            ))}
                        </div>

                        <aside className="relative">
                            <div className="sticky top-32">
                                <Card className="p-6">
                                    <h3 className="text-lg font-bold font-headline mb-4">Empathy</h3>
                                    <nav>
                                        <ul className="space-y-2">
                                            {CHAPTERS.map(chapter => (
                                                <li key={chapter.id}>
                                                    <a 
                                                        href={`#${chapter.id}`}
                                                        onClick={(e) => handleLinkClick(chapter.id, e)}
                                                        className={cn(
                                                            'block text-sm text-muted-foreground transition-colors hover:text-primary',
                                                            activeChapter === chapter.id && 'text-primary font-semibold'
                                                        )}
                                                    >
                                                        {chapter.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </Card>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

             <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
                <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <div className="space-y-3">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent-foreground">
                           Ready to Transform Your Business?
                        </h2>
                         <p className="text-lg text-gray-300">Call your empathetic partner to transform their business.</p>
                    </div>
                    <div className="mx-auto w-full max-w-sm space-y-2">
                        <Button asChild size="lg">
                            <Link href="/contact">CALL YOUR EMPATHETIC PARTNER</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
