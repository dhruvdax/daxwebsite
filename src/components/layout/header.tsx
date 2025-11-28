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

const DaxLogo = () => (
  <svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.959997 26.1L12.96 0.899998H22.08L10.32 26.1H0.959997Z" fill="#00B5FF"/>
    <path d="M21.84 26.1L33.6 0.899998H42.72L30.96 26.1H21.84Z" fill="#00B5FF"/>
    <path d="M47.04 0.899998L37.44 26.1H46.08L55.92 0.899998H47.04Z" fill="hsl(var(--foreground))"/>
    <path d="M54.96 15.42L50.16 26.1H59.04L54.96 15.42Z" fill="hsl(var(--foreground))"/>
  </svg>
);


export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <DaxLogo />
          </Link>
          <div className="h-8 border-l border-gray-300 hidden md:block"></div>
          <div className="hidden md:flex items-center gap-2">
            <Image src="/ms-logo.png" alt="Microsoft Solutions Partner" width={140} height={16} />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
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
            <Button asChild size="sm">
                <Link href="/contact">QUICK FIX PACKAGES</Link>
            </Button>
        </div>


        {/* Mobile Menu */}
        <div className="md:hidden">
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
