interface SlideIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const SlideIndicators = ({ total, current, onSelect }: SlideIndicatorsProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current
              ? "bg-primary-foreground w-8"
              : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
          }`}
          aria-label={`Ir para slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SlideIndicators;
