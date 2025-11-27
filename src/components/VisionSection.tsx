const VisionSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-primary-foreground mb-8 animate-fade-in-up opacity-0">
          NOSSA VISÃO
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6 animate-fade-in opacity-0 animation-delay-200">
          A <strong>Stemp</strong> existe para firmar a música do artista no mundo,
          tornando sua obra <strong>duradoura</strong>, <strong>marcante</strong> e <strong>atemporal</strong>.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/70 italic animate-fade-in opacity-0 animation-delay-300">
          Não apenas lançar, mas <em>estabelecer legado</em>.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
