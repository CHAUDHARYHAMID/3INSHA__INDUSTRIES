import { BadgeCheck, Wrench, Timer, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-accent" />,
      title: 'Quality Assurance',
      description: 'We adhere to strict quality control measures to ensure every product is flawless.',
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: 'Custom Solutions',
      description: 'Our team works with you to create custom-molded products that fit your exact needs.',
    },
    {
      icon: <Timer className="h-8 w-8 text-accent" />,
      title: 'Timely Delivery',
      description: 'Efficient production schedules and logistics mean your orders arrive on time.',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Customer Satisfaction',
      description: 'We prioritize our clients, offering dedicated support and exceptional service.',
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Why Choose Insha Industries?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Our commitment to excellence sets us apart. We blend advanced technology with industry expertise to deliver unparalleled value to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
