'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CareerDetailPage() {
    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto">
                    <div>
                        <Button variant="ghost" asChild className="mb-8">
                           <Link href="/careers"><ArrowLeft className="mr-2 h-4 w-4" /> Back to all openings</Link>
                        </Button>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold font-headline text-primary">Applications Consultant</CardTitle>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground pt-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>Woodland Hills, CA</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p>DAX Software Solutions, Inc. is seeking a Software Developers with BFSI, Supply Chain domain experience, Legacy Data Migration and ETL tools knowledge. Dynamics 365 F&O, Integration, Technical Architect, Code migration, go live management, AX2012 R3, D365 F&O, SSRS, and the upgrade, data management. The position will primarily be responsible interface with key stakeholders and apply your technical proficiency across different stages of the Software Development Life Cycle including Data Migration & Requirements Elicitation, Application Architecture definition and Design. You will play an important role in creating the high-level design artifacts. You will also deliver high quality code deliverables for a module, lead validation for all types of testing and support activities related to implementation, transition, and warranty. You will be part of a learning culture, where teamwork and collaboration are encouraged, excellence is rewarded, and diversity is respected and valued.</p>
                                    <h3 className="font-headline">Key Responsibilities (Essential Duties and Functions)</h3>
                                    <ul>
                                        <li>Collaborate with clients to gather and analyze business requirements for their migration to Dynamics 365.</li>
                                        <li>Participate and contribute to the requirements elicitation process and create requirements documentation.</li>
                                        <li>Participate in creating application architecture document to provide deliverables in line with architectural requirements.</li>
                                        <li>Assist in the Design and implement system configurations, customizations, and extensions using C# and X++ / JavaScript programming languages.</li>
                                        <li>Create design artifacts and support prototyping through creation of POCs.</li>
                                        <li>Access the legacy ERP systems to: 1. Understand the data structure 2. Define the migration scope 3. Select appropriate ETL (extract – transform – load) tools 4. Develop a strategy to import relevant and updated data from historical records. Then, drive the data migration process from legacy ERP systems to Microsoft D365 F&O</li>
                                        <li>Develops Informatica Cloud IDMC/IICS mappings and mapping tasks using ODBC and API based data integration and design task flows.</li>
                                        <li>Deliver high quality code deliverables and support peers in quality checks such that design requirements are met.</li>
                                        <li>Create user documentation for the assigned modules, Lead validation activities for the assigned modules for all types of testing e.g., Functional, Integration, System, User Experience etc.</li>
                                        <li>Support the creation of “Go Live” plan (change management request) and manage assigned activities in the plan.</li>
                                        <li>Perform root-cause analysis of any issues that arise post-implementation and work on appropriate solutions.</li>
                                        <li>Participate in Knowledge Transfer sessions, prepare system appreciation documents and support the transition process.</li>
                                        <li>Conduct impact analysis of issues logged, prioritize, and ensure that production support is provided as per committed SLAs.</li>
                                    </ul>
                                    <h3 className="font-headline">Qualifications/Education/Experience</h3>
                                     <ul>
                                        <li>Bachelor’s degree in engineering/computer-related discipline, or equivalent experience required.</li>
                                        <li>At least 2 years of experience in end-to-end implementation of projects in data migrations, Integration using etl tools -Informatica.</li>
                                        <li>Dynamics 365 F&O ERP knowledge.</li>
                                        <li>2+ years of Cloud (AWS / Azure) experience.</li>
                                        <li>Leadership/Management skill.</li>
                                        <li>Excellent communication skills – will be working with Sr Leadership and entire implementation team.</li>
                                    </ul>
                                    <h3 className="font-headline">Knowledge/Skill Requirement</h3>
                                    <ul>
                                        <li>Good understanding of data architecture, data integration, data quality and data architecture.</li>
                                        <li>Experience in Relational Modeling, Dimensional Modeling and Modeling of Unstructured Data.</li>
                                        <li>Proven experience as a Dynamics AX or D365 Consultant, with a focus on migration and upgrade projects.</li>
                                        <li>Strong expertise in Informatica PowerCenter and Informatica Cloud IDMC/IICS, specifically pertaining on API data integration and Cloud-Based ODBC data integration.</li>
                                        <li>Strong expertise in designing and developing data integration / migration solutions.</li>
                                        <li>Experience working with data in multiple ERP and data movement technologies.</li>
                                        <li>Advanced knowledge of SQL databases and queries.</li>
                                        <li>Advanced knowledge of CDC (Change Data Capture) & CT (Change Tracking) inner workings.</li>
                                        <li>Experience with normalizing and de-normalizing data.</li>
                                        <li>Work experience in Cloud technologies and DevOps is preferred.</li>
                                        <li>Excellent analytical and problem-solving skills with the ability to translate business requirements into technical solutions.</li>
                                        <li>Ability to work in teams in a diverse, multi-stakeholder environment comprising of Business and Technology teams.</li>
                                        <li>Microsoft certifications in Dynamics 365 or related technologies are a plus.</li>
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
