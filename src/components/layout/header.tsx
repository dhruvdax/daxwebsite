"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS } from '@/lib/content';
import Image from 'next/image';
import DaxLogo from '../icons/dax-logo';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-[108px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <DaxLogo />
          </Link>
          <div className="h-8 border-l border-gray-300 hidden lg:block"></div>
          <div className="hidden lg:flex items-start gap-2">
            <Image src="/home/microsoft-badge.svg" alt="Microsoft Solutions Partner" width={140} height={16} />
            <Image src="/home/microsoft-badge-2.svg" alt="Microsoft Solutions Partner" width={140} height={16} />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-col items-end gap-2">
            <Button asChild size="sm">
                <Link href="/contact">QUICK FIX PACKAGES</Link>
            </Button>
            <nav className="flex items-center gap-4 text-sm font-medium">
                {NAV_LINKS.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                    'transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-foreground/80'
                    )}
                >
                    {link.label.toUpperCase()}
                </Link>
                ))}
            </nav>
        </div>


        {/* Mobile Menu */}
        <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between border-b pb-2">
                             <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                                <DaxLogo />
                            </Link>
                        </div>
                         <div className="flex flex-col items-start gap-2 mt-4">
                            <Image src="/home/microsoft-badge.svg" alt="Microsoft Solutions Partner" width={140} height={16} />
                            <Image src="/home/microsoft-badge-2.svg" alt="Microsoft Solutions Partner" width={140} height={16} />
                        </div>
                        <nav className="flex flex-col gap-4 mt-8">
                            {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                'text-lg font-medium transition-colors hover:text-primary',
                                pathname === link.href ? 'text-primary' : 'text-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                            ))}
                        </nav>
                         <div className="mt-auto pt-4">
                            <Button asChild className="w-full">
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>QUICK FIX PACKAGES</Link>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
