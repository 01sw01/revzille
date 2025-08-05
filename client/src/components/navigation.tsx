import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">RevaZille</h1>
              <span className="text-xs text-gray-500">by RevaLogix</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Dashboard
              </button>
              <button 
                onClick={() => scrollToSection('support')}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Support
              </button>
              <Button className="bg-primary-500 text-white hover:bg-primary-600">
                Start Free Trial
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('dashboard')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Dashboard
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Support
            </button>
            <Button className="w-full bg-primary-500 text-white hover:bg-primary-600">
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
