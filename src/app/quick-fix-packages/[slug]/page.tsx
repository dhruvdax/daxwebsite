
'use client';

import { useParams, notFound } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

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

export default function QuickFixPackageRequestPage() {
    const params = useParams();
    const slug = params.slug as string;
    const pkg = PACKAGE_DATA.find((p) => p.id === slug);

    useEffect(() => {
        const scriptId = 'dynamics-form-loader';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
        const loadForm = () => {
           // @ts-ignore
          if (window.MsCrmMkt && typeof window.MsCrmMkt.MsCrmFormLoader === 'object') {
             // @ts-ignore
            window.MsCrmMkt.MsCrmFormLoader.on('afterFormLoad', () => {
              // Form is loaded
            });
          }
        };
    
        if (!script) {
          script = document.createElement('script');
          script.id = scriptId;
          script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js';
          script.async = true;
          script.onload = loadForm;
          document.body.appendChild(script);
        } else {
            loadForm();
        }
        
        return () => {};
      }, [slug]);

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
                        <div
                            data-form-id={pkg.formId}
                            data-form-api-url='https://public-usa.mkt.dynamics.com/api/v1.0/orgs/0f5b728c-83ca-ed11-aece-000d3a323719/landingpageforms'
                            data-cached-form-url={pkg.cachedFormUrl}
                        ></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
