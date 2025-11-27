const Footer = () => {
  return (
    <footer className="py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-2xl md:text-3xl font-black italic text-primary-foreground/90">
            STEMP
          </span>
          <span className="block text-xs tracking-[0.3em] text-primary-foreground/60">
            ENTERTAINMENT
          </span>
        </div>
        <p className="text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Stemp Entertainment. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
