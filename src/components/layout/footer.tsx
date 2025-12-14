
import Link from 'next/link';
import { RESOURCE_CENTER_LINKS } from '@/lib/content';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import DaxLogoWhite from '../icons/dax-logo-white';

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="space-y-4 md:col-span-3">
            <Link href="/" className="flex items-center space-x-2">
              <DaxLogoWhite />
            </Link>
            <div className="flex flex-col items-start gap-8 pt-4">
                <Image src="/home/microsoft-badge.svg" alt="Microsoft Solutions Partner" width={140} height={16} />
                <Image src="/home/microsoft-badge-2.svg" alt="Microsoft Solutions Partner" width={140} height={16} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-9 md:grid-cols-4">
            <div>
              <h4 className="font-medium font-headline">Contact Information</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><p>DAX Software Solutions Inc.</p></li>
                <li><p>6303 Owensmouth Ave, 10th floor</p></li>
                <li><p>Woodland Hills, CA 91367</p></li>
                <li><a href="tel:+1.818.568.6460" className="hover:text-white">+1.818.568.6460</a></li>
                <li><a href="tel:+1.949.351.2404" className="hover:text-white">+1.949.351.2404</a></li>
                <li><a href="mailto:contact@daxsws.com" className="hover:text-white">contact@daxsws.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium font-headline">Quick Links</h4>
               <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
                <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/about-us#core-values" className="hover:text-white">Our Core Values</Link></li>
                <li><Link href="/sitemap" className="hover:text-white">Sitemap</Link></li>
                <li><Link href="https://ess.pockethrms.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Employee Login</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-medium font-headline">Dynamics 365 Expertise</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><Link href="/services/microsoft-dynamics-365" className="hover:text-white">Microsoft Dynamics 365</Link></li>
                <li><Link href="/services/application-managed-services" className="hover:text-white">Application Managed Services</Link></li>
                <li><Link href="/services/performance-tuning" className="hover:text-white">Performance Tuning</Link></li>
                <li><Link href="/services/ax-2012-to-d365-upgrade" className="hover:text-white">AX 2012 to Dynamics 365 Upgrade Services</Link></li>
                <li><Link href="/services/system-optimization" className="hover:text-white">System Optimization</Link></li>
                <li><Link href="/services/continuous-enhancements" className="hover:text-white">Continuous Enhancements</Link></li>
                <li><Link href="/services/microsoft-dynamics-365-business-central" className="hover:text-white">Microsoft Dynamics 365 Business Central</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium font-headline">Resource Center</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {RESOURCE_CENTER_LINKS.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="hover:text-white">{link.label}</Link>
                    </li>
                ))}
              </ul>
              <h4 className="font-medium font-headline mt-6">Subscription Services</h4>
               <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><Link href="/services/microsoft-365" className="hover:text-white">Microsoft 365</Link></li>
                <li><Link href="/services/microsoft-copilot" className="hover:text-white">Microsoft Copilot</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-4 text-white md:flex-row md:px-6">
            <p className="text-xs text-gray-400">&copy; Copyright {new Date().getFullYear()} DAX Software Solutions</p>
            <div className="flex gap-4 items-center text-xs text-gray-400">
                <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link>
                <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            </div>
            <div className="flex space-x-4">
                <Link href="https://www.facebook.com/Daxsws/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Facebook size={20} /></Link>
                <Link href="https://x.com/DaxSoftware" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Twitter size={20} /></Link>
                <Link href="https://www.linkedin.com/company/daxsoftware/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={20} /></Link>
                <Link href="https://www.instagram.com/daxsoftware/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Instagram size={20} /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
