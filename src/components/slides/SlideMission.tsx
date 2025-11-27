import SlideWave from "../SlideWave";

const SlideMission = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-left">
        <h3 className="text-2xl md:text-3xl font-medium italic text-primary-foreground/80 mb-4">
          Nossa Missão
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-8">
          Conectar música, visão e estratégia para transformar projetos em carreira.
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/70 italic">
          A Stemp é onde a arte encontra direção.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideMission;
