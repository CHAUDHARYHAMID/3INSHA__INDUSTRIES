
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ContactForm } from '../contact-form';
import ProductDropdown from '../product-dropdown';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/#about', label: 'ABOUT US' },
    { href: '/#products', label: 'PRODUCTS', isDropdown: true },
    { href: '#e-catalogue', label: 'E-CATELOGUE' },
    { href: '/#contact', label: 'CONTACT US' },
  ];

  const EnquireNowButton = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90">
          ENQUIRE NOW
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enquire Now</DialogTitle>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background transition-shadow duration-300',
        scrolled ? 'shadow-md' : ''
      )}
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex h-auto min-h-[1rem] items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-base md:ml-12">
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
        <div className="mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8 ml-10">
          <div className="flex items-center gap-x-12">
            <Link href="/" className="flex-shrink-0 p-2">
               <Image src="https://i.postimg.cc/WzHVzDwK/Whats-App-Image-2025-09-05-at-18-39-09-fd785157-Photoroom.png" alt="Insha Industries Logo" width={370} height={82} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center md:flex justify-end gap-x-4 lg:gap-x-6">
              {navLinks.map((link) => (
                link.isDropdown ? (
                    <ProductDropdown key={link.href} />
                ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative flex items-center text-base font-semibold text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
                )
              ))}
              <Image src="https://i.postimg.cc/VkGXyk5v/Header-image-ISO.png" alt="ISO 9001 Certified" width={90} height={45} className="hidden lg:block" />
              <EnquireNowButton />
            </nav>
          </div>

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
                     <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Image src="https://i.postimg.cc/WzHVzDwK/Whats-App-Image-2025-09-05-at-18-39-09-fd785157-Photoroom.png" alt="Insha Industries Logo" width={230} height={62} />
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
                         link.isDropdown ? (
                            <ProductDropdown key={link.href} isMobile={true} />
                        ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between rounded-md px-4 py-2 text-xl font-medium text-foreground/80 transition-colors hover:bg-accent/10 hover:text-primary"
                        >
                          {link.label}
                        </Link>
                        )
                      ))}
                      <div className="flex justify-center">
                        <Image src="https://i.postimg.cc/VkGXyk5v/Header-image-ISO.png" alt="ISO 9001 Certified" width={90} height={45} />
                      </div>
                    </div>
                     <div className="flex flex-col items-center gap-4 py-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                              ENQUIRE NOW
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Enquire Now</DialogTitle>
                            </DialogHeader>
                            <ContactForm />
                          </DialogContent>
                        </Dialog>
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
