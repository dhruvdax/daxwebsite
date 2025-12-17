
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Folder } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis, PaginationFirst, PaginationLast } from '@/components/ui/pagination';
import { notFound } from "next/navigation";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
    title: "Blog | DAX Software Solutions",
    description: "Read the latest articles and insights on ERP solutions, Microsoft Dynamics 365, and business process optimization from the experts at DAX.",
    canonicalPath: "/blog",
});

interface Post {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    date: string;
    _embedded: {
        'wp:featuredmedia'?: { source_url: string, alt_text: string }[];
        'wp:term'?: { name: string }[][];
    };
}

async function getPosts(page: number = 1): Promise<{ posts: Post[], totalPages: number }> {
    const perPage = 6;
    try {
        const res = await fetch(`https://forestgreen-squid-903456.hostingersite.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&orderby=date&order=desc&status=publish&_embed=1`, {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!res.ok) {
            console.error("Failed to fetch posts:", res.statusText);
            return { posts: [], totalPages: 0 };
        }

        const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
        const posts: Post[] = await res.json();
        
        return { posts, totalPages };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return { posts: [], totalPages: 0 };
    }
}

function renderPagination(currentPage: number, totalPages: number) {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink href={`/blog?page=${i}`} isActive={i === currentPage}>{i}</PaginationLink>
                </PaginationItem>
            );
        }
    } else {
        // Show first page number
        pages.push(
            <PaginationItem key={1}>
                <PaginationLink href={`/blog?page=1`} isActive={1 === currentPage}>1</PaginationLink>
            </PaginationItem>
        );

        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        if (currentPage <= 3) {
            startPage = 2;
            endPage = 4;
        } else if (currentPage >= totalPages - 2) {
            startPage = totalPages - 3;
            endPage = totalPages - 1;
        }

        if (startPage > 2) {
            pages.push(<PaginationItem key="start-ellipsis"><PaginationEllipsis /></PaginationItem>);
        }

        for (let i = startPage; i <= endPage; i++) {
             pages.push(
                <PaginationItem key={i}>
                    <PaginationLink href={`/blog?page=${i}`} isActive={i === currentPage}>{i}</PaginationLink>
                </PaginationItem>
            );
        }

        if (endPage < totalPages - 1) {
            pages.push(<PaginationItem key="end-ellipsis"><PaginationEllipsis /></PaginationItem>);
        }

        // Show last page number
        pages.push(
            <PaginationItem key={totalPages}>
                <PaginationLink href={`/blog?page=${totalPages}`} isActive={totalPages === currentPage}>{totalPages}</PaginationLink>
            </PaginationItem>
        );
    }


    return (
        <Pagination>
            <PaginationContent>
                {currentPage > 1 && (
                    <>
                        <PaginationItem>
                            <PaginationFirst href={`/blog?page=1`} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationPrevious href={`/blog?page=${currentPage - 1}`} />
                        </PaginationItem>
                    </>
                )}
                {pages}
                {currentPage < totalPages && (
                    <>
                        <PaginationItem>
                            <PaginationNext href={`/blog?page=${currentPage + 1}`} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLast href={`/blog?page=${totalPages}`} />
                        </PaginationItem>
                    </>
                )}
            </PaginationContent>
        </Pagination>
    );
}

export default async function BlogPage({ searchParams }: { searchParams: { page?: string }}) {
    const currentPage = parseInt(searchParams.page || '1', 10);
    const { posts, totalPages } = await getPosts(currentPage);

    if (!posts || posts.length === 0 && currentPage > 1) {
        notFound();
    }
    
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
            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => {
                        const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://picsum.photos/seed/1/600/400';
                        const imageAlt = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;
                        const categories = post._embedded?.['wp:term']?.[0]?.map(cat => cat.name).join(', ') || 'Uncategorized';
                        const postDate = new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });

                        return (
                            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <div className="relative h-56 w-full">
                                        <Image
                                            src={imageUrl}
                                            alt={imageAlt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </Link>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold font-headline mb-3">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    </h2>
                                    <div className="flex flex-col text-sm text-muted-foreground mb-4 space-y-2">
                                        <div className="flex items-start gap-2">
                                            <Calendar className="h-4 w-4 mt-1 flex-shrink-0" />
                                            <span>{postDate}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Folder className="h-4 w-4 mt-1 flex-shrink-0" />
                                            <span>{categories}</span>
                                        </div>
                                    </div>
                                    <div className="text-muted-foreground flex-grow line-clamp-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            ) : (
                <div className="text-center text-muted-foreground">
                    <p>No blog posts found.</p>
                </div>
            )}
            
            {totalPages > 1 && (
                <div className="mt-16">
                    {renderPagination(currentPage, totalPages)}
                </div>
            )}
        </div>
      </section>
    </div>
  );
}
