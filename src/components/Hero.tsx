import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Next-Gen Technology",
    subtitle: "Discover the latest in tech innovation",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
    color: "from-blue-400 to-purple-500"
  },
  {
    id: 2,
    title: "Premium Laptops",
    subtitle: "Powerful machines for work and play",
    cta: "Explore",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=2074&auto=format&fit=crop",
    color: "from-green-400 to-teal-500"
  },
  {
    id: 3,
    title: "Smart Accessories",
    subtitle: "Enhance your tech experience",
    cta: "View Collection",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2129&auto=format&fit=crop",
    color: "from-orange-400 to-pink-500"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden pt-16">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0' 
              : index < currentSlide 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/90 mb-8 animate-fadeInUp animation-delay-200">
                  {slide.subtitle}
                </p>
                <button className={`bg-gradient-to-r ${slide.color} text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all animate-fadeInUp animation-delay-400`}>
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
