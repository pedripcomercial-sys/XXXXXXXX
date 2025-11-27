import SlideWave from "../SlideWave";

const SlideContact = () => {
  return (
    <div className="slide-gradient relative h-full flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-4">
            COMO CONTRATAR?
          </h2>
          <p className="text-sm md:text-base mb-4 text-muted-foreground">
            Para nos <span className="text-primary font-semibold">contratar</span>, basta enviar um pedido de orçamento via Direct ou e-mail.
          </p>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-primary font-bold text-lg md:text-xl hover:opacity-80 transition-opacity break-all" 
            href="mailto:stempentertainment@gmail.com"
          >
            stempentertainment@gmail.com
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Após o envio, <span className="text-primary font-semibold">entraremos</span> em contato tirando todas as dúvidas.
          </p>
        </div>
      </div>
      <SlideWave />
    </div>
  );
};

export default SlideContact;