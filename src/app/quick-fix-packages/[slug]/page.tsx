import { notFound } from 'next/navigation';
import QuickFixPackageForm from '@/components/quick-fix-package-form';

const PACKAGE_DATA = [
    { 
        id: 'data-migration', 
        title: 'Data Migration',
        formId: 'db65ddcd-5ec0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/db65ddcd-5ec0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'integration-failures', 
        title: 'Integration Failures',
        formId: '76f9c965-60c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/76f9c965-60c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'performance-bottlenecks', 
        title: 'Performance Bottlenecks',
        formId: 'bd22aa7c-60c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/bd22aa7c-60c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'custom-code-bugs', 
        title: 'Custom Code Bugs',
        formId: '3455089d-60c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/3455089d-60c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'broken-implementations', 
        title: 'Broken Implementations',
        formId: 'd11e44bf-60c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/d11e44bf-60c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'reporting-error', 
        title: 'Reporting Error',
        formId: '946f5ae3-60c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/946f5ae3-60c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'challenges-with-system-upgrades', 
        title: 'Challenges with System Upgrades',
        formId: 'bdbcd102-61c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/bdbcd102-61c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'erp-cost-overruns', 
        title: 'ERP Cost Overruns',
        formId: 'a43cda8b-61c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/a43cda8b-61c0-f011-bbd3-6045bd020834'
    },
];

// FIX: Change params to a Promise for Next.js 15
type PageProps = {
  params: Promise<{ slug: string }>;
};

// FIX: Make the component async
export default async function QuickFixPackageRequestPage(props: PageProps) {
    // FIX: Await the params
    const { slug } = await props.params;
    
    const pkg = PACKAGE_DATA.find((p) => p.id === slug);

    if (!pkg) {
        notFound();
    }
    
    return (
        <div className="bg-background">
            <section className="container mx-auto px-4 py-12 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <div>
                        <p className="text-lg text-muted-foreground">Request more details about quick-fix package related to</p>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8 text-primary">
                            {pkg.title}
                        </h1>
                        <QuickFixPackageForm pkg={pkg} />
                    </div>
                </div>
            </section>
        </div>
    );
}