import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';

const Footer = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { Icon: Twitter, href: '#' },
    { Icon: Facebook, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="#home">
              <Image src="/logo.svg" alt="Insha Industries Logo" width={200} height={50} />
            </Link>
            <p className="text-primary-foreground/80">
              Committed to delivering high-quality industrial valves with precision and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 transition-colors hover:text-accent">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">Gala No. 10, Lakdewali Masjid Lane, Andheri - Kurla Rd, opp. M. K. Brothers Industrial Estate, Shivaji Nagar, Saki Naka, Mumbai, Maharashtra 400072</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">+91 9820 40 9988</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">info@inshaindustries.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <Link key={index} href={href} passHref>
                  <Button variant="outline" size="icon" className="border-primary-foreground/20 bg-transparent text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground hover:border-accent">
                    <Icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 bg-primary/90">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-primary-foreground/60 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} Insha Industries. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;