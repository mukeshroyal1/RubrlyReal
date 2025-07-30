import { Button } from "@/components/ui/button";
import rubrlyLogo from "@/assets/Rubrlynobg.png";
import { useState } from "react";

const HeroSection = () => {
  const [fallingLogos, setFallingLogos] = useState<Array<{ id: number; left: number; startTime: number }>>([]);

  const handleButtonClick = () => {
    const newLogo = {
      id: Date.now(),
      left: Math.random() * 80 + 10, // Random position between 10% and 90%
      startTime: Date.now()
    };
    setFallingLogos(prev => [...prev, newLogo]);
    
    // Remove logo after animation completes
    setTimeout(() => {
      setFallingLogos(prev => prev.filter(logo => logo.id !== newLogo.id));
    }, 2500);
  };
  return (
    <section className="relative bg-hero-gradient overflow-hidden pb-8 mb-[-1rem] sm:mb-[-1.5rem] lg:mb-[-2rem] pt-16">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute h-[800px] w-[800px] -top-32 -right-32 bg-tamlabs/10 rounded-full blur-3xl"></div>
        <div className="absolute h-[600px] w-[600px] -bottom-32 -left-32 bg-tamlabs/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="text-left space-y-5 sm:space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
                The AI Editor
                <br />
                <span className="bg-gradient-to-r from-tamlabs to-tamlabs-dark bg-clip-text text-transparent">
                  in Overleaf
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600">
                Rubrly makes document creation and revision faster with enterprise-grade precision.
              </p>
              
              <p className="text-lg sm:text-xl text-tamlabs mt-2 sm:mt-4">
                Edit your documents through chat — just describe your changes and Rubrly implements them instantly.
              </p>
            </div>
            
            <div className="w-full sm:max-w-md">
              <Button 
                type="button"
                onClick={handleButtonClick}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-orange-400 text-orange-600 bg-transparent hover:bg-orange-400 hover:text-white font-medium rounded-lg transition-all duration-300 relative overflow-hidden group shadow-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></span>
                <span className="absolute inset-0 bg-orange-400/20 rounded-lg animate-pulse"></span>
                <span className="relative z-10">Coming Soon</span>
              </Button>
            </div>
          </div>
          
          <div className="relative mt-4 lg:mt-0">
            {/* Glow Effect */}
            <div className="absolute -inset-2 sm:-inset-4">
              <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-3xl bg-gradient-to-r from-tamlabs to-tamlabs-light"></div>
            </div>
            
            <div className="relative rounded-md sm:rounded-lg overflow-hidden shadow-lg sm:shadow-2xl aspect-video bg-gray-900">
              <img 
                src="/image.png"
                alt="Rubrly Interface"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Backed by Y Combinator */}
        <div className="flex justify-center items-center mt-6 sm:mt-6 mb-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-xl text-gray-600">Backed by</span>
            <img src="/backedup.png" alt="Backed Up" className="w-auto h-20 sm:h-28 md:h-32" />
          </div>
        </div>
      </div>
      
      {/* Falling Logos Container */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {fallingLogos.map((logo) => (
          <div
            key={logo.id}
            className="absolute w-8 h-8 animate-fall"
            style={{
              left: `${logo.left}%`,
              top: '-2rem',
              animation: 'fall 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
            }}
          >
            <img 
              src={rubrlyLogo} 
              alt="Falling Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;