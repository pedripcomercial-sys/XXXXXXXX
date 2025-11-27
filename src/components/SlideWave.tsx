const SlideWave = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120V80C240 40 480 60 720 70C960 80 1200 50 1440 40V120H0Z"
          fill="hsl(0 30% 15% / 0.6)"
        />
        <path
          d="M0 120V90C200 70 400 80 600 85C800 90 1000 75 1200 65C1300 60 1380 55 1440 50V120H0Z"
          fill="hsl(0 25% 12% / 0.8)"
        />
      </svg>
    </div>
  );
};

export default SlideWave;
