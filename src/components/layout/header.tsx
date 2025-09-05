"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

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
      <div className="bg-[#125D56] text-white">
        <div className="container mx-auto flex h-12 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <span>+91 9820 40 9988</span>
            </div>
            <div className="hidden items-center md:flex">
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
        <div className="container mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#home">
            <Image src="/logo.png" alt="Insha Industries Logo" width={250} height={45} className="h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
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
             <Button asChild className="rounded-full bg-[#125D56] px-6 text-sm font-semibold hover:bg-[#0e4a44]">
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
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b p-4">
                     <Link href="#home">
                        <Image src="/logo.png" alt="Insha Industries Logo" width={180} height={32} />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4 p-4">
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
                     <Button asChild className="w-full rounded-full bg-[#125D56] px-6 text-sm font-semibold hover:bg-[#0e4a44]">
                        <Link href="#contact">ENQUIRE NOW</Link>
                      </Button>
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
