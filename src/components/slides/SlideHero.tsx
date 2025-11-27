import SlideWave from "../SlideWave";
import BackgroundElements from "../BackgroundElements";

const SlideHero = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <BackgroundElements />
      <p className="text-primary-foreground/60 text-lg md:text-xl tracking-widest mb-8 animate-fade-in relative z-10">
        O QUE É A
      </p>
      <h1 className="relative z-10">
        <span className="text-5xl md:text-7xl lg:text-8xl font-black italic text-stemp-red tracking-tight animate-glow">
          𝐒𝐓𝐄𝐌𝐏
        </span>
        <span className="block text-xl md:text-2xl lg:text-3xl font-light tracking-[0.5em] text-primary-foreground/80 mt-2">
          ENTERTAINMENT
        </span>
      </h1>
      <SlideWave />
    </div>
  );
};

export default SlideHero;
