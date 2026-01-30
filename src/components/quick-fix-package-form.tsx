
'use client';

import { useEffect } from 'react';

interface PackageData {
    id: string;
    title: string;
    formId: string;
    cachedFormUrl: string;
}

export default function QuickFixPackageForm({ pkg }: { pkg: PackageData }) {
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
      }, [pkg.id]);

    return (
        <div
            data-form-id={pkg.formId}
            data-form-api-url='https://public-usa.mkt.dynamics.com/api/v1.0/orgs/0f5b728c-83ca-ed11-aece-000d3a323719/landingpageforms'
            data-cached-form-url={pkg.cachedFormUrl}
        ></div>
    );
}
