import { Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl animate-scale-in opacity-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6">
            COMO CONTRATAR?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            Para nos <span className="text-primary font-semibold">contratar</span>, basta enviar um pedido de orçamento
            ou conversar sobre projetos:
          </p>
          <a
            href="https://facebook.com/stempentertainment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-primary font-bold text-xl md:text-2xl hover:opacity-80 transition-opacity"
          >
            <Facebook className="w-8 h-8" />
            @stempentertainment
          </a>
          <p className="text-muted-foreground text-base md:text-lg mt-8">
            Após o envio, <span className="text-primary font-semibold">entraremos</span> em contato tirando todas as dúvidas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
