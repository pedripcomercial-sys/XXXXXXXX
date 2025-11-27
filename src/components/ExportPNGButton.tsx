import { Download } from "lucide-react";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import { useState } from "react";

interface ExportPNGButtonProps {
  emblaApi: any;
}

const ExportPNGButton = ({ emblaApi }: ExportPNGButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPNG = async () => {
    if (!emblaApi || isExporting) return;
    
    setIsExporting(true);
    
    try {
      const zip = new JSZip();
      const container = emblaApi.containerNode();
      const slides = container.querySelectorAll('.embla__slide');
      const totalSlides = slides.length;
      const currentIndex = emblaApi.selectedScrollSnap();
      
      // Capture each slide
      for (let i = 0; i < totalSlides; i++) {
        // Navigate to slide
        emblaApi.scrollTo(i, true);
        
        // Wait for transition to complete
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const slideElement = slides[i] as HTMLElement;
        
        // Capture the slide
        const canvas = await html2canvas(slideElement, {
          scale: 2, // Higher quality
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          width: slideElement.offsetWidth,
          height: slideElement.offsetHeight,
        });
        
        // Convert to blob
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((blob) => resolve(blob!), 'image/png', 1.0);
        });
        
        // Add to zip
        zip.file(`slide_${String(i + 1).padStart(2, '0')}.png`, blob);
      }
      
      // Return to original slide
      emblaApi.scrollTo(currentIndex, true);
      
      // Generate and download zip
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Stemp_Entertainment_Slides.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error exporting slides:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={exportToPNG}
      variant="ghost"
      size="icon"
      disabled={isExporting}
      className="absolute top-4 right-4 z-50 bg-background/20 hover:bg-background/40 text-primary-foreground backdrop-blur-sm disabled:opacity-50"
      title="Exportar PNG"
    >
      <Download className={`h-5 w-5 ${isExporting ? 'animate-pulse' : ''}`} />
    </Button>
  );
};

export default ExportPNGButton;
