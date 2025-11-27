const HistorySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-primary-foreground mb-8 animate-fade-in-up opacity-0">
          COMO SURGIU?
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6 animate-fade-in opacity-0 animation-delay-200">
          A <strong>Stemp</strong> surgiu em <strong>2024</strong>, fundada pelo artista e compositor{" "}
          <strong>Pedrip</strong>.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in opacity-0 animation-delay-300">
          Com o propósito de <strong>profissionalizar o caminho</strong> de quem cria
          música e dar <strong>estrutura</strong> para artistas independentes.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
