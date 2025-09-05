
const ClientsSection = () => {
  const clients = [
    'Global Corp',
    'Innovate Inc.',
    'Mega Solutions',
    'Apex Industries',
    'Future Systems',
    'United Ventures',
    'Pioneer PLC',
    'Synergy Group',
  ];

  return (
    <section id="clients" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Our Esteemed Clientele
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are proud to partner with a diverse range of leading companies who trust our quality and service.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-center text-lg font-semibold text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
