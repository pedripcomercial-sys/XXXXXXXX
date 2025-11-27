const SlideWave = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-56 overflow-hidden pointer-events-none">
      {/* Back wave - deep crimson with gradient */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full animate-wave-slow"
        preserveAspectRatio="none"
        style={{ height: '100%' }}
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 60% 25%)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(0 70% 35%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(0 60% 25%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M0 200V100C80 85 160 95 240 90C320 85 400 70 480 65C560 60 640 70 720 80C800 90 880 100 960 95C1040 90 1120 70 1200 65C1280 60 1360 75 1440 80V200H0Z"
          fill="url(#waveGradient1)"
        />
      </svg>
      
      {/* Second wave layer */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full animate-wave-medium"
        preserveAspectRatio="none"
        style={{ height: '90%' }}
      >
        <defs>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 40% 18%)" stopOpacity="0.7" />
            <stop offset="30%" stopColor="hsl(0 55% 25%)" stopOpacity="0.75" />
            <stop offset="70%" stopColor="hsl(0 45% 20%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(0 40% 18%)" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <path
          d="M0 200V120C100 100 200 115 300 110C400 105 500 90 600 85C700 80 800 95 900 100C1000 105 1100 90 1200 85C1300 80 1380 95 1440 100V200H0Z"
          fill="url(#waveGradient2)"
        />
      </svg>
      
      {/* Third wave - mid layer */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full animate-wave-fast"
        preserveAspectRatio="none"
        style={{ height: '75%' }}
      >
        <defs>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 30% 12%)" stopOpacity="0.85" />
            <stop offset="25%" stopColor="hsl(0 45% 18%)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="hsl(0 35% 15%)" stopOpacity="0.85" />
            <stop offset="75%" stopColor="hsl(0 45% 18%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(0 30% 12%)" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M0 200V140C120 125 240 135 360 130C480 125 600 110 720 105C840 100 960 115 1080 120C1200 125 1320 110 1440 115V200H0Z"
          fill="url(#waveGradient3)"
        />
      </svg>

      {/* Front wave - darkest with shimmer */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
        style={{ height: '60%' }}
      >
        <defs>
          <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 25% 8%)" stopOpacity="0.95" />
            <stop offset="20%" stopColor="hsl(0 35% 12%)" stopOpacity="1" />
            <stop offset="50%" stopColor="hsl(0 30% 10%)" stopOpacity="0.95" />
            <stop offset="80%" stopColor="hsl(0 35% 12%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(0 25% 8%)" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d="M0 200V155C150 145 300 155 450 150C600 145 750 135 900 140C1050 145 1200 155 1350 150C1400 148 1420 150 1440 152V200H0Z"
          fill="url(#waveGradient4)"
        />
      </svg>

      {/* Bottom solid bar with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(0 20% 5%)" />
              <stop offset="50%" stopColor="hsl(0 25% 7%)" />
              <stop offset="100%" stopColor="hsl(0 20% 5%)" />
            </linearGradient>
          </defs>
          <path
            d="M0 80V25C0 11.2 11.2 0 25 0H1415C1428.8 0 1440 11.2 1440 25V80H0Z"
            fill="url(#bottomGradient)"
          />
        </svg>
      </div>
    </div>
  );
};

export default SlideWave;
