import SlideWave from "../SlideWave";

const SlideHero = () => {
  return (
    <div className="slide-gradient relative h-full flex flex-col items-center justify-center text-center px-6">
      <p className="text-primary-foreground/70 text-base md:text-lg tracking-widest mb-6 animate-fade-in">
        O QUE É A
      </p>
      <h1>
        <span className="text-4xl md:text-6xl lg:text-7xl font-black italic text-primary-foreground tracking-tight">
          STEMP
        </span>
        <span className="block text-lg md:text-xl lg:text-2xl font-light tracking-[0.5em] text-primary-foreground/90 mt-2">
          ENTERTAINMENT
        </span>
      </h1>
      <SlideWave />
    </div>
  );
};

export default SlideHero;
