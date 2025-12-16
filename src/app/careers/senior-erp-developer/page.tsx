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
                                <CardTitle className="text-3xl font-bold font-headline text-primary">Senior ERP Developer</CardTitle>
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
                                        <li>Analyze clients' IT solutions requirements and design, develop, and implement Enterprise Resource Planning (ERP) solutions for the company's clients.</li>
                                        <li>Meet with clients to understand their business processes and organizational structure and develop project requirements based on operational needs and infrastructure capabilities.</li>
                                        <li>Create design documentation and corresponding technical specifications using technologies such as Microsoft Dynamics 365, SQL Server, Visual Studio, XX++, C#, .Net, PowerBI, Azure, ASP.Net, Trace Parser, SQL Profile, and API developer.</li>
                                        <li>Develop the business process management software to automate workflow, increase productivity and customer retention, and decrease company production costs.</li>
                                        <li>Design data analysis models for the supply chain process of the ERP software to provide the client with a competitive advantage over its competitors.</li>
                                        <li>Lead the project team throughout ERP development, including coding, source control management, continuous integration, building processes, testing, and operations.</li>
                                        <li>Analyze the quality and performance of ERP solutions and develop strategies to detect, diagnose, and resolve software and network issues.</li>
                                        <li>Perform unit testing NUnit & supporting frameworks (moq, Microsoft Fakes) and integration testing of the new supply chain.</li>
                                        <li>Determine performance and operational-based indicators to track inventory information and back-end processes.</li>
                                        <li>Consult with clients on business optimization and reporting requirements best practices with the use of Power BI and Apps analytics.</li>
                                        <li>Facilitate user success by writing D365 code, developing methods to integrate D365 with third party platforms, and performing gap analysis between AX/D365 F&O functionality and end user requirements.</li>
                                        <li>Analyze the migration of the client's data to be utilized by the ERP post development.</li>
                                        <li>Stay abreast of the latest technological advances and industry trends in ERP to ensure optimal performance and effective software development.</li>
                                    </ul>
                                    <h3 className="font-headline">Requirements:</h3>
                                    <ul>
                                        <li>The position requires a Master’s degree in Computer Science, Computer Engineering, or a related field and two years of experience in the job offered or a related position. This may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and five years of experience in the job offered or a related position.</li>
                                        <li>It requires skills and knowledge in Microsoft Dynamics AX, SQL Server, Visual Studio, X++, C#.Net, Azure, ASP.Net, Trace Parser, SQL Profiler, API development, and Interface development.</li>
                                        <li>The position requires little travel -24 % of the work time several days but less than 60 days per year throughout the U.S.</li>
                                    </ul>
                                    <p><strong>Salary:</strong> $176,134.00 per year</p>
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
