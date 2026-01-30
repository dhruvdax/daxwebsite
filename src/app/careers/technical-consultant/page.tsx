
import CareerDetailPageClient from '@/components/career-detail-page-client';
import { OPENINGS } from '@/lib/content';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const job = OPENINGS.find(o => o.slug === 'technical-consultant');

export function generateMetadata(): Metadata {
    if (!job) {
        return buildMetadata({
            title: 'Job Not Found',
            description: 'The job you are looking for does not exist.',
        });
    }

    return buildMetadata({
        title: `${job.title} | Careers at DAX`,
        description: job.description,
        canonicalPath: `/careers/${job.slug}`,
    });
}

export default function CareerDetailPage() {
    if (!job) {
        notFound();
    }
    return <CareerDetailPageClient job={job} />;
}
