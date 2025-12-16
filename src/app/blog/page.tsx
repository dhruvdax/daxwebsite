
'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/blog-content";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Folder } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination';

export default function BlogPage() {
    const postsWithImages = BLOG_POSTS.map(post => ({
        ...post,
        image: PlaceHolderImages.find(img => img.id === post.imageId)
    }));

  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                Latest blog on ERP Solutions
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postsWithImages.map(post => (
                    <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <Link href={`/blog/${post.slug}`} className="block">
                            <div className="relative h-56 w-full">
                                {post.image && (
                                    <Image
                                        src={post.image.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={post.image.imageHint}
                                    />
                                )}
                            </div>
                        </Link>
                        <CardContent className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold font-headline mb-3">
                                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Folder className="h-4 w-4" />
                                    <span>{post.tags.join(', ')}</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground flex-grow">{post.excerpt}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-16">
                 <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                         <PaginationItem>
                            <PaginationLink href="#">4</PaginationLink>
                        </PaginationItem>
                         <PaginationItem>
                            <PaginationLink href="#">5</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
      </section>
    </div>
  );
}

