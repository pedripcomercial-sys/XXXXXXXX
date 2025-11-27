const SlideWave = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
      {/* Back wave - darkest with slow animation */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-[200%] animate-wave-slow"
        preserveAspectRatio="none"
        style={{ height: '100%' }}
      >
        <path
          d="M0 200V140C120 120 240 130 360 125C480 120 600 100 720 95C840 90 960 100 1080 110C1200 120 1320 130 1440 125C1560 120 1680 130 1800 125C1920 120 2040 100 2160 95C2280 90 2400 100 2520 110C2640 120 2760 130 2880 125V200H0Z"
          fill="hsl(0 20% 12% / 0.4)"
        />
      </svg>
      
      {/* Middle wave with medium animation */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-[200%] animate-wave-medium"
        preserveAspectRatio="none"
        style={{ height: '85%' }}
      >
        <path
          d="M0 200V155C180 135 360 150 540 145C720 140 900 120 1080 115C1260 110 1440 130 1620 140C1800 150 1980 135 2160 130C2340 125 2520 140 2700 145C2880 150 2880 155 2880 160V200H0Z"
          fill="hsl(0 18% 14% / 0.6)"
        />
      </svg>
      
      {/* Front wave - most visible with fast animation */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-[200%] animate-wave-fast"
        preserveAspectRatio="none"
        style={{ height: '65%' }}
      >
        <path
          d="M0 200V165C200 150 400 165 600 158C800 150 1000 135 1200 140C1400 145 1600 160 1800 155C2000 150 2200 140 2400 145C2600 150 2800 160 2880 165V200H0Z"
          fill="hsl(0 15% 16% / 0.8)"
        />
      </svg>

      {/* Solid bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-[hsl(0_12%_12%)]" />
    </div>
  );
};

export default SlideWave;
