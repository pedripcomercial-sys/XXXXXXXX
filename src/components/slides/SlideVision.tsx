import SlideWave from "../SlideWave";
import BackgroundElements from "../BackgroundElements";

const SlideVision = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex items-center justify-center px-6 py-20">
      <BackgroundElements />
      <div className="max-w-3xl w-full text-left relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-stemp-red mb-8">
          NOSSA VISÃO
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/85 leading-relaxed mb-6">
          A <strong className="text-stemp-red">𝐒𝐓𝐄𝐌𝐏 𝐄𝐧𝐭𝐞𝐫𝐭𝐚𝐢𝐧𝐦𝐞𝐧𝐭</strong> existe para firmar a música do artista no mundo,
          tornando sua obra <strong className="text-stemp-red-light">duradoura</strong>, <strong className="text-stemp-red-light">marcante</strong> e <strong className="text-stemp-red-light">atemporal</strong>.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/60 italic">
          Não apenas lançar, mas <em className="text-stemp-red/80">estabelecer legado</em>.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideVision;
