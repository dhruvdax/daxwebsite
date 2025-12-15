
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Check, Newspaper } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const COMPARISON_DATA = [
    { aspect: 'Deployment', ax: 'On-premises', d365: 'Cloud-based', better: 'Depends on IT strategy and infrastructure. Cloud offers scalability and reduced maintenance, while on-premises provides more control over data.' },
    { aspect: 'Licensing and Pricing', ax: 'Traditional model', d365: 'Subscription-based', better: 'Depends on budget and preference for upfront vs. recurring costs.' },
    { aspect: 'Architecture', ax: 'Client-server', d365: 'Cloud-native', better: 'Cloud-native architecture offers flexibility, scalability, and accessibility.' },
    { aspect: 'Customization', ax: 'High-level', d365: 'Configuration-focused', better: 'Depends on the level of customization needed. High-level customization may require more effort & is less scalable in comparison to Config-based solutions.' },
    { aspect: 'Features and Functionality', ax: 'Comprehensive', d365: 'Enhanced with AI and analytics', better: 'Dynamics 365 F&O offers advanced features like AI and ML, which can enhance decision-making and efficiency.' },
    { aspect: 'Integration', ax: 'Standard integration tools', d365: 'Tight integration with Microsoft cloud services', better: "Dynamics 365 F&O integrates seamlessly with Microsoft's ecosystem, offering enhanced collaboration and data sharing." },
    { aspect: 'Collaboration', ax: 'Limited collaboration tools', d365: 'Enhanced collaboration with Office 365, Power Platform, etc.', better: 'Dynamics 365 F&O provides better collaboration capabilities, especially for organizations using other Microsoft cloud services.' },
    { aspect: 'Updates and Maintenance', ax: 'Manual updates', d365: 'Automatic updates via cloud', better: 'Cloud-based updates reduce IT overhead and ensure access to the latest features and security patches.' },
];

const UPGRADE_REASONS = [
    'Advanced Features: Access AI, predictive analytics, and tighter integrations for smarter decision-making.',
    'Cloud Advantage: Enjoy scalability, automatic updates, and seamless collaboration from anywhere.',
    'Future-Proof Investment: Stay ahead with Microsoft\'s ongoing innovations and technology update.',
    'Enhanced Collaboration: Real-time data sharing and unified workflows boost team productivity.',
    'Security and Compliance: Benefit from Microsoft\'s robust security measures and industry compliance standards.'
];

const UPGRADE_PROCESS = [
    { 
        title: 'Assessment & Planning', 
        description: 'Firstly, we begin with a thorough evaluation of your current system and business needs. Our team collaborates closely with you to understand and document your specific requirements. Based on this assessment, we develop a tailored upgrade plan that outlines the scope, tasks, resources required, and timeline for the project.'
    },
    { 
        title: 'Migration & Implementation',
        description: 'Secondly, our Migration and Configuration step focuses on migrating your data seamlessly to Dynamics 365 F&O while ensuring data integrity and accuracy. We configure Dynamics 365 F&O to align perfectly with your business processes, including setting up modules, workflows, security settings, and any necessary customizations. We aim to maintain a smooth integration with your existing systems and external data sources.'
    },
    { 
        title: 'Testing & Training',
        description: 'The third step is Testing and Quality Assurance, where we conduct rigorous testing to validate the functionality, performance, and usability of the upgraded system. This includes various testing scenarios such as user acceptance testing (UAT), regression testing, performance testing, and security testing. Our QA process is designed to identify and address any issues or discrepancies, ensuring that the upgraded system meets your business needs, complies with industry standards, and provides a seamless user experience.'
    },
    { 
        title: 'Go-Live & Support',
        description: 'Lastly, in our Training and Go-Live Support phase, we provide customized training sessions for your team to familiarize them with the new features, functionalities, and workflows of Dynamics 365 F&O. Additionally, our support team is available during and after the go-live phase to provide immediate assistance and address any issues in the upgraded system.'
    },
];

const FAQS = [
    { question: 'When is the right time to upgrade to Dynamics 365 F&O?', answer: 'The right time to upgrade depends on your business needs, system complexity, and readiness for new features. Our experts can assess your situation and recommend the optimal timing for your upgrade.' },
    { question: 'What are the benefits of upgrading to Dynamics 365 F&O?', answer: 'Upgrading to Dynamics 365 F&O offers numerous benefits, including streamlined operations, advanced analytics, scalability, enhanced security, compliance updates, and access to the latest features for improved efficiency and business growth.' },
    { question: 'How much time does it take to Upgrade to Dynamics 365 F&O?', answer: 'The duration varies based on the complexity of your system and customization requirements. Our experts will assess and provide a tailored timeline for your upgrade project.' },
    { question: 'Who can support upgrading to Dynamics 365 F&O?', answer: 'DAX’s team of experienced consultants and developers specializes in Dynamics 365 upgrades, ensuring a successful transition with minimal disruption.' },
    { question: 'Who can provide Dynamics 365 F&O upgrade Services?', answer: 'DAX can help you upgrade to Microsoft Dynamics 365 F&O without any downtime. Contact us to find out more.' },
    { question: 'What happens if I do not upgrade to Dynamics 365 F&O?', answer: 'You may miss critical updates, security enhancements, and new features, limiting your ability to compete effectively and adapt to evolving business demands.' },
    { question: 'What are the different options for upgrading to Dynamics 365 F&O?', answer: 'We offer flexible upgrade paths, including direct upgrades, phased migrations, and hybrid approaches, tailored to your business objectives and timelines.' },
    { question: 'Can I migrate my historical data from Dynamics AX to Dynamics 365 F&O?', answer: 'Yes, data migration tools and processes are available to facilitate the transfer of historical data from Dynamics AX to Dynamics 365 F&O. It is essential to plan and execute data migration carefully to ensure data integrity and accuracy.' },
    { question: 'How can I plan an upgrade from Dynamics AX to Dynamics 365 F&O?', answer: 'As a Microsoft Certified Partner, DAX can help you plan upgrade seamlessly by assessing your Dynamis AX system and expectations from Dynamics 365 F&O.' },
];

export default function AX2012ToD365UpgradePage() {
    const upgradeImage = PlaceHolderImages.find(img => img.id === 'd365-upgrade-hero');

    return (
        <div className="bg-background">
            <section className="bg-accent text-accent-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                        AX 2012 to Dynamics 365 Upgrade Services
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        Experience expert-led AX2012 to D365 migration with minimal disruption.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Card className="p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
                        <h2 className="text-3xl font-bold font-headline text-accent dark:text-white text-center">What is Dynamics AX and Dynamics 365 F&O?</h2>
                        <p className="mt-4 text-lg text-muted-foreground text-center">
                            Dynamics AX belongs to the older generation of Microsoft's ERP software, whereas Dynamics 365 represents the latest cloud-based suite of business applications, combining both ERP and CRM capabilities.
                        </p>
                    </Card>
                    {upgradeImage && (
                        <div className="mt-12 text-center">
                            <h2 className="text-2xl font-bold font-headline text-accent dark:text-white mb-4">What is Dynamics AX and Dynamics 365 F&O?</h2>
                            <Image 
                                src={upgradeImage.imageUrl}
                                alt={upgradeImage.description}
                                data-ai-hint={upgradeImage.imageHint}
                                width={800}
                                height={400}
                                className="mx-auto"
                            />
                        </div>
                    )}
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-accent text-accent-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold font-headline">Looking for experts to help you with AX 2012 to D365 upgrade?</h2>
                    <p className="mt-2 text-lg text-gray-300">With 20+ years of industry experience in ERP and CRM, DAX is proficient in crafting tailored solutions to meet the needs of businesses.</p>
                    <Button asChild size="lg" variant="primary-outline" className="mt-6">
                        <Link href="/contact">CONTACT US</Link>
                    </Button>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold font-headline mb-4">What is the difference between Dynamics AX and Dynamics 365 F&O, and which one is better?</h2>
                    <p className="text-center text-muted-foreground text-lg mb-12 max-w-4xl mx-auto">Dynamics AX and Dynamics 365 Finance and Operations (F&O) are both enterprise resource planning (ERP) solutions by Microsoft. However, there are several key differences between the two, let us help you analyze both on distinct aspects:</p>
                    <Card>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-bold text-foreground">Aspect</TableHead>
                                    <TableHead className="font-bold text-foreground">Dynamics AX</TableHead>
                                    <TableHead className="font-bold text-foreground">Dynamics 365 F&O</TableHead>
                                    <TableHead className="font-bold text-foreground">What is better?</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {COMPARISON_DATA.map((row) => (
                                    <TableRow key={row.aspect}>
                                        <TableCell className="font-medium">{row.aspect}</TableCell>
                                        <TableCell>{row.ax}</TableCell>
                                        <TableCell>{row.d365}</TableCell>
                                        <TableCell>{row.better}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold font-headline mb-4">Why should I upgrade from Dynamics AX to Dynamics 365 F&O?</h2>
                    <p className="text-center text-lg text-muted-foreground mb-8">You should upgrade to Dynamics 365 F&O for:</p>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {UPGRADE_REASONS.map(reason => (
                            <div key={reason} className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <p className="text-muted-foreground">{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold font-headline mb-12">How to upgrade from Dynamics AX to Dynamics 365 F&O?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {UPGRADE_PROCESS.map((step, index) => (
                            <Card key={step.title} className="p-6 text-center">
                                <CardContent className="p-0">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4 mx-auto">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold font-headline mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl font-bold font-headline">DAX Recommendation: Upgrade to Dynamics 365 F&O now!</h2>
                    <p className="text-lg text-muted-foreground mt-4">With over a decade of hands-on experience navigating Dynamics AX and Dynamics 365 F&O, we have witnessed the remarkable transformations that upgrading brings. In fact, 82% of businesses that have upgraded to Dynamics 365 F&O reported significant improvements in productivity and profitability. Our proven track record instills confidence that an upgrade is not just an option but a strategic imperative.</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto text-center">
                     <h2 className="text-2xl font-bold font-headline">Ready to upgrade to Dynamics 365 F&O? - Get expert consultation</h2>
                     <Button asChild size="lg" className="mt-6">
                        <Link href="/contact">Schedule a call</Link>
                     </Button>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-center text-3xl font-bold font-headline mb-12">FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {FAQS.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-headline text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Card className="bg-accent text-accent-foreground p-8 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 items-center gap-8">
                             <div className="md:col-span-1 flex justify-center">
                                 <Newspaper className="w-24 h-24" />
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-sm uppercase tracking-widest">BLOG</p>
                                <h3 className="text-xl font-bold font-headline mt-2">Reasons to upgrade to Microsoft D365 F&O from D365 AX 2012</h3>
                                <p className="text-gray-300 mt-2 text-sm">Microsoft released Dynamics 365 for operations in 2016, its cloud-based ERP (Enterprise Resource Planning) solution, against its older AX 2012 version. In 2017, Microsoft renamed it as Dynamics 365 for Finance and Operations...</p>
                                <Button asChild variant="link" className="text-white px-0 mt-4">
                                    <Link href="#">READ MORE <ArrowRight /></Link>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
