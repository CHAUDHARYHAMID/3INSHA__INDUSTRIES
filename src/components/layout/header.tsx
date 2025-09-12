
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
import images from '@/lib/placeholder-images.json';

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
        <div className="container mx-auto flex h-auto min-h-[1rem] items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-base">
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
        <div className="container mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex-shrink-0">
               <Image src={images.logo.src} alt={images.logo.alt} width={280} height={62} className="h-auto w-72" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center lg:flex justify-end gap-x-4 lg:gap-x-6">
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
              <Image src={images.isoImage.src} alt={images.isoImage.alt} width={90} height={45} className="hidden xl:block" />
              <EnquireNowButton />
            </nav>

          {/* Mobile/Tablet Navigation */}
          <div className="flex items-center lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="h-14 w-14">
                  <Menu className="h-10 w-10" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background p-0">
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b p-4">
                     <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Image src={images.logo.src} alt={images.logo.alt} width={230} height={62} />
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" className="h-14 w-14">
                        <X className="h-10 w-10" />
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
                        <Image src={images.isoImage.src} alt={images.isoImage.alt} width={90} height={45} />
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
