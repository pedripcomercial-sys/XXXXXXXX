import SlideWave from "../SlideWave";

const SlideMission = () => {
  return (
    <div className="slide-gradient relative h-full flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-left">
        <h3 className="text-xl md:text-2xl font-medium italic text-primary-foreground/80 mb-3">
          Nossa Missão
        </h3>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight mb-6">
          Conectar música, visão e estratégia para transformar projetos em carreira.
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/70 italic">
          A Stemp é onde a arte encontra direção.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideMission;
