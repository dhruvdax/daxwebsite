
'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Download } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState, useEffect, useRef } from "react";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Government ERP Solutions | Microsoft Dynamics 365 | DAX",
  description: "DAX provides secure, compliant, and cost-effective ERP solutions for government agencies using Microsoft Dynamics 365, Power Apps, and Azure.",
  canonicalPath: "/government",
});

const SECTIONS = {
    'overview': 'Overview',
    'competencies': 'Core Competencies',
    'differentiators': 'Differentiators',
    'case-studies': 'Case Studies',
    'codes': 'NAICS & PSC Codes',
};

const CORE_COMPETENCIES = {
    implementation: {
        title: 'Implementation & Modernization',
        items: [
            'Dynamics 365 F&O, Business Central, CE',
            'Power Apps & Azure (secure cloud)',
            'Finance, Procurement, Project Accounting',
            'Manufacturing, Supply Chain, Logistics',
            'Advanced Warehouse Management',
        ]
    },
    integration: {
        title: 'Integration, Automation & Support',
        items: [
            'Integrations with Salesforce, Autodesk, EDI, Banking',
            'Automation & AI (OCR AP, predictive KPIs)',
            'Microsoft Licensing optimization',
            'Power BI analytics & role-based dashboards',
            'Managed Services & ERP Rescue',
        ]
    }
}

const DIFFERENTIATORS = [
    {
        title: 'Microsoft Depth',
        description: 'Microsoft Gold/Solutions Partner with multi-cloud expertise across Dynamics 365 F&O, Business Central, CE, Power Apps, Azure, and Licensing, plus Salesforce & Autodesk integrations.'
    },
    {
        title: 'Rescue & Compliance',
        description: 'Specialists in fixing broken implementations, stabilizing operations, and embedding federal-grade data governance, audit-readiness, and security controls.'
    },
    {
        title: 'Cost & Speed',
        description: 'Onshore-offshore delivery and agile methods deliver up to 30% cost savings while accelerating value with automation and AI.'
    }
]

const CASE_STUDIES = [
    {
        title: 'State Health Agency – Case Management ERP Integration',
        description: 'Deployed D365 CE integrated with F&O for grants, case tracking, and program budgets; automated ERP workflows improved compliance and audit readiness.',
        points: [
            'Grants & case workflows tied to Finance',
            'Audit-ready reporting and controls'
        ]
    },
    {
        title: 'Not-for-Profit – Power Apps Portal + D365 Finance',
        description: 'Portal onboarding for agencies and beneficiaries integrated with D365 finance processes; reduced onboarding time and increased transparency.',
        points: [
            'External portal & CRM with ERP backbone',
            'Centralized data for funding & disbursements'
        ]
    },
    {
        title: 'Hydroponics Leader – AX 2012 R3 → D365 F&O Upgrade',
        description: 'Resolved WMS/costing issues, corrected parameters, and stabilized operations in preparation for D365 F&O.',
        points: [
            'Accurate inventory valuation & closes',
            'Operational stability and upgrade readiness'
        ]
    },
    {
        title: 'Real Estate – Project Management & Accounting Automation',
        description: 'Enhanced D365 F&O PMA, integrated payroll & timesheets, and deployed Power BI dashboards.',
        points: [
            'Reduced manual work & faster payroll',
            'Significant hours saved; better cost control'
        ]
    },
    {
        title: 'Public Safety Systems Integrator – F&O + Field Service',
        description: 'Integrated CE Field Service with D365 F&O for real-time work orders, inventory, and fiscal reporting.',
        points: [
            'Mobile visibility & SLA adherence',
            'Consolidated operational & finance data'
        ]
    },
    {
        title: 'Retail – OCR AP Invoice Automation in D365 F&O',
        description: 'Automated PO & non-PO invoice capture and approvals; reduced backlog and errors with real-time AP analytics.',
        points: [
            'Faster processing & lower cost-to-serve',
            'Higher departmental KPIs'
        ]
    },
    {
        title: 'Cannabis Manufacturing – Compliance-Ready F&O',
        description: 'Implemented D365 F&O integrated with Leaf Logix for STS tagging and regulatory reporting.',
        points: [
            'Automated production & inventory tracking',
            'Seamless STS compliance & reporting'
        ]
    }
];

const NAICS_CODES = [
    '541511 – Custom Computer Programming Services (Primary)',
    '541512 – Computer Systems Design Services',
    '541513 – Computer Facilities Management Services',
    '541519 – Other Computer Related Services',
    '541611 – Administrative Management and General Management Consulting Services',
    '541618 – Other Management Consulting Services',
    '541690 – Other Scientific and Technical Consulting Services',
    '541715 – R&D in Physical, Engineering, and Life Sciences (except Nanotech & Biotech)',
    '541430 – Graphic Design Services',
    '541370 – Surveying and Mapping (except Geophysical) Services',
    '423430 – Computer & Peripheral Equipment and Software Wholesalers',
    '518210 – Data Processing, Hosting & Related Services',
    '519290 – Web Search Portals and All Other Information Services',
    '561320 – Temporary Help Services (IT Staffing)',
    '611420 – Computer Training',
];

const PSC_CODES = [
    '7A20 – IT & Telecom – Application Development Software (Perpetual License)',
    '7A21 – IT & Telecom – Business Application Software (Perpetual License)',
    '7B20 – IT & Telecom – High Performance Compute (HW & Perpetual License SW)',
    '7B22 – IT & Telecom – Compute: Servers (HW & Perpetual License SW)',
    '7C20 – IT & Telecom – Data Center Products (HW & Perpetual License SW)',
    '7C21 – IT & Telecom – Other Data Center Facilities Products (HW & Perpetual License SW)',
    '7D20 – IT & Telecom – Service Delivery Management (HW & Perpetual License SW)',
    '7E21 – IT & Telecom – Mobile Device Products (HW & Perpetual License SW)',
    '7F20 – IT & Telecom – IT Management Tools/Products (HW & Perpetual License SW)',
    '7H20 – IT & Telecom – Platform Products: Database, Mainframe, Middleware (HW & Perpetual License SW)',
    '7J20 – IT & Telecom – Security and Compliance Products (HW & Perpetual License SW)',
    'D300 – Information Technology and Telecommunications',
    'D302 – Systems Development',
    'D307 – IT Strategy/Architecture',
    'D308 – Programming',
    'D310 – Cybersecurity',
    'DA01 – IT & Telecom – Business Application/Application Development Support Services (Labor)',
    'DA10 – IT & Telecom – Business Application/Application Development Software as a Service',
    'DF01 – IT & Telecom – IT Management Support Services (Labor)',
    'DF10 – IT & Telecom – IT Management as a Service',
    'DH01 – IT & Telecom – Platform Support Services: Database, Mainframe, Middleware (Labor)',
    'DH10 – IT & Telecom – Platform as a Service: Database, Mainframe, Middleware',
    'H370 – Inspection – ADP Equipment (incl. Firmware), Software, Supplies & Support Equipment',
    'R408 – Program Management & IT Staffing',
    'U012 – Education/Training – IT/Telecommunications Training',
];

export default function GovernmentPage() {
    const [activeTab, setActiveTab] = useState('overview');
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const overviewImage = PlaceHolderImages.find(img => img.id === 'government-overview');

     useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-120px 0px -50% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        }, observerOptions);

        Object.keys(SECTIONS).forEach(id => {
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

    const handleTabClick = (key: string) => {
        setActiveTab(key);
        const element = document.getElementById(key);
        if (element) {
            const yOffset = -120; // to account for sticky header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }

  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
                Government ERP Solutions with Microsoft Dynamics 365 F&O
            </h1>
            <p className="mt-6 max-w-4xl mx-auto text-sm text-gray-300">
                Microsoft Dynamics F&O · Business Central · CE · Power Apps · Azure · Microsoft Licensing · Salesforce · Autodesk · Implementation · Managed Services · Fix Broken Implementations · Automation · AI · Finance · Supply Chain · Logistics · Retail · Manufacturing · Advanced Warehouse · Bank Integration
            </p>
        </div>
      </section>

      <div className="sticky top-[108px] z-40 bg-card shadow-md">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-center border-b">
                {Object.entries(SECTIONS).map(([key, value]) => (
                     <button 
                        key={key}
                        onClick={() => handleTabClick(key)}
                        className={`py-4 px-3 sm:px-4 text-center font-medium text-xs sm:text-sm border-b-4 transition-colors ${
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

      <main className="bg-secondary/20">
        <section id="overview" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <Card className="border-0 shadow-none">
                    <CardContent className="p-8 md:p-12">
                       <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">Overview</h2>
                                <p className="text-muted-foreground">
                                    DAX Software Solutions, Inc. is a Microsoft Solutions Partner and SAM-registered small business delivering ERP implementation, optimization, and managed services for federal, state, and local agencies. The company specializes in Microsoft Dynamics 365 Finance & Operations (D365 F&O) and related ERP capabilities to streamline finance, procurement, project accounting, asset management, supply chain, logistics, and compliance workflows. DAX designs ERP solutions with federal-grade security, data governance, audit-readiness, and automation & AI built in—whether clients are replacing a legacy system, fixing a broken implementation, or scaling operations across departments.
                                </p>
                            </div>
                            <div className="relative h-64 w-full">
                                {overviewImage && (
                                    <Image
                                        src={overviewImage.imageUrl}
                                        alt={overviewImage.description}
                                        fill
                                        className="rounded-lg object-contain shadow-lg"
                                        data-ai-hint={overviewImage.imageHint}
                                    />
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section id="competencies" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Core Competencies in ERP & D365 F&O</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-6 text-center">{CORE_COMPETENCIES.implementation.title}</h3>
                        <ul className="space-y-3">
                            {CORE_COMPETENCIES.implementation.items.map(item => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                     <Card className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-6 text-center">{CORE_COMPETENCIES.integration.title}</h3>
                        <ul className="space-y-3">
                            {CORE_COMPETENCIES.integration.items.map(item => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        <section id="differentiators" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Differentiators</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {DIFFERENTIATORS.map(value => (
                        <Card key={value.title} className="p-8 text-center shadow-md hover:shadow-xl transition-shadow flex flex-col">
                            <h3 className="text-2xl font-bold font-headline mb-4">{value.title}</h3>
                            <p className="text-muted-foreground flex-grow">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="case-studies" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Government & Public Sector ERP Case Studies</h2>
                    <div className="mt-6 flex justify-center">
                        <Button>
                            <Download className="mr-2 h-4 w-4" />
                            REQUEST FULL CAPABILITIES DECK
                        </Button>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {CASE_STUDIES.map(study => (
                        <Card key={study.title} className="p-6">
                            <h3 className="text-lg font-bold font-headline text-primary mb-2">{study.title}</h3>
                            <p className="text-muted-foreground text-sm mb-3">{study.description}</p>
                            <ul className="space-y-2">
                                {study.points.map(point => (
                                    <li key={point} className="flex items-start gap-2 text-sm">
                                        <Check className="h-4 w-4 mt-0.5 text-primary/80 flex-shrink-0" />
                                        <span className="text-muted-foreground">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="codes" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">NAICS & PSC Codes</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <Card className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-6 text-center">NAICS</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {NAICS_CODES.map(code => <li key={code}>{code}</li>)}
                        </ul>
                    </Card>
                    <Card className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-6 text-center">PSC / PSC (DSC)</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {PSC_CODES.map(code => <li key={code}>{code}</li>)}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

         <section id="company-info" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <Card className="max-w-4xl mx-auto">
                    <CardContent className="p-8 md:p-12">
                       <h2 className="text-3xl font-bold font-headline text-center mb-8">Company Information</h2>
                       <div className="space-y-3 text-muted-foreground text-center">
                            <p><span className="font-semibold text-foreground">Legal Name:</span> DAX Software Solutions, Inc.</p>
                            <p><span className="font-semibold text-foreground">Headquarters:</span> Woodland Hills, CA, USA</p>
                            <p><span className="font-semibold text-foreground">UEI:</span> DAX9DGUERR93</p>
                            <p><span className="font-semibold text-foreground">CAGE:</span> 9KHU7</p>
                            <p><span className="font-semibold text-foreground">Certifications:</span> Microsoft Solutions Partner (Gold), SAM.gov Active, Small Business (CA)</p>
                            <p><span className="font-semibold text-foreground">Accepts Government P-Cards:</span> Yes</p>
                            <div className="pt-4">
                                <h4 className="font-semibold text-foreground mb-2">Contact:</h4>
                                <p>Sanjeev Munjal, CEO – <a href="mailto:smunjal@daxsws.com" className="text-primary hover:underline">smunjal@daxsws.com</a> | <a href="tel:+18185686460" className="text-primary hover:underline">+1 (818) 568-6460</a></p>
                                <p>Munish Sethi, Co-Founder – <a href="mailto:msethi@daxsws.com" className="text-primary hover:underline">msethi@daxsws.com</a> | <a href="tel:+19493512404" className="text-primary hover:underline">+1 (949) 351-2404</a></p>
                            </div>
                       </div>
                    </CardContent>
                </Card>
            </div>
        </section>

         <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
            <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent-foreground">
                        Ready to modernize your agency’s ERP with Microsoft Dynamics 360 F&O?
                    </h2>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button asChild size="lg" className="w-full">
                        <Link href="/contact">TALK TO OUR GOVERNMENT TEAM</Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
