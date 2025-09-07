"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT US' },
    { href: '#products', label: 'PRODUCTS', icon: <ChevronDown className="h-4 w-4" /> },
    { href: '#e-catalogue', label: 'E-CATELOGUE' },
    { href: '#contact', label: 'CONTACT US' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-auto min-h-[3rem] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <span>+91 9820409988</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <span>info@inshaindustries.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#home" className="flex-shrink-0">
             <Image src="https://i.postimg.cc/sgXrrChv/Whats-App-Image-2025-09-05-at-18-39-09-fd785157.jpg" alt="Insha Industries Logo" width={160} height={45} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-4 md:flex lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex items-center text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
                {link.icon}
              </Link>
            ))}
            <Image src="https://i.postimg.cc/xj7Sv4Jm/logo-iso-9001-png.png" alt="ISO 9001 Certified" width={100} height={50} className="hidden lg:block" />
             <Button asChild className="rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">ENQUIRE NOW</Link>
              </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background p-0">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b p-4">
                     <Link href="#home" onClick={() => setMobileMenuOpen(false)}>
                        <Image src="https://i.postimg.cc/sgXrrChv/Whats-App-Image-2025-09-05-at-18-39-09-fd785157.jpg" alt="Insha Industries Logo" width={160} height={40} />
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-1 flex-col justify-between p-4">
                    <div className="space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between rounded-md px-4 py-2 text-lg font-medium text-foreground/80 transition-colors hover:bg-accent/10 hover:text-primary"
                        >
                          {link.label}
                          {link.icon}
                        </Link>
                      ))}
                      <div className="flex justify-center">
                        <Image src="https://i.postimg.cc/xj7Sv4Jm/logo-iso-9001-png.png" alt="ISO 9001 Certified" width={100} height={50} />
                      </div>
                    </div>
                     <div className="flex flex-col items-center gap-4 py-4">
                        <Button asChild className="w-full rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                           <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>ENQUIRE NOW</Link>
                         </Button>
                     </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
