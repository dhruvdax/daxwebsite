
"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';

export default function ContactPage() {

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
      }, []);


  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We're here to help. Whether you have a question about our services or want to start a project, please reach out.
        </p>
      </div>
      
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 font-headline">Contact Form</h2>
            <div
                data-form-id='2dda0781-9fc6-f011-bbd3-6045bd020834'
                data-form-api-url='https://public-usa.mkt.dynamics.com/api/v1.0/orgs/0f5b728c-83ca-ed11-aece-000d3a323719/landingpageforms'
                data-cached-form-url='https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/2dda0781-9fc6-f011-bbd3-6045bd020834'
            ></div>
        </Card>

        <div className="space-y-8">
            <Card>
                <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 font-headline">Our Office</h3>
                    <div className="space-y-4 text-muted-foreground">
                        <div className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span>6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <a href="mailto:contact@daxsws.com" className="hover:text-primary">contact@daxsws.com</a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <a href="tel:+1.818.568.6460" className="hover:text-primary">+1.818.568.6460</a>
                        </div>
                         <div className="flex items-start space-x-3">
                            <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <a href="tel:+1.949.351.2404" className="hover:text-primary">+1.949.351.2404</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
