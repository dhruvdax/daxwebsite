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
                                <CardTitle className="text-3xl font-bold font-headline text-primary">Business Software Analyst</CardTitle>
                                 <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground pt-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>Woodland Hills, CA</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="prose dark:prose-invert max-w-none">
                                    <h3 className="font-headline">Job Summary:</h3>
                                    <p>The Business Software Analyst is responsible for evaluating, designing, and implementing software solutions that align with business objectives. This role involves working closely with stakeholders, gathering requirements, analyzing business processes, and translating them into functional software specifications. The Business Software Analyst ensures that the software solutions meet business needs, are scalable, and improve operational efficiency.</p>
                                    <h3 className="font-headline">Key Responsibilities:</h3>
                                    <ul>
                                        <li><strong>Requirements Gathering:</strong> Collaborate with stakeholders, including business users, managers, and IT teams, to gather and document detailed business requirements.</li>
                                        <li><strong>Business Process Analysis:</strong> Analyze current business processes, identify gaps, and propose software solutions to enhance efficiency and productivity.</li>
                                        <li><strong>Software Evaluation:</strong> Evaluate existing software systems and recommend improvements or new software solutions that align with business goals.</li>
                                        <li><strong>Functional Specifications:</strong> Translate business requirements into functional specifications, user stories, or use cases that guide software development teams.</li>
                                        <li><strong>Project Management:</strong> Work with project managers to develop project plans, timelines, and resource requirements for software development projects.</li>
                                        <li><strong>Testing and Validation:</strong> Develop and execute test plans to ensure software solutions meet the defined requirements and are free of defects.</li>
                                        <li><strong>Training and Support:</strong> Provide training and support to end-users, ensuring they are proficient in using the software solutions.</li>
                                        <li><strong>Continuous Improvement:</strong> Identify opportunities for continuous improvement in software systems and processes, and implement best practices.</li>
                                        <li><strong>Stakeholder Communication:</strong> Communicate effectively with all stakeholders to ensure alignment and understanding of project objectives and progress.</li>
                                        <li><strong>Data Visualization:</strong> Microsoft Azure Power BI, Tableau.</li>
                                        <li><strong>D365:</strong> Lead the implementation of D365 F&O modules, ensuring alignment with business needs.</li>
                                        <li><strong>Solution Design:</strong> Design and configure D365 F&O solutions to meet business requirements.</li>
                                    </ul>
                                    <h3 className="font-headline">Requirements:</h3>
                                    <h4>Qualifications</h4>
                                    <ul>
                                        <li><strong>Education:</strong> Bachelor’s or Master’s degree in MIS, Information Technology, Business, Computer Science, or a related field.</li>
                                        <li><strong>Experience:</strong> minimum of two years of experience in the job offered or related.</li>
                                    </ul>
                                    <h4>Technical Skills:</h4>
                                     <ul>
                                        <li>Proficiency in software analysis, design, and development methodologies.</li>
                                        <li>Strong understanding of software development life cycles (SDLC).</li>
                                        <li>Familiarity with business process modeling, data analysis, and requirements management tools.</li>
                                        <li>Experience with software testing, quality assurance, and user acceptance testing (UAT).</li>
                                    </ul>
                                    <h4>Soft Skills:</h4>
                                    <ul>
                                        <li>Excellent analytical and problem-solving skills.</li>
                                        <li>Strong communication and interpersonal skills.</li>
                                        <li>Ability to work independently and as part of a team.</li>
                                        <li>Detail-oriented with strong organizational skills.</li>
                                    </ul>
                                    <h4>Certifications:</h4>
                                    <ul>
                                        <li>Certification in Business Analysis (e.g., CBAP, CCBA) or relevant software analysis certifications are a plus.</li>
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
