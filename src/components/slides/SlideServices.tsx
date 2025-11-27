import SlideWave from "../SlideWave";

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

const SlideServices = () => {
  return (
    <div className="slide-gradient relative h-full flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-black italic text-primary mb-6">
            O QUE FAZEMOS
          </h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                <h3 className="text-base md:text-lg font-bold text-primary mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  — {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideServices;
