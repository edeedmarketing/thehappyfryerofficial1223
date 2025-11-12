const HeroSection = () => {
  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-gray-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/3296402/3296402-sd_640_360_25fps.mp4"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center">
        <img
          src="/happy_fryer_transparent.png"
          alt="The Happy Fryer"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer animate-zoom-in"
        />
      </div>
    </section>
  );
};

export default HeroSection;
