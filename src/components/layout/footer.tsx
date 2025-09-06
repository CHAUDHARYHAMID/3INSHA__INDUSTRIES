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
    { Icon: Twitter, href: '#', className: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white" },
    { Icon: Facebook, href: '#', className: "bg-[#1877F2] hover:bg-[#1877F2]/90 text-white" },
    { Icon: Linkedin, href: '#', className: "bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white" },
    { Icon: Instagram, href: '#', className: "bg-[#E4405F] hover:bg-[#E4405F]/90 text-white" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Map */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider text-white">Our Location</h4>
            <div className="rounded-lg overflow-hidden h-[250px] bg-muted shadow-sm">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.830588632111!2d72.88023877519999!3d19.07125398213233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ed59bcafe7%3A0xf033877a9035a5be!2sINSHA%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1757142808692!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Insha Industries"
                ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-3">
            <li className="flex items-start">
                <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-white text-sm">Gala No. 10, Lakdewali Masjid Lane, Andheri - Kurla Rd, opp. M. K. Brothers Industrial Estate, Shivaji Nagar, Saki Naka, Mumbai, Maharashtra 400072</span>
            </li>
            <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-accent" />
                <span className="text-white">+91 9820 40 9988</span>
            </li>
            <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-accent" />
                <span className="text-white">info@inshaindustries.com</span>
            </li>
             <li className="flex space-x-3 pt-2">
              {socialLinks.map(({ Icon, href, className }, index) => (
                <Link key={index} href={href} passHref>
                  <Button variant="outline" size="icon" className={className}>
                    <Icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white transition-colors hover:text-accent">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <div className="border-t border-white/10 bg-primary/90">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-white/60 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} Insha Industries. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
