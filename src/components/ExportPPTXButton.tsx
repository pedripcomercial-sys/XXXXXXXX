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
    pptx.layout = "LAYOUT_16x9";
    
    // Define colors (only 6-digit hex, no alpha)
    const primaryRed = "E02424";
    const darkRed = "991B1B";
    const white = "FFFFFF";
    const lightPink = "F5A3A3"; // Approximation of white with transparency on red
    const mediumPink = "E88A8A"; // Stronger transparency approximation
    const cardBg = "FFFFFF";
    const mutedText = "6B7280";
    const borderColor = "E5E7EB";

    // Slide 1 - Hero (centered layout)
    const slide1 = pptx.addSlide();
    slide1.background = { color: primaryRed };
    slide1.addText("O QUE É A", {
      x: 0,
      y: 2.2,
      w: "100%",
      fontSize: 20,
      color: lightPink,
      align: "center",
      fontFace: "Arial",
      charSpacing: 4
    });
    slide1.addText("STEMP", {
      x: 0,
      y: 2.7,
      w: "100%",
      fontSize: 80,
      bold: true,
      italic: true,
      color: white,
      align: "center",
      fontFace: "Arial"
    });
    slide1.addText("ENTERTAINMENT", {
      x: 0,
      y: 4.0,
      w: "100%",
      fontSize: 24,
      color: mediumPink,
      align: "center",
      fontFace: "Arial",
      charSpacing: 12
    });

    // Slide 2 - Services (card style)
    const slide2 = pptx.addSlide();
    slide2.background = { color: primaryRed };
    
    // Card background
    slide2.addShape(pptx.ShapeType.roundRect, {
      x: 1.5,
      y: 0.8,
      w: 7,
      h: 4.2,
      fill: { color: cardBg },
      shadow: { type: "outer", blur: 10, offset: 3, angle: 45, opacity: 0.3 }
    });
    
    slide2.addText("O QUE FAZEMOS", {
      x: 2,
      y: 1.1,
      w: 6,
      fontSize: 32,
      bold: true,
      italic: true,
      color: primaryRed,
      fontFace: "Arial"
    });
    
    const services = [
      { title: "Label Management", desc: "Estratégia, organização e acompanhamento completo de lançamentos." },
      { title: "Publishing", desc: "Administração, registro e proteção das obras, garantindo que cada música esteja segura e rendendo." },
      { title: "A&R", desc: "Buscamos e desenvolvemos talentos, ajudando cada artista a encontrar sua identidade sonora." }
    ];
    
    services.forEach((service, index) => {
      const yPos = 1.9 + (index * 0.9);
      slide2.addText(service.title, {
        x: 2,
        y: yPos,
        w: 6,
        fontSize: 18,
        bold: true,
        color: primaryRed,
        fontFace: "Arial"
      });
      slide2.addText("— " + service.desc, {
        x: 2,
        y: yPos + 0.3,
        w: 6,
        fontSize: 12,
        color: mutedText,
        fontFace: "Arial"
      });
      if (index < services.length - 1) {
        slide2.addShape(pptx.ShapeType.line, {
          x: 2,
          y: yPos + 0.75,
          w: 6,
          h: 0,
          line: { color: borderColor, width: 0.5 }
        });
      }
    });

    // Slide 3 - Vision
    const slide3 = pptx.addSlide();
    slide3.background = { color: primaryRed };
    slide3.addText("NOSSA VISÃO", {
      x: 1,
      y: 1.8,
      w: 8,
      fontSize: 56,
      bold: true,
      italic: true,
      color: white,
      fontFace: "Arial"
    });
    slide3.addText("A Stemp existe para firmar a música do artista no mundo, tornando sua obra duradoura, marcante e atemporal.", {
      x: 1,
      y: 3.0,
      w: 8,
      fontSize: 22,
      color: mediumPink,
      fontFace: "Arial"
    });
    slide3.addText("Não apenas lançar, mas estabelecer legado.", {
      x: 1,
      y: 4.0,
      w: 8,
      fontSize: 18,
      italic: true,
      color: lightPink,
      fontFace: "Arial"
    });

    // Slide 4 - History
    const slide4 = pptx.addSlide();
    slide4.background = { color: primaryRed };
    slide4.addText("COMO SURGIU?", {
      x: 1,
      y: 1.8,
      w: 8,
      fontSize: 56,
      bold: true,
      italic: true,
      color: white,
      fontFace: "Arial"
    });
    slide4.addText("A Stemp surgiu em 2022, fundada pelo artista e compositor Pedrip.", {
      x: 1,
      y: 3.0,
      w: 8,
      fontSize: 22,
      color: mediumPink,
      fontFace: "Arial"
    });
    slide4.addText("Com o propósito de profissionalizar o caminho de quem cria música e dar estrutura para artistas independentes.", {
      x: 1,
      y: 3.8,
      w: 8,
      fontSize: 18,
      color: lightPink,
      fontFace: "Arial"
    });

    // Slide 5 - Mission
    const slide5 = pptx.addSlide();
    slide5.background = { color: primaryRed };
    slide5.addText("Nossa Missão", {
      x: 1,
      y: 1.5,
      w: 8,
      fontSize: 28,
      italic: true,
      color: lightPink,
      fontFace: "Arial"
    });
    slide5.addText("Conectar música, visão e estratégia para transformar projetos em carreira.", {
      x: 1,
      y: 2.2,
      w: 8,
      fontSize: 40,
      bold: true,
      color: white,
      fontFace: "Arial"
    });
    slide5.addText("A Stemp é onde a arte encontra direção.", {
      x: 1,
      y: 4.0,
      w: 8,
      fontSize: 18,
      italic: true,
      color: lightPink,
      fontFace: "Arial"
    });

    // Slide 6 - Contact (card style)
    const slide6 = pptx.addSlide();
    slide6.background = { color: primaryRed };
    
    // Card background
    slide6.addShape(pptx.ShapeType.roundRect, {
      x: 2,
      y: 1,
      w: 6,
      h: 3.8,
      fill: { color: cardBg },
      shadow: { type: "outer", blur: 10, offset: 3, angle: 45, opacity: 0.3 }
    });
    
    slide6.addText("COMO CONTRATAR?", {
      x: 2.5,
      y: 1.4,
      w: 5,
      fontSize: 32,
      bold: true,
      color: primaryRed,
      fontFace: "Arial"
    });
    slide6.addText("Para nos contratar, basta enviar um pedido de orçamento via Direct ou e-mail.", {
      x: 2.5,
      y: 2.2,
      w: 5,
      fontSize: 14,
      color: mutedText,
      fontFace: "Arial"
    });
    slide6.addText("stempentertainment@gmail.com", {
      x: 2.5,
      y: 3.0,
      w: 5,
      fontSize: 20,
      bold: true,
      color: primaryRed,
      fontFace: "Arial"
    });
    slide6.addText("Após o envio, entraremos em contato tirando todas as dúvidas.", {
      x: 2.5,
      y: 3.7,
      w: 5,
      fontSize: 12,
      color: mutedText,
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
