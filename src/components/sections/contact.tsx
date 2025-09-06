import { ContactForm } from '../contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
             <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-primary">Our Address</h4>
                    <p className="text-muted-foreground">INSHA INDUSTRIES, 9, Kherani Rd, Yadav Nagar, Chandivali, Sakinaka, Mumbai, Maharashtra 400072, India</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-primary">Phone Number</h4>
                    <p className="text-muted-foreground">+91 9820 40 9988</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-primary">Email Address</h4>
                    <p className="text-muted-foreground">info@inshaindustries.com</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="rounded-lg overflow-hidden h-64 md:h-80 lg:h-full bg-muted shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.7405189595265!2d72.88023877497784!3d19.094868382113603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ed59bcafe7%3A0xf033877a9035a5be!2sINSHA%20INDUSTRIES!5e1!3m2!1sen!2sin!4v1757142808692!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location for Insha Industries"
                ></iframe>
            </div>
          </div>
          <div className="rounded-lg bg-card p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
