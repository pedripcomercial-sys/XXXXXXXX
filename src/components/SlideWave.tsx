const SlideWave = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none">
      {/* Back wave - darkest */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
        style={{ height: '100%' }}
      >
        <path
          d="M0 200V140C120 120 240 130 360 125C480 120 600 100 720 95C840 90 960 100 1080 110C1200 120 1320 130 1440 125V200H0Z"
          fill="hsl(0 20% 10% / 0.5)"
        />
      </svg>
      
      {/* Middle wave */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
        style={{ height: '90%' }}
      >
        <path
          d="M0 200V160C180 140 360 150 540 145C720 140 900 125 1080 120C1200 116 1320 125 1440 130V200H0Z"
          fill="hsl(0 15% 12% / 0.7)"
        />
      </svg>
      
      {/* Front wave - most visible */}
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
        style={{ height: '75%' }}
      >
        <path
          d="M0 200V170C200 155 400 165 600 160C800 155 1000 145 1200 150C1320 153 1400 158 1440 160V200H0Z"
          fill="hsl(0 12% 14% / 0.9)"
        />
      </svg>

      {/* Curved dark bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C0 13.4315 13.4315 0 30 0H1410C1426.57 0 1440 13.4315 1440 30V60H0Z"
            fill="hsl(0 10% 10%)"
          />
        </svg>
      </div>
    </div>
  );
};

export default SlideWave;
