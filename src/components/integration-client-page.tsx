'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Check } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/content';

const INTEGRATION_PLATFORMS = [
  {
    title: 'Power Apps',
    imageId: 'power-apps-integration',
    features: [
      'Low-code user-friendly platform for easy app development.',
      'Integrates with Microsoft services and third-party apps.',
      'Customize the integrations as per your requirements.',
      'Supports cross-platform mobile and web apps.',
    ],
  },
  {
    title: 'Dell Boomi',
    imageId: 'dell-boomi-integration',
    features: [
      'Cloud-based integration platform as a service (iPaaS).',
      'Drag-and-drop interface for easy configuration and deployment.',
      'Broad connectivity with support for various applications, databases, and protocols.',
      'Robust data mapping and transformation capabilities.',
      'Built-in monitoring and alerting for real-time visibility.',
      'Scalable architecture for handling large volumes of data and transactions.',
    ],
  },
  {
    title: 'Celigo',
    imageId: 'celigo-integration',
    features: [
      'Integration platform designed for cloud-based applications and services.',
      'Pre-built connectors and templates for seamless integration with popular systems like Salesforce, NetSuite, Shopify, and more.',
      'Extensive mapping and transformation capabilities for data synchronization.',
      'Automated workflows and business process orchestration.',
      'Real-time data synchronization and updates.',
      'Built-in error handling and exception management.',
    ],
  },
  {
    title: 'Aonflow',
    imageId: 'aonflow-integration',
    features: [
      'No-code/low-code integration and automation platform designed for modern ERP, CRM, and cloud ecosystems.',
      'Pre-built connectors and integration templates for Dynamics 365, Salesforce, QuickBooks, HubSpot, WooCommerce, and other business applications.',
      'Visual workflow builder for fast configuration of data mappings and business logic without custom code.',
      'Near real-time data synchronization across systems with configurable validation rules.',
      'Centralized monitoring dashboard with alerts, logging, and exception handling.',
      'Scalable architecture supporting growing transaction volumes and evolving business processes.',
    ],
  },
  {
    title: 'Micro Services',
    imageId: 'micro-services-integration',
    features: [
      'Lightweight and modular architecture for building distributed systems.',
      'Containerization for easy deployment and scalability.',
      'Support for various programming languages and frameworks.',
      'API-based communication between services for loose coupling and flexibility.',
      'Independent development and deployment of individual services.',
      'Resilience and fault tolerance through distributed computing principles.',
    ],
  },
];

export default function IntegrationClientPage() {
    const integrationImages = INTEGRATION_PLATFORMS.map(platform => ({
        ...platform,
        image: PlaceHolderImages.find(img => img.id === platform.imageId)
    }));

    const caseStudy = CASE_STUDIES.find(cs => cs.slug === 'dell-boomi-integration');
    const caseStudyImage = PlaceHolderImages.find(img => img.id === caseStudy?.imageId);

  return (
    <div className="bg-background text-foreground">
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Dynamics 365 Integration</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Simplify your integration challenges with the DAX Integrations Solution Suite.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">Can I integrate my existing applications with Dynamics 365 ERP?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        DAX offers seamless integration with all your applications using Power Apps, Dell Boomi, Celigo, Micro Services, and other platforms. Our expertise in integration technologies enables businesses to connect systems, automate workflows, and unleash the potential of their data. With Power Apps, DAX configures and customizes integrations across various applications. Dell Boomi provides scalable cloud-based integrations. Celigo simplifies application connections and automates processes. Micro Services integrations offer flexibility and agility.
                    </p>
                </div>
            </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
              <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                  {integrationImages.map((platform, index) => (
                      <Card key={platform.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
                        <div className={`grid md:grid-cols-2 items-center`}>
                           <div className={`relative h-64 md:h-full ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                                {platform.image && 
                                    <Image
                                        src={platform.image.imageUrl}
                                        alt={platform.image.description}
                                        data-ai-hint={platform.image.imageHint}
                                        fill
                                        className="object-cover"
                                    />
                                }
                            </div>
                            <CardContent className="p-8 md:p-12">
                                <h3 className="text-2xl font-bold font-headline mb-6">{platform.title}</h3>
                                <ul className="space-y-3">
                                    {platform.features.map(item => (
                                        <li key={item} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                            <span className="text-muted-foreground text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </div>
                      </Card>
                  ))}
              </div>
          </div>
      </section>
      
      {caseStudy && caseStudyImage && (
        <section className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <Image 
                      src={caseStudyImage.imageUrl}
                      alt={caseStudyImage.description}
                      data-ai-hint={caseStudyImage.imageHint}
                      width={550}
                      height={350}
                      className="rounded-lg shadow-2xl mx-auto"
                  />
                  <div className="text-secondary-foreground">
                      <p className="text-sm font-bold tracking-widest text-primary uppercase">Featured Case Study</p>
                      <h2 className="font-headline text-3xl font-bold mt-2 text-accent">{caseStudy.title}</h2>
                      <p className="mt-4 text-lg">
                          {caseStudy.summary}
                      </p>
                      <Button asChild variant="default" className="mt-6">
                          <Link href={`/case-studies/${caseStudy.slug}`}>READ MORE<ArrowRight /></Link>
                      </Button>
                  </div>
                </div>
            </div>
        </section>
      )}

    </div>
  );
}
