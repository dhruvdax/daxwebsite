
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Thank You | DAX Software Solutions",
  description: "Thank you for contacting us. We have received your message and will be in touch shortly.",
  canonicalPath: "/thank-you",
  robots: {
    index: false,
    follow: false,
  }
});

export default function ThankYouPage() {
    const thankYouImage = PlaceHolderImages.find(img => img.id === 'thank-you');

    return (
        <div className="bg-accent text-accent-foreground flex-grow flex flex-col items-center justify-center text-center p-4 py-24">
            <div className="max-w-md w-full">
                {thankYouImage ? (
                    <div className="mb-8">
                        <Image
                            src={thankYouImage.imageUrl}
                            alt={thankYouImage.description}
                            width={350}
                            height={250}
                            className="mx-auto"
                            data-ai-hint={thankYouImage.imageHint}
                        />
                    </div>
                ) : (
                    <div className="h-[250px] flex items-center justify-center"></div>
                )}
                <h1 className="text-3xl font-bold font-headline text-white">Thank you for contacting us</h1>
                <p className="mt-4 text-lg text-gray-300">
                    We have received your message. One of our team members will reply to you soon.
                </p>
                <Button asChild size="lg" variant="primary-outline" className="mt-8">
                    <Link href="/">GO BACK TO HOMEPAGE</Link>
                </Button>
            </div>
        </div>
    );
}
