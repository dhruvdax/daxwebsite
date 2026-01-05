
'use client';
import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getM365LicensingInquiry } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import Link from 'next/link';
import { MailCheck, Target, BarChart, ShieldCheck, User, Bot, Sparkles, Wand2, Eye, HandHelping, Handshake, BrainCircuit, Check } from 'lucide-react';
import { CountUp } from '@/components/count-up';

const initialState = {
  message: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Submitting...' : 'Submit Details'}
    </Button>
  );
}

const AI_FEATURES = [
    {
        icon: Target,
        title: "Enhance Focus",
        description: "Smoothly integrate and adapt with intelligent features across all applications."
    },
    {
        icon: Eye,
        title: "Real-Time Insights",
        description: "Effortlessly track discussions and action items to stay informed and agile."
    },
    {
        icon: HandHelping,
        title: "Customer Engagement",
        description: "Get personalized coaching tips to refine and improve your customer interactions."
    },
    {
        icon: Handshake,
        title: "Close More Deals than before",
        description: "Collaborate with Copilot to craft, refine, and synthesize content for impactful results."
    },
    {
        icon: Sparkles,
        title: "Encourage innovation",
        description: "Transform text into compelling multimedia presentations effortlessly."
    },
    {
        icon: BarChart,
        title: "Data-driven Decisions",
        description: "Analyze data swiftly to visualize insights and track project progress."
    }
];

const SECURITY_FEATURES = [
    {
        icon: ShieldCheck,
        title: "Stay in charge",
        description: "Copilot operates within your Microsoft 365 security framework, ensuring compliance and privacy."
    },
    {
        icon: Bot,
        title: "Data Integrity",
        description: "Your information remains secure and confidential, never utilized for training purposes."
    },
    {
        icon: BrainCircuit,
        title: "Stay Astute",
        description: "Receive accurate and relevant answers tailored to your business context and content."
    }
];

const APP_INTEGRATIONS = [
    {
        icon: '/Microsoft_365_Copilot_Icon.svg',
        name: 'Microsoft Copilot',
        description: 'Turbo Speed Task Execution'
    },
    {
        icon: '/microsoft-teams-icon.svg',
        name: 'Microsoft Teams',
        description: 'Keep Track of Conversations in real time and summarize effortlessly.'
    },
    {
        icon: '/microsoft-word-icon.svg',
        name: 'Word',
        description: 'Create, Refine, Summarize: Your Document Trifecta.'
    },
    {
        icon: '/microsoft-outlook-icon.svg',
        name: 'Outlook',
        description: 'Efficient Inbox Management, Prompt Response Generation.'
    },
    {
        icon: '/microsoft-powerpoint-icon.svg',
        name: 'PowerPoint',
        description: 'Bring Ideas to Life with Captivating Presentations.'
    },
    {
        icon: '/microsoft-excel-icon.svg',
        name: 'Excel',
        description: 'Gain Lucrative Insights through Advanced Data Analysis.'
    }
];

const IMPACT_STATS = [
    { value: 77, suffix: '%', description: 'of users consider Copilot vital after just one use.' },
    { value: 70, suffix: '%', description: 'have seen marked improvements in their productivity.' },
    { value: 68, suffix: '%', description: 'report a higher quality of work.' },
];

const FAQS = [
    {
        question: "Who is eligible to use Copilot for Microsoft 365?",
        answer: "Business customers holding licenses for Microsoft 365 Business Basic, Business Standard, or Business Premium are eligible."
    },
    {
        question: "Which applications does Copilot for Microsoft 365 support?",
        answer: "Copilot for Microsoft 365 seamlessly integrates with Microsoft Copilot, Word, PowerPoint, Excel, Outlook, Teams, Loop, and other Microsoft 365 applications."
    },
    {
        question: "What languages are supported by Copilot for Microsoft 365?",
        answer: `For a comprehensive list of supported languages, please refer to our detailed guide <a href="https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-supported-languages" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">here</a>.`
    },
    {
        question: "Is there a trial version of Copilot for Microsoft 365?",
        answer: "Currently, there is no trial version available for Copilot."
    },
    {
        question: "How do I purchase Copilot for Microsoft 365?",
        answer: "Existing customers with Microsoft 365 Business Standard or Business Premium subscriptions can add Copilot via the Microsoft admin center. For assistance, reach out to our Cloud Solution specialists or account representatives. New customers must first subscribe to Microsoft 365 Business Standard or Business Premium. For more details, explore our plans and pricing options."
    }
];

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

export default function MicrosoftCopilotClientPage() {
    const [state, formAction] = useActionState(
        getM365LicensingInquiry,
        initialState
    );
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state?.message && Object.keys(state.errors ?? {}).length === 0) {
            formRef.current?.reset();
        }
    }, [state]);

  return (
    <div className="bg-background">
      <section id="form-section-copy" className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                Microsoft 365 Copilot License
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
                Harness the power of Microsoft 365 Copilot to revolutionize your business with integrated AI, optimizing workflows and focusing on strategic priorities.
              </p>
              <div className="mt-8">
                <Button variant="primary-outline" size="lg" onClick={() => scrollToSection('pricing')}>
                  View Pricing
                </Button>
              </div>
            </div>
            <div>
              <Card className="p-8 shadow-2xl bg-card text-card-foreground">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-center mb-4 font-headline">Want to Buy Subscription? Contact Us!</h3>
                  <form action={formAction} ref={formRef} className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                        <Label htmlFor="fname-2">First Name</Label>
                        <Input id="fname-2" name="fname" required />
                        {state?.errors?.fname && <p className="text-destructive text-sm mt-1">{state.errors.fname}</p>}
                        </div>
                        <div>
                        <Label htmlFor="lname-2">Last Name</Label>
                        <Input id="lname-2" name="lname" required />
                        {state?.errors?.lname && <p className="text-destructive text-sm mt-1">{state.errors.lname}</p>}
                        </div>
                    </div>
                    <div>
                      <Label htmlFor="email-2">Email</Label>
                      <Input id="email-2" name="email" type="email" required />
                       {state?.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email}</p>}
                    </div>
                     <div>
                        <Label htmlFor="phone-2">Phone</Label>
                        <Input id="phone-2" name="phone" required />
                        {state?.errors?.phone && <p className="text-destructive text-sm mt-1">{state.errors.phone}</p>}
                    </div>
                    <div>
                        <Label htmlFor="company-2">Company</Label>
                        <Input id="company-2" name="company" required />
                        {state?.errors?.company && <p className="text-destructive text-sm mt-1">{state.errors.company}</p>}
                    </div>
                    <div>
                      <Label htmlFor="requirements-2">Describe your requirements</Label>
                      <Textarea id="requirements-2" name="requirements" required />
                      {state?.errors?.requirements && <p className="text-destructive text-sm mt-1">{state.errors.requirements}</p>}
                    </div>
                    <SubmitButton />
                     {state?.message && (
                        <Alert variant={Object.keys(state.errors ?? {}).length > 0 ? 'destructive' : 'default'} className="mt-4">
                            <MailCheck className="h-4 w-4" />
                            <AlertTitle>{Object.keys(state.errors ?? {}).length > 0 ? 'Error' : 'Success'}</AlertTitle>
                            <AlertDescription>
                                {state.message}
                            </AlertDescription>
                        </Alert>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="form-section" className="py-16 md:py-24 bg-secondary/50">
        <div className="flex justify-center container">
          <Card className="p-8 shadow-2xl bg-card text-card-foreground w-full max-w-lg container">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-center mb-4 font-headline">Want to Buy Subscription? Contact Us!</h3>
              <form action={formAction} ref={formRef} className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                    <Label htmlFor="fname">First Name</Label>
                    <Input id="fname" name="fname" required />
                    {state?.errors?.fname && <p className="text-destructive text-sm mt-1">{state.errors.fname}</p>}
                    </div>
                    <div>
                    <Label htmlFor="lname">Last Name</Label>
                    <Input id="lname" name="lname" required />
                    {state?.errors?.lname && <p className="text-destructive text-sm mt-1">{state.errors.lname}</p>}
                    </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                   {state?.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email}</p>}
                </div>
                 <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" required />
                    {state?.errors?.phone && <p className="text-destructive text-sm mt-1">{state.errors.phone}</p>}
                </div>
                <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" required />
                    {state?.errors?.company && <p className="text-destructive text-sm mt-1">{state.errors.company}</p>}
                </div>
                <div>
                  <Label htmlFor="requirements">Describe your requirements</Label>
                  <Textarea id="requirements" name="requirements" required />
                  {state?.errors?.requirements && <p className="text-destructive text-sm mt-1">{state.errors.requirements}</p>}
                </div>
                <SubmitButton />
                 {state?.message && (
                    <Alert variant={Object.keys(state.errors ?? {}).length > 0 ? 'destructive' : 'default'} className="mt-4">
                        <MailCheck className="h-4 w-4" />
                        <AlertTitle>{Object.keys(state.errors ?? {}).length > 0 ? 'Error' : 'Success'}</AlertTitle>
                        <AlertDescription>
                            {state.message}
                        </AlertDescription>
                    </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold font-headline mb-12">AI-Powered Support at Your Fingertips</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {AI_FEATURES.map((feature) => (
              <Card key={feature.title} className="p-6 text-center bg-card">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
             {SECURITY_FEATURES.map((feature) => (
              <Card key={feature.title} className="p-6 text-center bg-card">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline">Upgrade Your Plan with Copilot or Get Started with Microsoft 365</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">Connect with a Microsoft sales specialist to seamlessly integrate Copilot into your current subscription or to purchase Microsoft 365 Business Standard or Business Premium.</p>
            <Button size="lg" className="mt-8" onClick={() => scrollToSection('form-section')}>Contact Sales</Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
           <h2 className="text-center text-3xl font-bold font-headline mb-2">Microsoft Copilot: Efficiency Redefined</h2>
           <p className="text-center text-muted-foreground mt-2 mb-12 max-w-3xl mx-auto">Discover how Copilot transforms collaboration by effortlessly integrating into your team's daily-use apps, strengthening teamwork, and driving productivity to new heights.</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {APP_INTEGRATIONS.map(app => (
                   <Card key={app.name} className="p-6">
                       <CardContent className="p-0 flex items-center gap-4">
                           <Image src={app.icon} alt={app.name} width={48} height={48} />
                           <div>
                               <h3 className="text-lg font-bold font-headline">{app.name}</h3>
                               <p className="text-sm text-muted-foreground">{app.description}</p>
                           </div>
                       </CardContent>
                   </Card>
               ))}
           </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Copilot is Making Waves in Workflow Transformation</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">Discover the future of productivity with Copilot in Microsoft 365. Say farewell to inefficiencies and welcome a boost in creativity and output.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {IMPACT_STATS.map(stat => (
                    <Card key={stat.description} className="p-8">
                        <CardContent className="p-0">
                            <p className="text-6xl font-bold font-headline text-primary"><CountUp end={stat.value} />{stat.suffix}</p>
                            <p className="mt-2 text-muted-foreground">{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold font-headline mb-12">Copilot for Microsoft 365 pricing</h2>
            <Card className="max-w-2xl mx-auto p-8 grid md:grid-cols-2 gap-8 items-center shadow-lg">
                <div>
                    <h3 className="text-xl font-bold font-headline">Microsoft Copilot</h3>
                    <p className="text-4xl font-bold text-primary mt-2">$30.00</p>
                    <p className="text-sm text-muted-foreground">user/month with an annual subscription</p>
                    <p className="text-sm text-muted-foreground mt-2">Pay yearly, $360.00 user/year</p>
                </div>
                <div>
                    <p className="font-semibold mb-2">Achieve more than ever using AI.</p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                        <li>Integrated with Teams, Word, Outlook, PowerPoint, Excel, and other Microsoft 365 apps</li>
                        <li>AI-powered chat with Microsoft Copilot</li>
                        <li>Enterprise-grade security, privacy, and compliance</li>
                        <li>A separate license for a <Link href="/services/microsoft-365" className="text-primary hover:underline">qualifying Microsoft 365 plan</Link> is required.</li>
                    </ul>
                </div>
            </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold font-headline mb-12">FAQs about Copilot for Microsoft 365</h2>
            <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, index) => (
                     <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left font-headline text-lg">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                           <div dangerouslySetInnerHTML={{ __html: faq.answer }} className="prose prose-sm max-w-none text-muted-foreground" />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline">Upgrade Your Plan with Copilot or Begin Your Journey with Microsoft 365</h2>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">Contact a Microsoft sales expert to integrate Copilot seamlessly into your existing subscription or to acquire Microsoft 365 Business Standard or Business Premium.</p>
            <Button size="lg" variant="primary-outline" className="mt-8" onClick={() => scrollToSection('form-section')}>Contact Sales</Button>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl text-sm text-muted-foreground">
            <h3 className="text-lg font-bold font-headline mb-4">Our Terms & Conditions</h3>
            <ol className="list-decimal list-inside space-y-2">
                <li>
                    <strong>Subscription:</strong> Annual payment per user.
                </li>
                <li>
                    <strong>Availability:</strong> Copilot for Microsoft 365 availability may differ by market and language. Customers must have an eligible enterprise or business plan to purchase.
                </li>
            </ol>
        </div>
      </section>
    </div>
  );
}
