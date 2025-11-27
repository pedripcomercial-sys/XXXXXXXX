import SlideWave from "../SlideWave";

const SlideHistory = () => {
  return (
    <div className="slide-gradient relative h-full flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black italic text-primary-foreground mb-6">
          COMO SURGIU?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-4">
          A <strong>Stemp</strong> surgiu em <strong>2022</strong>, fundada pelo artista e compositor{" "}
          <strong>Pedrip</strong>.
        </p>
        <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed">
          Com o propósito de <strong>profissionalizar o caminho</strong> de quem cria
          música e dar <strong>estrutura</strong> para artistas independentes.
        </p>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideHistory;