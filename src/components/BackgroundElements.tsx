const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-vignette" />
      
      {/* Floating target circles */}
      <svg
        className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 opacity-[0.12] animate-pulse-slow"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="hsl(355 55% 45%)" strokeWidth="1" />
        <circle cx="50" cy="50" r="35" stroke="hsl(355 50% 40%)" strokeWidth="1" />
        <circle cx="50" cy="50" r="25" stroke="hsl(355 45% 35%)" strokeWidth="1" />
        <circle cx="50" cy="50" r="15" stroke="hsl(355 40% 30%)" strokeWidth="1" />
        <circle cx="50" cy="50" r="5" fill="hsl(355 55% 45%)" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="hsl(355 50% 40%)" strokeWidth="0.5" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(355 50% 40%)" strokeWidth="0.5" />
      </svg>

      {/* Second target - smaller */}
      <svg
        className="absolute bottom-[25%] left-[5%] w-20 h-20 md:w-28 md:h-28 opacity-[0.1] animate-pulse-slow animation-delay-500"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="hsl(355 50% 38%)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="30" stroke="hsl(355 45% 33%)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="15" stroke="hsl(355 40% 28%)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="3" fill="hsl(355 50% 38%)" />
      </svg>

      {/* Floating particles */}
      <div className="absolute top-[30%] left-[20%] w-1 h-1 bg-stemp-red/25 rounded-full animate-float" />
      <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-stemp-red/18 rounded-full animate-float animation-delay-200" />
      <div className="absolute top-[45%] left-[70%] w-1 h-1 bg-stemp-red/20 rounded-full animate-float animation-delay-400" />
      <div className="absolute top-[20%] left-[40%] w-0.5 h-0.5 bg-stemp-red/25 rounded-full animate-float animation-delay-300" />
      <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-stemp-red/18 rounded-full animate-float animation-delay-100" />
      <div className="absolute top-[50%] right-[15%] w-0.5 h-0.5 bg-stemp-red/22 rounded-full animate-float animation-delay-500" />

      {/* Diagonal lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.025]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="40" y2="0" stroke="hsl(355 45% 45%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>

      {/* Gradient orbs */}
      <div className="absolute top-[10%] left-[30%] w-64 h-64 bg-stemp-red/8 rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-stemp-red-dark/12 rounded-full blur-3xl" />
      <div className="absolute top-[50%] left-[60%] w-48 h-48 bg-stemp-red/6 rounded-full blur-2xl" />

      {/* Grid pattern subtle */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.018]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="none" stroke="hsl(355 35% 45%)" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
    </div>
  );
};

export default BackgroundElements;
