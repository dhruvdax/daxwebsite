'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CareerDetailPage() {
    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Button variant="ghost" asChild className="mb-8">
                           <Link href="/careers"><ArrowLeft className="mr-2 h-4 w-4" /> Back to all openings</Link>
                        </Button>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold font-headline text-primary">Technical Architect</CardTitle>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground pt-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>Woodland Hills, CA</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="prose dark:prose-invert max-w-none">
                                    <h3 className="font-headline">Job Duties:</h3>
                                    <ul>
                                        <li>Analyze clients’ business requirements and design, develop, and implement Microsoft Dynamics 365/AX and Enterprise Resource Planning (ERP) software solutions to meet customer needs.</li>
                                        <li>Meet with clients to understand their business processes and organizational structure and determine the issues affecting their current IT architecture, specifically pertaining to their supply chain processes.</li>
                                        <li>Develop project requirements based on operational needs and infrastructure capabilities and design ERP solutions that meet business requirements.</li>
                                        <li>Review all technical information with clients to ensure that the newly developed architecture aligns with specific business processes and plan the software development process in coordination with Lead Solutions Architects.</li>
                                        <li>Work with the project team on all aspects of the application development process including coding, source control management, continuous integration, building processes, testing, and operations.</li>
                                        <li>Write comprehensive code to achieve user requirements, streamline the back-end operations, and increase overall company efficiency.</li>
                                        <li>Migrate the company’s Trade and Logistics, HR, and Financial Management data to the ERP system upon conclusion of development.</li>
                                        <li>Test the functionality and responsiveness of the ERP system and create reports regarding application performance, processing speeds, application memory and database, and network updates.</li>
                                        <li>Provide technical support to all application users and develop new solutions and functionalities as needed to improve productivity.</li>
                                        <li>Stay abreast of the latest technological advances and industry trends in ERP to ensure optimal performance and effective software development.</li>
                                    </ul>
                                    <h3 className="font-headline">Requirements:</h3>
                                    <ul>
                                        <li>The position requires a Master’s degree in Computer Science, Computer Engineering, or a related field and two years of experience in the job offered or a related position. The requirement may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and five years of experience in the job offered or a related position.</li>
                                        <li>The position requires skills and knowledge in Microsoft Dynamics 365/AX, SQL, C#, and PowerBI.</li>
                                    </ul>
                                    <p><strong>Working hours:</strong> 40 hours/week</p>
                                    <p><strong>Job Site:</strong> Woodland Hills, CA</p>
                                    <p>Email Resume to: DAX Software Solutions, Inc. at <a href="mailto:apply@daxsws.com">apply@daxsws.com</a> or apply here</p>
                                </div>
                                <Button asChild size="lg" className="mt-8">
                                    <a href="mailto:apply@daxsws.com">Apply Now</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
