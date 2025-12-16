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
                                <CardTitle className="text-3xl font-bold font-headline text-primary">Warehouse Management Consultant</CardTitle>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground pt-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>Woodland Hills, CA</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>Full-time</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="prose dark:prose-invert max-w-none">
                                    <h3 className="font-headline">Job Duties:</h3>
                                    <ul>
                                        <li>Experienced D365 Advanced Warehouse Consultant with Supply chain to join our team for an overseas project. The ideal candidate will have a deep understanding of the Dynamics 365 Supply Chain Management suite, including Advanced Warehouse Management and Inventory Management.</li>
                                        <li>Provide ongoing solutions to DAX customers to support their Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
                                        <li>Identify and analyze client requirements and recommend solutions that align with their business objectives.</li>
                                        <li>Configure and customize Dynamics 365 Supply Chain and Warehouse Management modules to meet client requirements.</li>
                                        <li>Develop and implement warehouse processes and workflows to optimize efficiency and accuracy.</li>
                                        <li>Train clients on the use of Dynamics 365 Supply Chain and Warehouse Management applications.</li>
                                        <li>Provide ongoing support and maintenance services to ensure the stability and performance of client implementations.</li>
                                        <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
                                        <li>Proven experience in customizing and configuring Dynamics 365 Warehouse Management modules.</li>
                                        <li>Lead and be part of project implementation team on need basis and provide support for different projects.</li>
                                    </ul>
                                    <h3 className="font-headline">Requirements:</h3>
                                    <ul>
                                        <li><strong>Educational Requirement:</strong> Bachelor’s degree in computer science, Computer Engineering, Business Management, or a related field.</li>
                                        <li>Experience in Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
                                        <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
                                        <li>Proven experience in customizing and configuring Dynamics 365 Supply Chain and Warehouse Management modules.</li>
                                        <li>D365 certification in Supply Chain Management or related areas.</li>
                                        <li>Excellent problem-solving skills and ability to analyze complex business requirements.</li>
                                        <li>Excellent communication and interpersonal skills.</li>
                                        <li>Ability to travel as required to support client implementations.</li>
                                        <li>Certifications in Dynamics 365 Warehouse</li>
                                    </ul>
                                    <p><strong>Salary:</strong> $130,000.00 per year</p>
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
