import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(1);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (!video1 || !video2) return;

    const handleTimeUpdate = () => {
      if (video1.currentTime >= 6) {
        setCurrentVideo(2);
        video2.play().catch(error => {
          console.error('Video 2 autoplay failed:', error);
        });
      }
    };

    const handleVideo2End = () => {
      setCurrentVideo(1);
      video1.currentTime = 0;
      video1.play().catch(error => {
        console.error('Video 1 autoplay failed:', error);
      });
    };

    video1.addEventListener('timeupdate', handleTimeUpdate);
    video2.addEventListener('ended', handleVideo2End);

    video1.play().catch(error => {
      console.error('Video 1 autoplay failed:', error);
    });

    return () => {
      video1.removeEventListener('timeupdate', handleTimeUpdate);
      video2.removeEventListener('ended', handleVideo2End);
    };
  }, []);

  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-gray-900">
      <video
        ref={video1Ref}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          currentVideo === 1 ? 'opacity-100' : 'opacity-0'
        }`}
        src="https://www.pexels.com/download/video/3296402/"
      />
      <video
        ref={video2Ref}
        muted
        playsInline
        preload="auto"
        loop
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          currentVideo === 2 ? 'opacity-100' : 'opacity-0'
        }`}
        src="https://www.pexels.com/download/video/8880960/"
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
