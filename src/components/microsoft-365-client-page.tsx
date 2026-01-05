
'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Bot, BarChart, BrainCircuit, Check, Eye, HandHelping, Handshake, HardHat, HeartHandshake, Rocket, Sparkles, Target, Wand2, Zap } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

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
        answer: `<br/><br/>
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
        answer: `<br/><br/>
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

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

export default function Microsoft365ClientPage() {
    const [isFormLoading, setIsFormLoading] = useState(true);

    useEffect(() => {
        const formId = '2dda0781-9fc6-f011-bbd3-6045bd020834';
        const scriptId = 'dynamics-form-loader';
        
        // Function to setup the listener for the form
        const setupFormListener = () => {
            const msCrm = (window as any).MsCrmMkt;
            if (msCrm && typeof msCrm.MsCrmFormLoader === 'object') {
                const formLoader = msCrm.MsCrmFormLoader;
                
                // If form is already loaded, no need to set up listener again.
                if (formLoader.isFormLoaded(formId)) {
                    setIsFormLoading(false);
                    return;
                }

                // Attach the listener.
                formLoader.on('afterFormLoad', () => {
                    setIsFormLoading(false);
                });
            } else {
                // If the MsCrmMkt object isn't ready, poll until it is.
                setTimeout(setupFormListener, 100);
            }
        };
    
        // Load the script if it doesn't exist
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js';
            script.async = true;
            script.defer = true;
            script.onload = setupFormListener;
            document.body.appendChild(script);
        } else {
            // If script tag already exists, just set up the listener.
            setupFormListener();
        }

        // Safety timeout to prevent skeleton from showing forever
        const safetyTimeout = setTimeout(() => {
          setIsFormLoading(false);
        }, 8000); // 8 seconds, should be plenty of time

        return () => {
            clearTimeout(safetyTimeout);
        };
      }, []);

  return (
    <div className="bg-background">
      <section className="relative bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
              Microsoft 365 Subscription
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Discover the ideal Microsoft 365 subscription suited for your business needs with competitive pricing from DAX.
            </p>
            <div className="mt-8">
              <Button variant="primary-outline" size="lg" onClick={() => scrollToSection('plans')}>
                Compare plans and pricing
              </Button>
            </div>
        </div>
      </section>

      <section id="form-section" className="py-16 md:py-24 bg-secondary/30">
        <div className="flex justify-center">
          <div className="container">
            <Card className="p-8 shadow-2xl bg-card text-card-foreground">
                <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-center mb-4 font-headline">Want to Buy Subscription? Contact Us!</h3>
                    {isFormLoading && (
                      <div className="space-y-4">
                          <Skeleton className="h-10 w-full" />
                          <Skeleton className="h-10 w-full" />
                          <Skeleton className="h-20 w-full" />
                          <Skeleton className="h-10 w-24" />
                      </div>
                    )}
                    <div style={{ display: isFormLoading ? 'none' : 'block' }}>
                      <div
                          data-form-id='2dda0781-9fc6-f011-bbd3-6045bd020834'
                          data-form-api-url='https://public-usa.mkt.dynamics.com/api/v1.0/orgs/0f5b728c-83ca-ed11-aece-000d3a323719/landingpageforms'
                          data-cached-form-url='https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/2dda0781-9fc6-f011-bbd3-6045bd020834'
                      ></div>
                    </div>
                </CardContent>
            </Card>
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
                  <Button onClick={() => scrollToSection('form-section')} className="w-full mb-6">Buy Now</Button>
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
            <Button onClick={() => scrollToSection('form-section')} className="mt-6">Let's Connect</Button>
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
                                <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/class=/g, "className=") }} />
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
                <Button variant="primary-outline" onClick={() => scrollToSection('form-section')} className="mt-6">Let's Connect</Button>
            </div>
        </section>

    </div>
  );
}
