
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Define the shape of a single blog post
interface Post {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  // Add other fields as necessary from your API response
}

type PageProps = {
  params: { slug: string };
};

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `https://blog.daxsws.com/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`,
      { next: { revalidate: 600 } } // Revalidate every 10 minutes
    );

    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] || null; // The endpoint returns an array
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title.rendered,
    // You can add more metadata here, like a description from an excerpt if available
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto py-16">
      <h1
        className="text-4xl font-bold mb-8"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}
