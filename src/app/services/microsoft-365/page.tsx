
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
import { Check, MailCheck, HardHat, Rocket, Zap, HeartHandshake, Bot, BarChart } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PLANS = [
  {
    name: 'Microsoft 365 Business Basic',
    price: '$6.00',
    features: [
      'Identity management, access control, and user management for up to 300 employees',
      'Customized business email addresses (name@company.com)',
      'Communication tools including chat, calls, and video conferencing via Microsoft Teams',
      '1 TB of cloud storage per employee',
      'Access to over 10 additional business applications such as Bookings, Planner, and Forms',
      'Built-in protection against spam and malware',
      'Round-the-clock phone and online support',
      'Optional add-on: Microsoft 365 Copilot',
    ],
    services: [
      { name: 'Teams', icon: '/microsoft-teams-icon.svg' },
      { name: 'OneDrive', icon: '/onedrive-color-icon.svg' },
      { name: 'SharePoint', icon: '/sharepoint-icon.svg' },
      { name: 'Exchange', icon: '/microsoft-exchange-icon.svg' },
    ],
    apps: [
      { name: 'Word', icon: '/microsoft-word-icon.svg' },
      { name: 'Excel', icon: '/microsoft-excel-icon.svg' },
      { name: 'PowerPoint', icon: '/microsoft-powerpoint-icon.svg' },
      { name: 'Outlook', icon: '/microsoft-outlook-icon.svg' },
    ],
    appsLabel: 'Web and mobile apps only:',
  },
  {
    name: 'Microsoft 365 Business Standard',
    price: '$12.50',
    features: [
      'Desktop versions of Word, Excel, PowerPoint, and Outlook',
      'Webinars with registration and reporting capabilities',
      'Shared workspaces for collaborative projects using Microsoft Loop',
      'Video editing and design tools via Microsoft Clipchamp',
      'Optional add-on: Microsoft 365 Copilot',
    ],
    services: [
        { name: 'Word', icon: '/microsoft-word-icon.svg' },
        { name: 'Excel', icon: '/microsoft-excel-icon.svg' },
        { name: 'PowerPoint', icon: '/microsoft-powerpoint-icon.svg' },
        { name: 'Outlook', icon: '/microsoft-outlook-icon.svg' },
        { name: 'Teams', icon: '/microsoft-teams-icon.svg' },
        { name: 'OneDrive', icon: '/onedrive-color-icon.svg' },
        { name: 'SharePoint', icon: '/sharepoint-icon.svg' },
        { name: 'Exchange', icon: '/microsoft-exchange-icon.svg' },
        { name: 'Clipchamp', icon: '/Microsoft_Clipchamp.svg' },
        { name: 'Loop', icon: '/Microsoft_Loop_logo.svg' },
    ],
    apps: [],
    appsLabel: 'Desktop, web, and mobile apps and secure cloud services:',
  },
  {
    name: 'Microsoft 365 Business Premium',
    price: '$22.00',
    features: [
        'Advanced identity and access management',
        'Advanced cyber threat protection against viruses and phishing',
        'Enterprise-level security for devices and endpoints',
        'Tools for discovering, classifying, and safeguarding sensitive information',
        'All features included in Business Standard',
        '1 TB of cloud storage per user',
        '24/7 phone and online support',
        'Optional add-on: Microsoft 365 Copilot',
    ],
    services: [
        { name: 'Word', icon: '/microsoft-word-icon.svg' },
        { name: 'Excel', icon: '/microsoft-excel-icon.svg' },
        { name: 'PowerPoint', icon: '/microsoft-powerpoint-icon.svg' },
        { name: 'Outlook', icon: '/microsoft-outlook-icon.svg' },
        { name: 'Teams', icon: '/microsoft-teams-icon.svg' },
        { name: 'OneDrive', icon: '/onedrive-color-icon.svg' },
        { name: 'SharePoint', icon: '/sharepoint-icon.svg' },
        { name: 'Exchange', icon: '/microsoft-exchange-icon.svg' },
        { name: 'Clipchamp', icon: '/Microsoft_Clipchamp.svg' },
        { name: 'Loop', icon: '/Microsoft_Loop_logo.svg' },
        { name: 'Entra ID', icon: '/Microsoft_Entra_ID_color_icon.svg' },
        { name: 'Intune', icon: '/icons8-microsoft-intune-240.svg' },
        { name: 'Defender', icon: '/Windows_Defender_logo.svg' },
        { name: 'Purview', icon: '/Microsoft_Purview_Logo.svg' },
    ],
    apps: [],
    appsLabel: 'Desktop, web, and mobile apps and secure cloud services:',
  },
  {
    name: 'Microsoft 365 Apps for Business',
    price: '$8.25',
    features: [
        'Comprehensive suite including Word, Excel, PowerPoint, and Outlook desktop versions',
        '1 TB of cloud storage per user for secure file storage and sharing',
        '24/7 phone and online support to assist with any inquiries or issues',
        'Optional add-on: Microsoft 365 Copilot, offering advanced productivity tools',
    ],
    services: [
        { name: 'Word', icon: '/microsoft-word-icon.svg' },
        { name: 'Excel', icon: '/microsoft-excel-icon.svg' },
        { name: 'PowerPoint', icon: '/microsoft-powerpoint-icon.svg' },
        { name: 'Outlook', icon: '/microsoft-outlook-icon.svg' },
        { name: 'OneDrive', icon: '/onedrive-color-icon.svg' },
    ],
    apps: [],
    appsLabel: 'Desktop, web, and mobile apps and secure cloud services:',
  },
];

const AI_JOURNEY_STEPS = [
    {
        step: 1,
        title: "Map out Your AI Journey",
        description: "Unleash and harness the potential of AI with our expert advisory services to transform your processes using Microsoft AI. Begin by crafting a strategic AI journey plan focused on key Microsoft Copilot tasks that align with your business goals. Identify the personas who will benefit the most from AI and create a detailed implementation roadmap. Together, we'll design a clear path for seamless AI adoption across your organization.",
        colSpan: 'lg:col-span-12'
    },
    {
        step: 2,
        title: "Ready Your Tech Environment",
        description: "Prepare your technology landscape for a smooth Copilot deployment within Microsoft 365. We'll conduct a thorough readiness evaluation to identify and address any tech gaps. Build stakeholder confidence by establishing a solid operating and governance model from the start. Enhance security by configuring policies in your Microsoft 365 environment to protect data privacy.",
        colSpan: 'lg:col-span-7'
    },
    {
        step: 3,
        title: "Fine-Tune for Your Unique Needs",
        description: "Ensure Copilot for Microsoft 365 meets your organization's specific needs through essential customization. Identify effective use cases, key personas, and extensibility options. We'll customize and deploy Copilot experiences to seamlessly integrate and enhance your operations.",
        colSpan: 'lg:col-span-5'
    },
    {
        step: 4,
        title: "Empower Your Team for AI Mastery",
        description: "Empower your team to fully leverage AI by investing in change management. Our dedicated team provides continuous support, training, and updates to ensure smooth adoption. We help transition processes and foster new behaviors, maximizing the impact of your AI investments.",
        colSpan: 'lg:col-span-5'
    },
    {
        step: 5,
        title: "Elevate Your Microsoft AI Experience",
        description: "Take Copilot for Microsoft 365 to new heights by integrating it with your existing systems. Harness custom plugins and Graph connectors to draw intelligence from external services, apps, and data. Take its functionality and personalization a step further to achieve extraordinary outcomes that propel your business forward.",
        colSpan: 'lg:col-span-7'
    }
];

const COPILOT_BENEFITS = [
    {
        icon: Rocket,
        title: "Achieve Peak Executive Productivity with Advanced AI Support",
        description: "Navigate busy schedules effortlessly with Copilot, your AI-powered executive assistant. Seamlessly manage tasks and optimize productivity, ensuring executives make the most of every moment between meetings."
    },
    {
        icon: HardHat,
        title: "Revolutionize Recruitment Dynamics",
        description: "Transform hiring into a strategic advantage with Copilot for Microsoft 365. Harness AI to streamline candidate selection, enhancing efficiency and precision while reducing recruitment costs."
    },
    {
        icon: Zap,
        title: "Resolve Operational Hick-ups Swiftly",
        description: "Keep operations running smoothly with Copilot for Microsoft 365. Identify and resolve issues promptly to minimize downtime, ensuring continuous productivity and operational excellence."
    },
    {
        icon: HeartHandshake,
        title: "Empower Sales Teams to Excel",
        description: "Liberate sales teams from administrative burdens with Copilot for Microsoft 365. Focus on cultivating relationships and closing deals, delivering personalized customer experiences that drive growth."
    },
    {
        icon: Bot,
        title: "Accelerate Marketing Innovation",
        description: "Fuel creativity and speed to market with Copilot for Microsoft 365. From ideation to execution, streamline collaboration and content creation for impactful marketing campaigns that resonate with your audience."
    },
    {
        icon: BarChart,
        title: "Elevate Financial Strategy with Enhanced Decision-making",
        description: "Drive strategic insights with Copilot for Microsoft 365. Optimize financial analysis, forecasting, and communication to stakeholders, enabling informed decisions and maximizing business performance."
    }
];

const RESEARCH_FINDINGS = [
    { value: '70%', description: 'Said they were more productive', icon: '/productivity.svg' },
    { value: '4x', description: 'Nearly 4x faster catching up on a missed meeting', icon: '/speed.svg' },
    { value: '29%', description: 'Faster overall in a series of tasks (searching, writing, and summarizing)', icon: '/fast-task.svg' },
    { value: '77%', description: 'Said they didn’t want to give it up', icon: '/utilization.svg' }
];

const FAQS = [
    {
        question: "What is Microsoft 365?",
        answer: "Microsoft 365 represents a dynamic productivity solution in the cloud, engineered to empower you with potent applications, intelligent cloud services, and robust security features to propel your ambitions forward."
    },
    {
        question: "How many devices can Microsoft 365 Apps be used on?",
        answer: "With a Microsoft 365 business plan, you can utilize Microsoft 365 apps on up to five PCs or Macs, five tablets, and five mobile devices. This includes versatile devices like the Microsoft Surface Pro, counted as either a PC or a tablet."
    },
    {
        question: "What are the differences between monthly and annual payment options?",
        answer: `Discover the flexibility in payment plans that match your needs:<br/><br/>
        <ul class="list-disc pl-5">
            <li class="mb-2"><strong>Monthly payment option:</strong> Pay on a month-to-month basis with the freedom to cancel anytime.</li>
            <li><strong>Annual commitment payment:</strong> Opt for a discounted rate with a one-year commitment. Easily switch from monthly to annual billing through the Microsoft 365 admin center after your initial purchase.</li>
        </ul>
        <br/>Annual payment options are available for Microsoft 365 Enterprise, Office 365 Enterprise plans (including standalone options like Exchange Online), and Microsoft 365 Apps for enterprise.`
    },
    {
        question: "Is Microsoft 365 usable offline?",
        answer: "Absolutely! Enjoy full offline access to Microsoft 365 apps (Word, Excel, PowerPoint, Outlook) installed on your PC or Mac. With OneDrive integration, access your files offline and sync changes automatically across devices once you're back online. Manage emails and schedule meetings in Outlook offline, with seamless synchronization upon reconnecting."
    },
    {
        question: "What happens to my data if I cancel my subscription?",
        answer: "Rest assured, your data remains securely yours. Before canceling your Microsoft 365 subscription, it's advised to download your data, including emails and documents from team sites, and store them elsewhere. Post-cancellation, your Microsoft 365 account data remains accessible to administrators with limited functionality for 90 days."
    },
    {
        question: "How can I find more answers to frequent queries?",
        answer: `For more FAQs, visit the <a href="https://www.microsoft.com/en-in/microsoft-365/business/microsoft-365-frequently-asked-questions" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">FAQ page of Microsoft 365 for business</a>.`
    },
    {
        question: "What benefits does Microsoft Defender for Business provide?",
        answer: "Microsoft Defender for Business offers a tailored security solution crafted for businesses with up to 300 employees, shielding against a wide range of cyber threats such as malware and ransomware. Available as part of Microsoft 365 Business Premium or as a standalone product, it ensures robust protection for your organization."
    },
    {
        question: "How many participants can join online meetings and video calls on Microsoft Teams?",
        answer: `Experience seamless collaboration with Microsoft Teams: <br/><br/>
        <ul class="list-disc pl-5">
            <li class="mb-2">For Microsoft 365 Business Basic, Business Standard, and Business Premium subscriptions that include Microsoft Teams licenses, meetings and video calls can host up to 300 participants.</li>
            <li>Subscriptions such as Microsoft 365 E3 and E5, A3 and A5, or Government G3 and G5 expand this capacity, allowing meetings to accommodate up to 1,000 participants.</li>
        </ul>`
    },
    {
        question: "Frequent questions about Copilot for Microsoft 365",
        answer: `Explore more FAQs about Copilot for Microsoft 365 <a href="https://www.microsoft.com/en-in/microsoft-365/business/copilot-for-microsoft-365#faqs" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">here</a>.`
    }
];

const initialState = {
  message: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Submitting...' : 'Let\'s Connect'}
    </Button>
  );
}

export default function Microsoft365Page() {
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
      <section id="form-section" className="relative bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                Microsoft 365 Subscription
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Discover the ideal Microsoft 365 subscription suited for your business needs with competitive pricing from DAX.
              </p>
              <div className="mt-8">
                <Button variant="primary-outline" size="lg" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  Compare plans and pricing
                </Button>
              </div>
            </div>
            <div>
              <Card className="p-8 shadow-2xl bg-card text-card-foreground">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-center mb-4 font-headline">Want to Buy Subscription? Contact Us!</h3>
                  <form action={formAction} ref={formRef} className="space-y-4">
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
                      <Label htmlFor="requirements">Requirements</Label>
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
          </div>
        </div>
      </section>

      <section id="plans" className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold font-headline">Buy Microsoft 365 Licenses at Discounted Price</h2>
          <p className="text-center text-muted-foreground mt-2 mb-8">(Minimum purchase of 5 licenses is required)</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLANS.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-center font-headline h-16">{plan.name}</h3>
                  <p className="text-5xl font-bold text-center text-primary mt-4">{plan.price}</p>
                  <p className="text-center text-sm text-muted-foreground">User/Month</p>
                  <p className="text-center text-xs text-muted-foreground mt-1 mb-4 h-10">(Annual subscription–auto renews)<sup>1</sup></p>
                  <Button onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })} className="w-full mb-6">Buy Now</Button>
                  <p className="text-sm mb-4">{plan.features[0]}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground flex-grow">
                    {plan.features.slice(1).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {(plan.services.length > 0) &&
                    <>
                    <hr className="my-6" />
                    <p className="text-center text-sm font-semibold">{plan.appsLabel}</p>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {plan.services.map(app => (
                        <div key={app.name} className="flex flex-col items-center gap-1">
                            <Image src={app.icon} alt={app.name} width={24} height={24} />
                            <span className="text-xs text-muted-foreground">{app.name}</span>
                        </div>
                        ))}
                    </div>
                    </>
                  }

                   {(plan.apps.length > 0) &&
                    <>
                    <hr className="my-6" />
                    <p className="text-center text-sm font-semibold">{plan.appsLabel}</p>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {plan.apps.map(app => (
                        <div key={app.name} className="flex flex-col items-center gap-1">
                            <Image src={app.icon} alt={app.name} width={24} height={24} />
                            <span className="text-xs text-muted-foreground">{app.name}</span>
                        </div>
                        ))}
                    </div>
                    </>
                  }

                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-xs text-muted-foreground mt-6">
            <p className="mb-1">*Annual commitment & GST extra as applicable</p>
            <p>Note:- Licenses exclusively available for sale within India’s territorial boundaries.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto text-center">
            <h4 className="text-xl font-bold font-headline">Discover the right plan for your business and connect with our Microsoft Experts to transform the way you work.</h4>
            <Button onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })} className="mt-6">Let's Connect</Button>
        </div>
      </section>
      
       <section className="py-16 md:py-24">
            <div className="container mx-auto">
                <h3 className="text-center text-3xl font-bold font-headline">Navigate Your AI Path with Unmatched Expertise</h3>
                <p className="text-center text-muted-foreground mt-2 mb-12">Elevate Your Business with Microsoft 365 Copilot and Expert Guidance</p>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {AI_JOURNEY_STEPS.map(step => (
                        <div key={step.step} className={step.colSpan}>
                            <Card className="p-8 h-full">
                                <CardContent className="p-0">
                                <h4 className="text-xl font-bold font-headline mb-2">Step {step.step}: {step.title}</h4>
                                <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto">
                <h3 className="text-center text-3xl font-bold font-headline mb-12">Unlock the Potential of Copilot Across Your Organization</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COPILOT_BENEFITS.map(benefit => (
                        <Card key={benefit.title} className="p-6">
                            <CardContent className="p-0">
                                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                                <h4 className="text-lg font-bold font-headline">{benefit.title}</h4>
                                <p className="text-muted-foreground mt-2 text-sm">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

         <section className="py-16 md:py-24">
            <div className="container mx-auto">
                <h3 className="text-center text-3xl font-bold font-headline mb-12">Research findings from early Copilot users <sup>3</sup></h3>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                     {RESEARCH_FINDINGS.map(finding => (
                        <Card key={finding.description} className="p-6 text-center">
                            <CardContent className="p-0 flex flex-col items-center gap-4">
                                <Image src={finding.icon} alt="" width={60} height={60} />
                                <div>
                                    <p className="text-4xl font-bold font-headline text-primary">{finding.value}</p>
                                    <p className="text-muted-foreground mt-1">{finding.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                     ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                 <h3 className="text-center text-3xl font-bold font-headline mb-12">Microsoft Business and Enterprise Plans - FAQs</h3>
                 <Accordion type="single" collapsible>
                    {FAQS.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                 </Accordion>
                <div className="text-xs text-muted-foreground space-y-2 mt-8">
                    <p>[1] <strong>Cancellation Policy:</strong> Once you commence your paid subscription, cancellation policies vary based on whether you are a new customer and your specific product and domain selections on Microsoft. For detailed information, please refer to our terms. You can initiate cancellation of your Microsoft 365 subscription at any time through the Microsoft 365 admin center. Upon cancellation, all associated data will be removed. Learn more about data retention, deletion, and destruction practices within Microsoft 365.</p>
                    <p>[2] <strong>Availability of Copilot for Microsoft 365:</strong> Copilot for Microsoft 365 may not be accessible in all markets and languages. Customers must possess a qualifying enterprise or business plan to make a purchase.</p>
                    <p>[3] <strong><a href="https://www.microsoft.com/en-us/worklab/work-trend-index/copilots-earliest-users-teach-us-about-generative-ai-at-work" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Work Trend Index Special Report | Microsoft</a></strong> <em>Limited period Offer</em></p>
                </div>
            </div>
        </section>

         <section className="py-12 bg-accent text-accent-foreground">
            <div className="container mx-auto text-center">
                <h4 className="text-xl font-bold font-headline">Ready to buy Microsoft 365 subscription?</h4>
                <Button variant="primary-outline" onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })} className="mt-6">Let's Connect</Button>
            </div>
        </section>

    </div>
  );
}
