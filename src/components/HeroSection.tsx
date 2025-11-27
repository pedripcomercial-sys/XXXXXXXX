const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <p className="text-primary-foreground/70 text-lg md:text-xl tracking-widest mb-8 animate-fade-in opacity-0">
        O QUE É A
      </p>
      <h1 className="animate-fade-in-up opacity-0 animation-delay-200">
        <span className="text-5xl md:text-7xl lg:text-8xl font-black italic text-primary-foreground tracking-tight">
          STEMP
        </span>
        <span className="block text-xl md:text-2xl lg:text-3xl font-light tracking-[0.5em] text-primary-foreground/90 mt-2">
          ENTERTAINMENT
        </span>
      </h1>
      <p className="mt-12 text-primary-foreground/80 text-lg md:text-xl max-w-xl animate-fade-in opacity-0 animation-delay-400">
        Onde a arte encontra direção.
      </p>
    </section>
  );
};

export default HeroSection;
