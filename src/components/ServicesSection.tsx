const services = [
  {
    title: "Label Management",
    description: "Estratégia, organização e acompanhamento completo de lançamentos.",
  },
  {
    title: "Publishing",
    description: "Administração, registro e proteção das obras, garantindo que cada música esteja segura e rendendo.",
  },
  {
    title: "A&R",
    description: "Buscamos e desenvolvemos talentos, ajudando cada artista a encontrar sua identidade sonora.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl animate-scale-in opacity-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black italic text-primary mb-10">
            O QUE FAZEMOS
          </h2>
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="border-b border-border/50 pb-6 last:border-0 last:pb-0">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  — {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
