import { Download } from "lucide-react";
import { Button } from "./ui/button";
import pptxgen from "pptxgenjs";

const ExportPPTXButton = () => {
  const exportToPPTX = async () => {
    const pptx = new pptxgen();
    
    // Set presentation properties
    pptx.author = "Stemp Entertainment";
    pptx.title = "Stemp Entertainment";
    pptx.subject = "Apresentação Institucional";
    
    // Define colors
    const primaryRed = "E02424";
    const darkRed = "8B1414";
    const white = "FFFFFF";

    // Slide 1 - Hero
    const slide1 = pptx.addSlide();
    slide1.background = { 
      path: undefined,
      color: primaryRed 
    };
    slide1.addText("O QUE É A", {
      x: 0.5,
      y: 2,
      w: "90%",
      fontSize: 18,
      color: "FFFFFF99",
      align: "center",
      fontFace: "Arial"
    });
    slide1.addText("STEMP", {
      x: 0.5,
      y: 2.5,
      w: "90%",
      fontSize: 72,
      bold: true,
      italic: true,
      color: white,
      align: "center",
      fontFace: "Arial"
    });
    slide1.addText("ENTERTAINMENT", {
      x: 0.5,
      y: 3.8,
      w: "90%",
      fontSize: 24,
      color: "FFFFFFE6",
      align: "center",
      fontFace: "Arial",
      charSpacing: 10
    });

    // Slide 2 - Services
    const slide2 = pptx.addSlide();
    slide2.background = { color: primaryRed };
    slide2.addText("O QUE FAZEMOS", {
      x: 0.5,
      y: 0.8,
      w: "90%",
      fontSize: 36,
      bold: true,
      italic: true,
      color: darkRed,
      fontFace: "Arial"
    });
    
    const services = [
      { title: "Label Management", desc: "Estratégia, organização e acompanhamento completo de lançamentos." },
      { title: "Publishing", desc: "Administração, registro e proteção das obras, garantindo que cada música esteja segura e rendendo." },
      { title: "A&R", desc: "Buscamos e desenvolvemos talentos, ajudando cada artista a encontrar sua identidade sonora." }
    ];
    
    services.forEach((service, index) => {
      const yPos = 1.8 + (index * 1.4);
      slide2.addText(service.title, {
        x: 0.5,
        y: yPos,
        w: "90%",
        fontSize: 20,
        bold: true,
        color: darkRed,
        fontFace: "Arial"
      });
      slide2.addText("— " + service.desc, {
        x: 0.5,
        y: yPos + 0.4,
        w: "90%",
        fontSize: 14,
        color: "666666",
        fontFace: "Arial"
      });
    });

    // Slide 3 - Vision
    const slide3 = pptx.addSlide();
    slide3.background = { color: primaryRed };
    slide3.addText("NOSSA VISÃO", {
      x: 0.5,
      y: 1.5,
      w: "90%",
      fontSize: 48,
      bold: true,
      italic: true,
      color: white,
      fontFace: "Arial"
    });
    slide3.addText("A Stemp existe para firmar a música do artista no mundo, tornando sua obra duradoura, marcante e atemporal.", {
      x: 0.5,
      y: 2.8,
      w: "90%",
      fontSize: 22,
      color: "FFFFFFE6",
      fontFace: "Arial"
    });
    slide3.addText("Não apenas lançar, mas estabelecer legado.", {
      x: 0.5,
      y: 4,
      w: "90%",
      fontSize: 18,
      italic: true,
      color: "FFFFFFB3",
      fontFace: "Arial"
    });

    // Slide 4 - History
    const slide4 = pptx.addSlide();
    slide4.background = { color: primaryRed };
    slide4.addText("COMO SURGIU?", {
      x: 0.5,
      y: 1.5,
      w: "90%",
      fontSize: 48,
      bold: true,
      italic: true,
      color: white,
      fontFace: "Arial"
    });
    slide4.addText("A Stemp surgiu em 2022, fundada pelo artista e compositor Pedrip.", {
      x: 0.5,
      y: 2.8,
      w: "90%",
      fontSize: 22,
      color: "FFFFFFE6",
      fontFace: "Arial"
    });
    slide4.addText("Com o propósito de profissionalizar o caminho de quem cria música e dar estrutura para artistas independentes.", {
      x: 0.5,
      y: 3.6,
      w: "90%",
      fontSize: 18,
      color: "FFFFFFCC",
      fontFace: "Arial"
    });

    // Slide 5 - Mission
    const slide5 = pptx.addSlide();
    slide5.background = { color: primaryRed };
    slide5.addText("Nossa Missão", {
      x: 0.5,
      y: 1.2,
      w: "90%",
      fontSize: 28,
      italic: true,
      color: "FFFFFFCC",
      fontFace: "Arial"
    });
    slide5.addText("Conectar música, visão e estratégia para transformar projetos em carreira.", {
      x: 0.5,
      y: 2,
      w: "90%",
      fontSize: 36,
      bold: true,
      color: white,
      fontFace: "Arial"
    });
    slide5.addText("A Stemp é onde a arte encontra direção.", {
      x: 0.5,
      y: 3.8,
      w: "90%",
      fontSize: 18,
      italic: true,
      color: "FFFFFFB3",
      fontFace: "Arial"
    });

    // Slide 6 - Contact
    const slide6 = pptx.addSlide();
    slide6.background = { color: primaryRed };
    slide6.addText("COMO CONTRATAR?", {
      x: 0.5,
      y: 1.5,
      w: "90%",
      fontSize: 36,
      bold: true,
      color: darkRed,
      fontFace: "Arial"
    });
    slide6.addText("Para nos contratar, basta enviar um pedido de orçamento via Direct ou e-mail.", {
      x: 0.5,
      y: 2.5,
      w: "90%",
      fontSize: 16,
      color: "666666",
      fontFace: "Arial"
    });
    slide6.addText("stempentertainment@gmail.com", {
      x: 0.5,
      y: 3.3,
      w: "90%",
      fontSize: 24,
      bold: true,
      color: darkRed,
      fontFace: "Arial"
    });
    slide6.addText("Após o envio, entraremos em contato tirando todas as dúvidas.", {
      x: 0.5,
      y: 4.2,
      w: "90%",
      fontSize: 14,
      color: "666666",
      fontFace: "Arial"
    });

    // Save the presentation
    await pptx.writeFile({ fileName: "Stemp_Entertainment.pptx" });
  };

  return (
    <Button
      onClick={exportToPPTX}
      variant="ghost"
      size="icon"
      className="absolute top-4 right-4 z-50 bg-background/20 hover:bg-background/40 text-primary-foreground backdrop-blur-sm"
      title="Exportar PowerPoint"
    >
      <Download className="h-5 w-5" />
    </Button>
  );
};

export default ExportPPTXButton;
