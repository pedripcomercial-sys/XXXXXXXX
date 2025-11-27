import SlideWave from "../SlideWave";
import BackgroundElements from "../BackgroundElements";

const SlideContact = () => {
  return (
    <div className="slide-gradient relative min-h-screen flex items-center justify-center px-6 py-20">
      <BackgroundElements />
      <div className="max-w-xl w-full relative z-10">
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-stemp-red/20">
          <h2 className="text-3xl md:text-4xl font-black text-stemp-red mb-6">
            COMO CONTRATAR?
          </h2>
          <p className="text-base mb-6 text-muted-foreground md:text-base">
            Para nos <span className="text-stemp-red font-semibold">contratar</span>, basta enviar um pedido de orçamento via Direct ou e-mail.
          </p>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 text-stemp-red font-bold text-xl md:text-2xl hover:text-stemp-red-light transition-colors" 
            href="https://www.instagram.com/stmp.ent/"
          >
            stempentertainment@gmail.com
          </a>
          <p className="text-muted-foreground text-sm md:text-base mt-6">
            Após o envio, <span className="text-stemp-red font-semibold">entraremos</span> em contato tirando todas as dúvidas.
          </p>
        </div>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideContact;