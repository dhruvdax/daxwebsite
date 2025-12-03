
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Menu } from 'lucide-react';
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
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <DaxLogo className="h-[25px] sm:h-[32.5px] md:h-[50px]" />
            </Link>
            <div className="lg:hidden flex items-start gap-2">
                <Image src="/home/microsoft-badge.svg" alt="Microsoft Solutions Partner" width={70} height={8} className="h-auto w-[70px] sm:w-[91px] md:hidden" />
                <Image src="/home/microsoft-badge-2.svg" alt="Microsoft Solutions Partner" width={70} height={8} className="h-auto w-[70px] sm:w-[91px] md:hidden" />
            </div>
          </div>
          <div className="h-8 border-l border-gray-300 hidden lg:block"></div>
          <div className="hidden md:flex items-start gap-2">
            <Image src="/home/microsoft-badge.svg" alt="Microsoft Solutions Partner" width={140} height={16} />
            <Image src="/home/microsoft-badge-2.svg" alt="Microsoft Solutions Partner" width={140} height={16} />
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
                <Link href="/case-studies" className={cn(buttonVariants({ size: 'sm', variant: 'primary-outline' }))}>CASE STUDIES<ArrowRight /></Link>
                <Link href="/empathetic-erp" className={cn(buttonVariants({ size: 'sm', variant: 'primary-outline' }))}>EMPATHETIC ERP<ArrowRight /></Link>
            </div>
            <nav className="flex items-center gap-4 text-sm font-medium">
                {NAV_LINKS.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                    'transition-colors hover:text-primary capitalize',
                    pathname === link.href ? 'text-primary' : 'text-foreground/80'
                    )}
                >
                    {link.label}
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
                <SheetContent side="right">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between pb-2">
                            <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                                <DaxLogo className="h-8" />
                            </Link>
                        </div>
                        <nav className="flex flex-col gap-4 mt-8">
                            {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                'text-lg font-medium transition-colors hover:text-primary capitalize',
                                pathname === link.href ? 'text-primary' : 'text-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                            ))}
                        </nav>
                         <div className="mt-auto pt-4 flex flex-col gap-2">
                             <Button asChild className="w-full" variant="primary-outline">
                                <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)}>CASE STUDIES<ArrowRight /></Link>
                            </Button>
                            <Button asChild className="w-full" variant="primary-outline">
                                <Link href="/empathetic-erp" onClick={() => setMobileMenuOpen(false)}>EMPATHETIC ERP<ArrowRight /></Link>
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
