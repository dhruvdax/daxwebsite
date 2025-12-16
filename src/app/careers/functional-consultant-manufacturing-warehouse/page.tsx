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
                                <CardTitle className="text-3xl font-bold font-headline text-primary">Functional Consultant (Manufacturing and Warehouse Management)</CardTitle>
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
                                        <li>Facilitate workshops to develop business requirements; create demonstrations to provide proof of concept; plan and assist the team in drafting statements of work to include estimation of effort/cost.</li>
                                        <li>Be part of projects through the requirements definition and solution design phase.</li>
                                        <li>Ensure the overall solution design meets business requirements, fulfils user stories, and leading a team of resources through the build, test, and deployment phases.</li>
                                        <li>Facilitate customers decision-making process and document business processes and prepare functional design document that will drive the development process.</li>
                                        <li>Perform fit-gap analysis and Prototype and configure processes in Microsoft Dynamics 365 Finance and Operations (Production and Warehouse management Modules) to make sure the system works based on customer requirements.</li>
                                        <li>Support testing of the proposed system/solution and train users.</li>
                                        <li>Participates in providing structured support to DAX Software customers, including support for managed service customers and implementation customers.</li>
                                        <li>Troubleshoot support requests, proactively managing and governing assigned support cases according to SLA.</li>
                                        <li>Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
                                        <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
                                        <li>Proven experience in customizing and configuring Dynamics 365 Warehouse Management modules.</li>
                                    </ul>
                                    <h3 className="font-headline">Requirements:</h3>
                                    <ul>
                                        <li>Master’s degree in Computer Science, Computer Engineering, or a related field and four years of experience in the job offered or a related IT position designing and developing Microsoft Dynamics AX solutions. This may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and six years of experience in the job offered or a related IT position designing and implementing Microsoft Dynamics AX solutions.</li>
                                        <li>Minimum of 5 plus years Dynamics AX/D365 Finance implementation experience.</li>
                                        <li>Proven and verifiable implementations of 2 full lifecycle Dynamics AX (from analysis to deployment)</li>
                                        <li>Minimum 10 years of industry and/or consulting experience.</li>
                                        <li>Extensive experience working in core Manufacturing Procurement, Warehouse and Inventory Management.</li>
                                        <li>Knowledge and/or experience servicing or designing solutions for Manufacturing vertical industries.</li>
                                        <li>Experience working with and/or implementing complimentary third party solutions to D365/AX.</li>
                                        <li>D365 F&O certification in manufacturing and Warehouse and/or related areas.</li>
                                        <li>Extensive Experience with the Microsoft Dynamics 365 Manufacturing module.</li>
                                        <li>Lean Manufacturing Module experience is good to have.</li>
                                        <li>Understands the key activities and deliverables for the client engagement and internal projects, reuses all standard templates and project artifacts and improves quality of DAX Software documentation assets.</li>
                                        <li>Know-how on tools like Jira, Confluence & methodologies like ITIL based processes, Agile Methodology.</li>
                                    </ul>
                                    <p><strong>Salary:</strong> $122,000.00 per year</p>
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
