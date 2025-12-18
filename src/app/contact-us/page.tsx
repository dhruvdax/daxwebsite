import ContactPageClient from '@/components/contact-page-client';
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Contact Us | DAX Software Solutions",
  description: "Get in touch with DAX, your empathetic ERP partner. Contact us for a consultation on Microsoft Dynamics 365 and other business solutions.",
  canonicalPath: "/contact-us",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
