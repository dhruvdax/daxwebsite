
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function CaseStudyCTA() {
  return (
    <div className="not-prose mt-16">
      <Card>
        <CardContent className="p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold font-headline text-accent dark:text-white">Want to know more?</h3>
          <p className="mt-2 text-muted-foreground">Discover how DAX helps organizations modernize, stabilize, and scale their ERP with confidence.</p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
