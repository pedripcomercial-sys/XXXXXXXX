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
    <div className="slide-gradient relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full">
        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black italic text-primary mb-8">
            O QUE FAZEMOS
          </h2>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="border-b border-border/50 pb-5 last:border-0 last:pb-0">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
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
