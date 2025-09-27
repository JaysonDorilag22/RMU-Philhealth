import React, { useState, useEffect } from "react";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png", "/images/6.png"];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative h-[65vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide} alt={`Hero slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[#027b40]/60"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight my-heading">
            Your Partner in Health
          </h1>

          <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            PhilHealth provides every Filipino with affordable, accessible, and reliable health care coverage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#027b40] text-white hover:bg-[#025f33] px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[160px]">
              Become a Member
            </button>
            <button className="bg-[#ebd21a] text-black hover:bg-[#d4be17] px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[160px]">
              Check Benefits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
