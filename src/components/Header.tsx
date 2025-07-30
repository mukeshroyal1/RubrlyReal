import { Button } from "@/components/ui/button";
import rubrlyLogo from "@/assets/Rubrlynobg.png";
import { useState } from "react";

const Header = () => {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a className="flex items-center group" href="/">
            <span className="h-8 w-8 text-tamlabs transition-transform duration-300 group-hover:scale-110">
              <img src={rubrlyLogo} alt="Rubrly" className="h-8 w-8" />
            </span>
            <span className="ml-2 text-xl font-bold">
              <span className="text-tamlabs">Rubrly</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-sm font-medium text-gray-600 hover:text-tamlabs transition-colors" href="#demo">
              Platform
            </a>
            <a className="text-sm text-gray-600 hover:text-tamlabs transition-colors" href="#use-cases">
              Use Cases
            </a>
            <a className="text-sm text-gray-600 hover:text-tamlabs transition-colors" href="#features">
              Features
            </a>
            <a className="text-sm text-gray-600 hover:text-tamlabs transition-colors" href="#faq">
              FAQ
            </a>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={handleButtonClick}
              className="group inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 border border-orange-400 text-sm font-medium rounded-lg text-orange-600 bg-transparent hover:bg-orange-400 hover:text-white transition-all duration-300 relative overflow-hidden shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></span>
              <span className="absolute inset-0 bg-orange-400/20 rounded-lg animate-pulse"></span>
              <span className="relative z-10">Coming Soon</span>
            </button>
          </div>
        </div>
      </nav>
      
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
    </header>
  );
};

export default Header;