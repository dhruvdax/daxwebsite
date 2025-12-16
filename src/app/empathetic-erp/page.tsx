
'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const CHAPTERS = [
    {
        id: 'chapter-1',
        title: 'Understanding User Needs',
        subtitle: 'It\'s not just about meeting requirements; it\'s about understanding and aligning with the human element of your business.',
        content: `The empathetic ERP approach goes beyond the surface, delving deeper into understanding the Application in place, common issues reported in the past, pain points, expansion plan, the company’s future vision, and your organizational model. Given our diverse experience in ERP implementations, we have observed that customers themselves are often, not completely aware of what is stopping them from growing.<br/><br/>Being an Empathetic ERP partner, we conduct a few assessment calls and thorough research before disclosing our winning strategy to them. An empathetic ERP Partner is not just to implement the requirements explicitly mentioned by customers but also to make them understand the integrations, future readiness, and technology advancements around their requirements enabling them to make an informed decision. An empathetic ERP Partner also brings implicit and non-communicated requirements which might be very important for our customers.`,
    },
    {
        id: 'chapter-2',
        title: 'Stakeholder Engagement',
        subtitle: 'An Empathetic ERP Partner connects the right audience to the right requirements to get the right decisions at precisely the right moment.',
        content: `We understand that ERP is that critical business application that is managed by the IT department but impacts all core business departments: Sales, Marketing, Customer Relations, Procurement, Production, Manufacturing, Finance, and more. Any single feature change in an ERP can impact multiple departments and that is why stakeholder engagement strategy becomes particularly critical for ERP implementations and support processes.<br/><br/>DAX comes up with Stakeholder MOS for transparent communication, status reporting, change management, inclusive discussion forums, Inter-department meetings, Prioritization Workshops, Impact measurement matrix, Surveys, Questionaries, Adoption check points and feedback sessions.`,
    },
    {
        id: 'chapter-3',
        title: 'Communication',
        subtitle: 'Within our Empathetic ERP platform, DAX’s communication strategy takes on a transformative role.',
        content: `At our Empathetic ERP Practices, we take deliberate actions to ensure our empathetic communication strategy delivers tangible benefits for our clients. Our strategy is crafted to facilitate open and transparent dialogues, fostering an environment where team members, clients and all other stakeholders feel valued and heard. We go beyond traditional communication tools by incorporating apps that promote communication and information flow at all levels.<br/><br/>Our empathetic approach extends to the customization of communication plans, allowing clients to tailor strategies to their unique organizational dynamics. We proactively anticipate and address potential issues, keeping communication channels transparent and open<br/><br/>Our Management Operating System(MOS) is designed to streamline the execution of communication plans, making the process efficient and effective. Through regular updates and feedback loops, we ensure that our clients are not only utilizing the tools but also experiencing positive outcomes in team cohesion and productivity.`,
    },
    {
        id: 'chapter-4',
        title: 'Change Management',
        subtitle: 'With empathetic change management, we make sure every change is a step toward your business\'s success.',
        content: `Change Management is often the most neglected area, but we foresee the impact of ignoring this critical process. Without analyzing the impact of these changes, getting the team ready to adopt changes and scheduling continuous feedback calls, your ERP investment would not be able to reap the best ROI (Return on Investment).<br/><br/>DAX initiates the process by aligning with leadership to ensure full alignment with the customer’s vision. We establish communication MOS after stakeholder management strategy, organize training sessions, and “How to do” documents for future access. We lead customer and department feedback sessions and maintain enhancement queues. We act as change agents, aligning with business users to understand their daily routines and help them transition from old to new ERP practices. Our empathetic change management process supports not only successful ERP implementation but also helps your organization adapt to the evolving with new changes.`,
    },
    {
        id: 'chapter-5',
        title: 'User Adoption',
        subtitle: 'Achieving a return on investment (ROI) from your technology investment relies on widespread adoption.',
        content: `User Adoption is at the forefront of our Empathetic ERP philosophy, and we take strategic steps to ensure a seamless transition and enthusiastic embrace of our platform by your team. Our empathetic design principles prioritize user-friendly interfaces, making it easy for individuals at all levels of technical proficiency to engage with the system effortlessly.<br/><br/>We conduct comprehensive training sessions and provide intuitive onboarding resources to empower users, ensuring they feel confident navigating the platform. Our empathetic support team is readily available to address any queries or concerns, fostering a supportive environment for users as they familiarize themselves with the system.<br/><br/>We understand that every organization is unique, and our platform allows for customization to align with your specific workflows and preferences. This tailored approach enhances user adoption by integrating our Empathetic ERP seamlessly into your existing processes.`,
    },
    {
        id: 'chapter-6',
        title: 'Problem Solving',
        subtitle: 'Solving one problem multiple times is not a solution!',
        content: `At DAX, our approach to problem-solving is defined by empathy, responsiveness, and a commitment to client success. We understand that effective solutions go beyond one time technical fixes; they require a deep understanding of our clients' unique challenges and bring end-to-end solutions. Our support teams undergo comprehensive empathy training, ensuring that every interaction reflects genuine understanding and compassion. As empathetic team members excel in active listening, deciphering not just the words but also the underlying emotions, leading to a more profound understanding of the root causes of problems.<br/><br/>What sets us apart is not just the resolution of problems but the personalized touch we bring to each solution. Continuous feedback loops and follow-ups ensure that our clients feel supported and heard throughout the entire problem-solving journey.`,
    },
    {
        id: 'chapter-7',
        title: 'Feedback and Continuous Improvement',
        subtitle: 'Continuous improvement is not just a goal; it\'s a culture at DAX.',
        content: `At DAX, we view feedback as a cornerstone of our commitment to continuous improvement. We value the insights shared by our clients as invaluable opportunities to enhance our services. Our feedback loop is designed to be a two-way street, fostering open communication and collaboration.<br/><br/>We actively seek input from our clients through surveys, reviews, and direct communication channels. This feedback not only helps us understand areas where we excel but, more importantly, identifies areas for improvement. We see each comment and suggestion as a roadmap for refining our products and services.<br/><br/>We take the time to delve into the 'why' of your feedback, acknowledging the human element in every interaction. Our teams are not just problem solvers; they're empathetic listeners who appreciate the significance of your experiences. This empathetic lens not only guides our continuous improvement efforts but also informs the design of features and solutions that resonate with the real-world needs of our clients.`,
    },
    {
        id: 'chapter-8',
        title: 'Reduced Resistance',
        subtitle: 'Only Change is constant and so DAX ensures you are well ahead of the curve in adopting the changes.',
        content: `DAX understands that adoption is paramount for ERP’s success, our intuitive solution interfaces, minimizes the learning curve. Personalized onboarding experiences tailor the introduction to each client's unique needs, making the adoption process relatable and relevant.<br/><br/>We clearly articulate the value proposition of the ERP system, emphasizing the long-term benefits and improvements it brings to their operations. We provide robust change management support to help clients navigate the transition smoothly. This includes proactive communication, addressing concerns, and emphasizing the positive impact of the ERP system on their daily workflows.<br/><br/>To further alleviate resistance, we highlight success stories, showcasing how others have embraced and benefited from our ERP solutions. Flexibility in implementation allows clients to customize the system to align with their workflows, emphasizing a partnership built on collaboration.`,
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

        CHAPTERS.forEach(chapter => {
            if (!chapterRefs.current[chapter.id]) {
                const el = document.getElementById(chapter.id);
                if (el) {
                    chapterRefs.current[chapter.id] = el;
                    observer.observe(el);
                }
            }
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
            <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                        Empathetic ERP
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        The Key to Successful Implementations and Lasting Partnerships
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-[1fr_300px] gap-12">
                        <div className="space-y-12">
                            {CHAPTERS.map((chapter, index) => (
                                <Card 
                                    key={chapter.id} 
                                    id={chapter.id}
                                    ref={el => { chapterRefs.current[chapter.id] = el; }}
                                    className="bg-card shadow-sm p-8"
                                >
                                    <h2 className="text-2xl font-bold font-headline mb-4 uppercase">CHAPTER {index+1}: {chapter.title}</h2>
                                    <p className="text-lg font-semibold text-muted-foreground mb-4 italic">{chapter.subtitle}</p>
                                    <div 
                                        className="text-muted-foreground space-y-4"
                                        dangerouslySetInnerHTML={{ __html: chapter.content.replace(/\* \*(.*?)\* \*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                                    />
                                    <Button asChild variant="link" className="px-0 mt-4">
                                        <Link href={`/download-guide/${chapter.id}`}>
                                            UNLOCK FULL GUIDE <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </Card>
                            ))}
                        </div>

                        <aside className="relative">
                            <div className="sticky top-32">
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
                            <Link href="/contact-us">CALL YOUR EMPATHETIC PARTNER</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
