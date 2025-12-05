
'use client';
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                <div className="grid md:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
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
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8 text-center">
                            Get your Empathetic ERP Guide
                        </h1>
                        <p className="mb-4 text-muted-foreground text-center">Select the eBook of your choice.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CHAPTERS.map(chapter => (
                                <Button key={chapter.id} asChild variant="primary-outline" size="lg" className="text-center h-auto py-4">
                                    <Link href={`/download-guide/${chapter.id}`}>
                                        {chapter.title.split(' ').map((word, i, arr) => (
                                            <React.Fragment key={i}>
                                                {word}
                                                {arr.length > 2 && i === Math.floor(arr.length / 2) -1 && <br />}
                                                {i < arr.length - 1 && ' '}
                                            </React.Fragment>
                                        ))}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
