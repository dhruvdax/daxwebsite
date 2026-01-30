
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User, Folder } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from "../../seo";

interface Post {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    date: string;
    _embedded: {
        author: { name: string }[];
        'wp:featuredmedia'?: { source_url: string, alt_text: string }[];
        'wp:term'?: { name: string }[][];
    };
}

type PageProps = {
  params: { slug: string };
};

async function getPost(slug: string): Promise<Post | null> {
    try {
        const res = await fetch(`https://blog.daxsws.com/wp-json/wp/v2/posts?slug=${slug}&_embed=1`, {
            next: { revalidate: 600 }
        });

        if (!res.ok) {
            console.error("Failed to fetch post:", res.statusText);
            return null;
        }
        
        const posts: Post[] = await res.json();
        if (posts.length === 0) {
            return null;
        }

        return posts[0];
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return buildMetadata({
        title: 'Post Not Found',
        description: 'The post you are looking for does not exist.',
        canonicalPath: `/blog/${params.slug}`
    });
  }
  
  // Strip HTML tags from excerpt for a clean description
  const description = post.excerpt.rendered.replace(/<[^>]*>?/gm, '');

  return buildMetadata({
    title: post.title.rendered,
    description: description,
    canonicalPath: `/blog/${post.slug}`,
    ogType: 'article'
  });
}


export default async function BlogPostPage({ params }: PageProps) {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const imageAlt = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;
    const categories = post._embedded?.['wp:term']?.[0]?.map(cat => cat.name).join(', ') || 'Uncategorized';
    const authorName = post._embedded.author[0]?.name || 'Anonymous';
    const postDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

  return (
    <div className="bg-background">
        <main className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <article>
                    {imageUrl && (
                        <div className="relative h-72 md:h-96 w-full mb-8">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                fill
                                priority
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    )}

                    <header className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{authorName}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{postDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Folder className="h-4 w-4" />
                                <span>{categories}</span>
                            </div>
                        </div>
                    </header>

                    <div 
                        className="prose dark:prose-invert max-w-none prose-lg prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80" 
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
                    />
                </article>
            </div>
        </main>
    </div>
  );
}
