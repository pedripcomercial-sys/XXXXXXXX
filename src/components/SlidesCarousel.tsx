import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideIndicators from "./SlideIndicators";
import SlideHero from "./slides/SlideHero";
import SlideServices from "./slides/SlideServices";
import SlideVision from "./slides/SlideVision";
import SlideHistory from "./slides/SlideHistory";
import SlideMission from "./slides/SlideMission";
import SlideContact from "./slides/SlideContact";

const slides = [
  { id: 1, component: SlideHero },
  { id: 2, component: SlideServices },
  { id: 3, component: SlideVision },
  { id: 4, component: SlideHistory },
  { id: 5, component: SlideMission },
  { id: 6, component: SlideContact },
];

const SlidesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    skipSnaps: false,
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0 h-full">
              <slide.component />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Indicators */}
      <SlideIndicators
        total={slides.length}
        current={currentSlide}
        onSelect={scrollTo}
      />
    </div>
  );
};

export default SlidesCarousel;
