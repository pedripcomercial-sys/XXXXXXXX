import SlideWave from "../SlideWave";

const SlideVision = () => {
  return (
    <div className="slide-gradient relative h-full flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black italic text-primary-foreground mb-6">
          NOSSA VISÃO
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-4">
          A <strong>Stemp</strong> existe para firmar a música do artista no mundo,
          tornando sua obra <strong>duradoura</strong>, <strong>marcante</strong> e <strong>atemporal</strong>.
        </p>
        <p className="text-base md:text-lg text-primary-foreground/70 italic">
          Não apenas lançar, mas <em>estabelecer legado</em>.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideVision;
