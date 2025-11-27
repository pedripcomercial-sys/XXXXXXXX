import SlideWave from "../SlideWave";

const SlideHero = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-primary-foreground/70 text-lg md:text-xl tracking-widest mb-8 animate-fade-in">
        O QUE É A
      </p>
      <h1>
        <span className="text-5xl md:text-7xl lg:text-8xl font-black italic text-primary-foreground tracking-tight">
          STEMP
        </span>
        <span className="block text-xl md:text-2xl lg:text-3xl font-light tracking-[0.5em] text-primary-foreground/90 mt-2">
          ENTERTAINMENT
        </span>
      </h1>
      <SlideWave />
    </div>
  );
};

export default SlideHero;
