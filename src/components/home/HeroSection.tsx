const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8753591/pexels-photo-8753591.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <img
          src="/happy_fryer_transparent.png"
          alt="The Happy Fryer"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
