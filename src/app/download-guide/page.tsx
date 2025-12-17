
'use client';
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Download Empathetic ERP Guide | DAX Software Solutions",
  description: "Download chapters of our Empathetic ERP Guide to learn about user needs, stakeholder engagement, change management, and more.",
  canonicalPath: "/download-guide",
});

const CHAPTERS = [
    { id: 'chapter-1', title: 'Understanding User Needs' },
    { id: 'chapter-2', title: 'Stakeholder Engagement' },
    { id: 'chapter-3', title: 'Communication' },
    { id: 'chapter-4', title: 'Change Management' },
    { id: 'chapter-5', title: 'User Adoption' },
    { id: 'chapter-6', title: 'Problem Solving' },
    { id: 'chapter-7', title: 'Feedback and Continuous Improvement' },
    { id: 'chapter-8', title: 'Reduced Resistance' },
];

export default function DownloadGuideLandingPage() {
    const image = PlaceHolderImages.find(img => img.id === 'guide-download');

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-4">
                            Empathetic ERP Guide
                        </h1>
                        <p className="mb-8 text-muted-foreground">Select the eBook of your choice.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CHAPTERS.map(chapter => (
                                <Button key={chapter.id} asChild variant="primary-outline" size="lg" className="text-center h-auto py-4 flex items-center justify-center">
                                    <Link href={`/download-guide/${chapter.id}`}>
                                        <span className="h-[40px] flex items-center justify-center">
                                            {chapter.title.split(' ').map((word, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {word}
                                                    {arr.length > 2 && i === Math.floor(arr.length / 2) -1 && <br />}
                                                    {i < arr.length - 1 && ' '}
                                                </React.Fragment>
                                            ))}
                                        </span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                     <div className="flex items-center justify-center">
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
