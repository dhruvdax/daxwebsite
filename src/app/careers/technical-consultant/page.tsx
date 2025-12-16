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
                                <CardTitle className="text-3xl font-bold font-headline text-primary">Technical Consultant</CardTitle>
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
                                        <li>Work with Lead Solutions Architect and Financial Consultants to provide Microsoft Dynamics AX/ Finance and Operations Enterprise Resource Planning (ERP) consulting services.</li>
                                        <li>Lead the requirement gathering process by meeting with business process leaders to determine business requirements.</li>
                                        <li>Work with Customers on Implementation and Managed service side of business.</li>
                                        <li>Help junior resources during solution process with understanding the problem and towards right resources to research, solutions based on customer needs.</li>
                                        <li>Write the code in D365 F&O/Dynamics AX to achieve the user requirements.</li>
                                        <li>Worked in writing interfaces to integrate D365 F&O/Dynamics AX with different third-party systems.</li>
                                        <li>Utilizing Manufacturing, Supply Chain, Warehouse, Finance modules process knowledge to understand the new system’s impact on Trade and Logistics, HR and Finance management.</li>
                                        <li>Perform Gap analysis between AX functionality and end user requirement.</li>
                                        <li>Train/Write design documentation and corresponding technical specifications.</li>
                                        <li>Train/Write test scenarios and cases and perform unit testing.</li>
                                        <li>Perform production migration using data sets.</li>
                                        <li>Train end users on their customized AX solutions.</li>
                                        <li>Work with different partners/solution providers and deliver timely solutions to clients.</li>
                                        <li>Troubleshooting different performance issues for optimizations and suggesting performance tuning solutions.</li>
                                        <li>Help setup go-live checklist and ensure support to customers as well as help with issue debugging and resolution.</li>
                                    </ul>
                                    <h3 className="font-headline">Requirements:</h3>
                                    <ul>
                                        <li>Bachelor’s degree in Computer Science, Computer Engineering, or a related field and minimum two years of experience in the job offered or a related IT position designing and developing Microsoft Dynamics AX solutions.</li>
                                        <li>The position requires the ability to use Microsoft Dynamics AX, SQL Server, Visual Studio, X++, C#, .Net, PowerBI, Azure, ASP.Net, Trace Parser, SQL Profiler, API developer, and Interface development.</li>
                                        <li>Hands-on experience on Microsoft’s Dynamics AX/D365 F&O ERP suite.</li>
                                        <li>Extensive programming experience in different MS programming languages.</li>
                                        <li>Certifications in Dynamics AX/D365 Finance and Operations.</li>
                                        <li>In-depth experience integrating with 3rd party applications.</li>
                                    </ul>
                                    <p><strong>Job Site:</strong> Woodland Hills, CA</p>
                                    <p>Email Resume to: DAX Software Solutions, Inc. at <a href="mailto:contact@daxsws.com">contact@daxsws.com</a> or apply here</p>
                                </div>
                                <Button asChild size="lg" className="mt-8">
                                    <a href="mailto:contact@daxsws.com">Apply Now</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
