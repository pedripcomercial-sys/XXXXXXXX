import SlideWave from "../SlideWave";
import BackgroundElements from "../BackgroundElements";

const SlideHistory = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex items-center justify-center px-6 py-20">
      <BackgroundElements />
      <div className="max-w-3xl w-full text-left relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-stemp-red mb-8">
          COMO SURGIU?
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/85 leading-relaxed mb-6">
          A <strong className="text-stemp-red">𝐒𝐓𝐄𝐌𝐏 𝐄𝐧𝐭𝐞𝐫𝐭𝐚𝐢𝐧𝐦𝐞𝐧𝐭</strong> surgiu em <strong className="text-stemp-red-light">2022</strong>, fundada pelo artista e compositor{" "}
          <strong className="text-stemp-red-light">Pedrip</strong>.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed">
          Com o propósito de <strong className="text-stemp-red/90">profissionalizar o caminho</strong> de quem cria
          música e dar <strong className="text-stemp-red/90">estrutura</strong> para artistas independentes.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideHistory;