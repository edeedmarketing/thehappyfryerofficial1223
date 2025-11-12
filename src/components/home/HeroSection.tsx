const HeroSection = () => {
  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1920"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        >
          <source src="https://videos.pexels.com/video-files/3296399/3296399-sd_640_360_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3296399/3296399-hd_1280_720_25fps.mp4" type="video/mp4" />
        </video>
      </div>
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
