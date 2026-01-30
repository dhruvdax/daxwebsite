import { CASE_STUDIES } from '@/lib/content';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import CaseStudySlugClientPage from '@/components/case-study-slug-client-page';

// 1. Update PageProps to expect a Promise for params
type PageProps = {
  params: Promise<{ slug: string }>;
};

// 2. Update generateMetadata to be async and await params
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const study = CASE_STUDIES.find((cs) => cs.slug === params.slug);

  if (!study) {
    return buildMetadata({
        title: 'Case Study Not Found',
        description: 'The case study you are looking for does not exist.',
    });
  }

  return buildMetadata({
    title: `${study.title} | Case Study`,
    description: study.summary,
    canonicalPath: `/case-studies/${study.slug}`,
    ogType: 'article',
  });
}

// 3. Update CaseStudyPage to be async and await params
export default async function CaseStudyPage(props: PageProps) {
    const params = await props.params;
    
    // We pass the unwrapped slug to your Client Component
    return <CaseStudySlugClientPage slug={params.slug} />;
}