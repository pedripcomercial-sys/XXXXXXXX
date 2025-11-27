import SlideWave from "../SlideWave";

const SlideVision = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-primary-foreground mb-8">
          NOSSA VISÃO
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6">
          A <strong>Stemp</strong> existe para firmar a música do artista no mundo,
          tornando sua obra <strong>duradoura</strong>, <strong>marcante</strong> e <strong>atemporal</strong>.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/70 italic">
          Não apenas lançar, mas <em>estabelecer legado</em>.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideVision;
