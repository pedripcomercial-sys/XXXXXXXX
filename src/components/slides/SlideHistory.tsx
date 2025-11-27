import SlideWave from "../SlideWave";

const SlideHistory = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-primary-foreground mb-8">
          COMO SURGIU?
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6">
          A <strong>Stemp</strong> surgiu em <strong>2024</strong>, fundada pelo artista e compositor{" "}
          <strong>Pedrip</strong>.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Com o propósito de <strong>profissionalizar o caminho</strong> de quem cria
          música e dar <strong>estrutura</strong> para artistas independentes.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideHistory;
