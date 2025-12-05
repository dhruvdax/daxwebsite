
'use client';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import React, { useEffect, use } from 'react';

const CHAPTER_DATA = [
    { 
        id: 'chapter-1', 
        title: 'Understanding User Needs',
        imageId: 'guide-chapter-1',
        formId: '1b1ff00d-78c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/1b1ff00d-78c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'chapter-2', 
        title: 'Stakeholder Engagement',
        imageId: 'guide-chapter-2',
        formId: 'e498b52c-79c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/e498b52c-79c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'chapter-3', 
        title: 'Communication',
        imageId: 'guide-chapter-3',
        formId: 'f736ec4e-79c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/f736ec4e-79c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'chapter-4', 
        title: 'Change Management',
        imageId: 'guide-chapter-4',
        formId: 'fcdeec7e-79c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/fcdeec7e-79c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'chapter-5', 
        title: 'User Adoption',
        imageId: 'guide-chapter-5',
        formId: '596e3c9e-79c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/596e3c9e-79c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'chapter-6', 
        title: 'Problem Solving',
        imageId: 'guide-chapter-6',
        formId: '2808c1b0-79c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/2808c1b0-79c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'chapter-7', 
        title: 'Feedback and Continuous Improvement',
        imageId: 'guide-chapter-7',
        formId: 'f00d5ec5-79c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/f00d5ec5-79c0-f011-bbd3-6045bd020834'
    },
    { 
        id: 'chapter-8', 
        title: 'Reduced Resistance',
        imageId: 'guide-chapter-8',
        formId: '826657d8-79c0-f011-bbd3-6045bd020834',
        cachedFormUrl: 'https://assets1-usa.mkt.dynamics.com/0f5b728c-83ca-ed11-aece-000d3a323719/digitalassets/forms/826657d8-79c0-f011-bbd3-6045bd020834'
    },
];

export default function DownloadGuidePage() {
  const params = useParams();
  const slug = params.slug as string;
  const chapter = CHAPTER_DATA.find((c) => c.id === slug);
  const image = PlaceHolderImages.find(img => img.id === chapter?.imageId);

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
    
    // The cleanup function is now intentionally left empty to prevent script removal
    return () => {};
  }, [slug]);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground">Get your Empathetic ERP Guide for</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8">
              <span className="text-primary">{chapter.title}</span>
            </h1>
            <div id="dax-form-wrapper">
              <div
                data-form-id={chapter.formId}
                data-form-api-url="https://public-usa.mkt.dynamics.com/api/v1.0/orgs/0f5b728c-83ca-ed11-aece-000d3a323719/landingpageforms"
                data-cached-form-url={chapter.cachedFormUrl}
              ></div>
            </div>
          </div>
          <div className="md:col-span-4 flex items-center justify-center">
             {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={500}
                    height={500}
                    className="object-contain"
                    data-ai-hint={image.imageHint}
                />
             )}
          </div>
        </div>
      </div>
    </div>
  );
}

