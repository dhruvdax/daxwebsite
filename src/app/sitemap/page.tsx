
import Link from 'next/link';
import { NAV_LINKS, RESOURCE_CENTER_LINKS, CASE_STUDIES } from '@/lib/content';
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Sitemap | DAX Software Solutions",
  description: "Navigate our website with the sitemap. Find links to all our main pages, services, case studies, and resources.",
  canonicalPath: "/sitemap",
});


const otherMainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact Us' },
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Sitemap
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A complete overview of our website's structure and pages.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-headline border-b-2 border-primary pb-2">Main Pages</h2>
          <ul className="space-y-2">
            {[...otherMainLinks, ...NAV_LINKS].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors capitalize">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold font-headline border-b-2 border-primary pb-2">Resource Center</h2>
          <ul className="space-y-2">
            {RESOURCE_CENTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-bold font-headline border-b-2 border-primary pb-2">Case Studies</h2>
          <ul className="space-y-2">
            <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                    All Case Studies
                </Link>
            </li>
            {CASE_STUDIES.map((study) => (
              <li key={study.slug}>
                <Link href={`/case-studies/${study.slug}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {study.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
