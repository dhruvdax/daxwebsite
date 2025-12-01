import Link from 'next/link';
import { NAV_LINKS } from '@/lib/content';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import DaxLogoWhite from '../icons/dax-logo-white';

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="space-y-4 md:col-span-3">
            <Link href="/" className="flex items-center space-x-2">
              <DaxLogoWhite className="fill-white" />
            </Link>
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
              <h4 className="font-medium font-headline">Subscription Services</h4>
               <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Microsoft 365</Link></li>
                <li><Link href="#" className="hover:text-white">Microsoft Copilot</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-medium font-headline">Dynamics 365 Expertise</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Microsoft Dynamics 365</Link></li>
                <li><Link href="#" className="hover:text-white">Application Managed Services</Link></li>
                <li><Link href="#" className="hover:text-white">Quick-Fix Packages</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium font-headline">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="hover:text-white">{link.label}</Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white">&copy; {new Date().getFullYear()} Dax Software Solutions. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-white">
                <Link href="#" className="hover:opacity-80"><Facebook size={20} /></Link>
                <Link href="#" className="hover:opacity-80"><Twitter size={20} /></Link>
                <Link href="#" className="hover:opacity-80"><Linkedin size={20} /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
