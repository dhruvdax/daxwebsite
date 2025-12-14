
"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';

const ContactInfoItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center">
                <Icon className="h-6 w-6" />
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold font-headline">{title}</h3>
            <div className="text-muted-foreground mt-1">
                {children}
            </div>
        </div>
    </div>
);

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
    <div className="bg-background">
       <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Your Empathetic ERP Partner, Ready to Support You Every Step of the Way.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <Card className="p-8 md:p-12 shadow-xl">
            <div className="flex flex-col gap-12">
                <div className="space-y-8">
                     <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">How can we help you</h2>
                     <ContactInfoItem icon={MapPin} title="Our Location">
                        <p>DAX Software Solutions Inc. 6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367</p>
                    </ContactInfoItem>
                     <ContactInfoItem icon={Mail} title="Email Us">
                        <a href="mailto:contact@daxsws.com" className="hover:text-primary transition-colors">contact@daxsws.com</a>
                    </ContactInfoItem>
                     <ContactInfoItem icon={Phone} title="Call Us On">
                        <a href="tel:+1.818.568.6460" className="hover:text-primary transition-colors block">+1.818.568.6460</a>
                        <a href="tel:+1.949.351.2404" className="hover:text-primary transition-colors block">+1.949.351.2404</a>
                    </ContactInfoItem>
                </div>
                <div>
                    <h2 className="text-3xl font-bold font-headline text-accent dark:text-white mb-8">Get in Touch</h2>
                    <div
                        data-form-id='2dda0781-9fc6-f011-bbd3-6045bd020834'
                        data-form-api-url='https://public-usa.mkt.dynamics.com/api/v1.0/orgs/0f5b728c-83ca-ed11-aece-000d3a323719/landingpageforms'
                        data-cached-form-url='https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/2dda0781-9fc6-f011-bbd3-6045bd020834'
                    ></div>
                </div>
            </div>
        </Card>
      </div>
      
      <div className="w-full h-[500px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.766755106511!2d-118.5900557847831!3d34.15231588057861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29c158f49f649%3A0x854a8a514436894a!2sDAX%20Software%20Solutions%20Inc.!5e0!3m2!1sen!2sus!4v1689104031641!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
