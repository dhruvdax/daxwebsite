
'use client';
import Link from 'next/link';
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Terms of Use | DAX Software Solutions",
  description: "Read the terms of use for the DAX Software Solutions website. Understand the conditions for using our site and its content.",
  canonicalPath: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Terms of Use
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Last Updated: December 2023
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-headline mb-4">Acceptance</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                By accessing and browsing the Dax Software Solutions, Inc. (the “Company”) website or by using and/or downloading any content from same, you agree and accept the Terms of Use as set forth below.
            </p>
            
            <h2 className="text-3xl font-bold font-headline mb-4">Disclaimer</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Information on this website may contain technical inaccuracies or typographical errors. Information may be changed or updated without notice. Dax Software Solutions may also make improvements and/or changes in the services, products and/or the programs described in the information provided in this website at any time without notice.
            </p>
            
            <h2 className="text-3xl font-bold font-headline mb-4">Information</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Dax Software Solutions publishes on the World Wide Web may contain references or cross references to Dax Software Solutions products, programs and services that are not announced or available in your country. Such references do not imply that Dax Software Solutions intends to announce such products, programs or services in your country. Contact Dax Software Solutions for information regarding the products, programs and services that may be available to you.
            </p>
            
            <h2 className="text-3xl font-bold font-headline mb-4">Intellectual Property</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Copyright Dax Software Solutions 2020, All Rights Reserved.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Unless otherwise noted, any person is hereby authorized to view, copy, and print these documents subject to the following conditions:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="mb-2">This document may be used for informational purposes only.</li>
                <li className="mb-2">Any copy of this document or portion thereof must include the copyright notice.</li>
                <li className="mb-2">This information is provided “AS IS” and without warranty of any kind, express, implied, statutory, or otherwise.</li>
                <li className="mb-2">Permission is not granted for resale or commercial distribution of the document, in whole or in part, or by itself or incorporated in another work.</li>
            </ul>
             <p className="mb-4 text-gray-700 dark:text-gray-300">
                This website may contain other proprietary notices and copyright information, the terms of which must be observed and followed.
            </p>

            <h2 className="text-3xl font-bold font-headline mb-4">Third-Party Websites</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Dax Software Solutions makes no representations whatsoever about any other website which you may access through this one. When you access a non- Dax Software Solutions website, please understand that it is independent from Dax Software Solutions, and that Dax Software Solutions has no control over the content on that website. In addition, a link to a non- Dax Software Solutions website does not mean that Dax Software Solutions endorses or accepts any responsibility for the content, or the use, of such website. It is up to you to take precautions to ensure that whatever you select for your use is free of such items as viruses, worms, trojan horses and other items of a destructive nature.
            </p>

            <h2 className="text-3xl font-bold font-headline mb-4">Liability</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                In no event will Dax Software Solutions be liable to any party for any direct, indirect, special or other consequential damages for any use of this website, or on any other hyperlinked website, including, without limitation, any lost profits, business interruption, loss of programs or other data on your information handling system or otherwise, even if we are expressly advised of the possibility of such damages.
            </p>
            
            <h2 className="text-3xl font-bold font-headline mb-4">Modifications of the Terms of Use</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Dax Software Solutions reserves the right to change the Terms of Use under which this website is offered at any time and without notice. You will be automatically bound by these modifications when you use this site and should periodically read the Terms of Use.
            </p>

             <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms, please contact us at <a href="mailto:contact@daxsws.com" className="text-primary hover:underline">contact@daxsws.com</a>
            </p>
        </div>
      </section>
    </div>
  );
}
