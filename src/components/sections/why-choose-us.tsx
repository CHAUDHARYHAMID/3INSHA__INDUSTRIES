import { BadgeCheck, Wrench, Timer, Users, Factory, Globe, Award, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Factory className="h-8 w-8 text-accent" />,
      title: 'Manufacturing Excellence',
      description: 'Our state-of-the-art facilities are equipped with the latest technology, ensuring high-quality, reliable, and efficient products.',
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: 'Trading Expertise',
      description: 'We source and supply a wide range of valves from leading global manufacturers, ensuring timely delivery and competitive pricing.',
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-accent" />,
      title: 'Commitment to Quality',
      description: 'Adhering to ISO 9001:2015 standards, we ensure our products and processes meet the highest quality benchmarks.',
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: 'Commitment to Excellence',
      description: 'We continuously improve our products and services, fostering a culture of innovation to exceed customer expectations.',
    },
     {
      icon: <HeartHandshake className="h-8 w-8 text-accent" />,
      title: 'Customer-Centric Approach',
      description: 'Our customers are at the heart of everything we do, and we provide tailored solutions and dedicated support.',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Customer Satisfaction',
      description: 'Our ultimate goal is the satisfaction and loyalty of our customers, building long-lasting partnerships.',
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
