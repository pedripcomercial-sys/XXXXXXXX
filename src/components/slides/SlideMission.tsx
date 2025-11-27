import SlideWave from "../SlideWave";
import BackgroundElements from "../BackgroundElements";

const SlideMission = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex items-center justify-center px-6 py-20">
      <BackgroundElements />
      <div className="max-w-3xl w-full text-left relative z-10">
        <h3 className="text-2xl md:text-3xl font-medium italic text-stemp-red/70 mb-4">
          Nossa Missão
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-8">
          Conectar música, visão e estratégia para transformar projetos em <span className="text-stemp-red">carreira</span>.
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/60 italic">
          A <span className="text-stemp-red">𝐒𝐓𝐄𝐌𝐏 <span className="font-light tracking-wider text-primary-foreground/50">Entertainment</span></span> é onde a arte encontra direção.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideMission;
