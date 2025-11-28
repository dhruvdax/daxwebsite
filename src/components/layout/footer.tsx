import Link from 'next/link';
import { NAV_LINKS } from '@/lib/content';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const DaxLogo = () => (
    <svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.959997 26.1L12.96 0.899998H22.08L10.32 26.1H0.959997Z" fill="#00B5FF"/>
      <path d="M21.84 26.1L33.6 0.899998H42.72L30.96 26.1H21.84Z" fill="#00B5FF"/>
      <path d="M47.04 0.899998L37.44 26.1H46.08L55.92 0.899998H47.04Z" fill="white"/>
      <path d="M54.96 15.42L50.16 26.1H59.04L54.96 15.42Z" fill="white"/>
    </svg>
  );

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="space-y-4 md:col-span-3">
            <Link href="/" className="flex items-center space-x-2">
              <DaxLogo />
            </Link>
            <div className="pl-2">
                <Image src="/ms-logo-footer.png" alt="Microsoft Partner" width={160} height={50} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-9 md:grid-cols-4">
            <div>
              <h4 className="font-medium font-headline">Contact Information</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><p>Dax Software Solutions</p></li>
                <li><p>123 Queensmouth aVe, New York</p></li>
                <li><p>Washington DC, 20037</p></li>
                <li><a href="tel:+18889994444" className="hover:text-white">+1(888) 999 4444</a></li>
                <li><a href="mailto:contact@dax.com" className="hover:text-white">contact@dax.com</a></li>
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
                <li><Link href="#" className="hover:text-white">Performance Tuning</Link></li>
                <li><Link href="#" className="hover:text-white">Dynamics 365 On-Premise Control</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium font-headline">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DAX Software Solutions</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-white"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
