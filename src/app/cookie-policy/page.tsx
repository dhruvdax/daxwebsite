
import Link from 'next/link';
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Cookie Policy | DAX Software Solutions",
  description: "Learn how DAX Software Solutions uses cookies and similar technologies on our website to improve user experience, for analytics, and marketing.",
  canonicalPath: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Cookie Policy
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Last Updated: December 5, 2023
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-headline mb-4">1. Introduction</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Welcome to Dax Software Solutions, Inc. ("we," "us," or "our"). This Cookie Policy is designed to help you understand how we use cookies and similar technologies on our website at <Link href="https://daxsws.com" className="text-primary hover:underline">https://daxsws.com</Link> ("Website"). We want to build trust with our users, and this policy explains why and how we use these technologies and outlines your rights in controlling their use.
            </p>

            <h2 className="text-3xl font-bold font-headline mb-4">2. What are Cookies?</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Cookies are small text files stored on your computer or mobile device when you visit a website. They assist the website in recognizing your device and remembering information about your visit, such as your preferences and settings.
            </p>

            <h2 className="text-3xl font-bold font-headline mb-4">3. How We Use Cookies</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                We may employ cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                    <h4 className="text-xl font-bold font-headline mb-2 text-foreground dark:text-white">Authentication:</h4>
                    <p className="mb-0 text-gray-700 dark:text-gray-300">Our cookies can be utilized to identify and authenticate users during their visits to our website.</p>
                </li>
                <li>
                    <h4 className="text-xl font-bold font-headline mb-2 text-foreground dark:text-white">Preferences:</h4>
                    <p className="mb-0 text-gray-700 dark:text-gray-300">Cookies play a role in enhancing user experience by remembering your preferences and settings, including language preferences.</p>
                </li>
                <li>
                    <h4 className="text-xl font-bold font-headline mb-2 text-foreground dark:text-white">Analytics:</h4>
                    <p className="mb-0 text-gray-700 dark:text-gray-300">The use of cookies aids in gathering information about how visitors navigate our website, contributing to improved performance and an enhanced user experience.</p>
                </li>
                <li>
                    <h4 className="text-xl font-bold font-headline mb-2 text-foreground dark:text-white">Marketing:</h4>
                    <p className="mb-0 text-gray-700 dark:text-gray-300">We may use cookies to deliver personalized content and targeted advertisements, tailoring our approach to align with user preferences.</p>
                </li>
            </ul>

            <h2 className="text-3xl font-bold font-headline mb-4">4. Your Choices</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                You have control over cookies. You can delete existing cookies on your computer and set most browsers to prevent new ones from being placed. Keep in mind that adjusting these settings may require you to manually update preferences on our site, and some services may not work if cookies are disabled.
            </p>

            <h2 className="text-3xl font-bold font-headline mb-4">5. Changes to this Cookie Policy</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                We may update our Cookie Policy periodically. Any changes will be posted on this page, so please check back regularly for updates.
            </p>

            <h2 className="text-3xl font-bold font-headline mb-4">6. Contact Us</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you have questions about our Cookie Policy, reach out to us at <a href="mailto:contact@daxsws.com" className="text-primary hover:underline">contact@daxsws.com</a>.
            </p>
        </div>
      </section>
    </div>
  );
}
