import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/085e3e8e8fae5c3c13c744935514087c/9d48ffcfde41abd3eb14393d2d611a38.webp" 
                alt="LIV Construction LTD Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                LIV Construction
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-neutral' : 'text-accent'}`}>
                High Wycombe Builders
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`font-medium transition-colors cursor-pointer ${
                isActive('/') 
                  ? (isScrolled ? 'text-primary' : 'text-white')
                  : (isScrolled ? 'text-neutral hover:text-primary' : 'text-accent hover:text-white')
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className={`font-medium transition-colors cursor-pointer ${
                isActive('/services')
                  ? (isScrolled ? 'text-primary' : 'text-white')
                  : (isScrolled ? 'text-neutral hover:text-primary' : 'text-accent hover:text-white')
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('/projects')}
              className={`font-medium transition-colors cursor-pointer ${
                isActive('/projects')
                  ? (isScrolled ? 'text-primary' : 'text-white')
                  : (isScrolled ? 'text-neutral hover:text-primary' : 'text-accent hover:text-white')
              }`}
            >
              Projects
            </button>
            <a
              href="tel:+441494123456"
              className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              01494 123 456
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-lg shadow-lg mt-2">
            <nav className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => handleNavigation('/')}
                className={`text-left font-medium transition-colors cursor-pointer ${
                  isActive('/') ? 'text-primary' : 'text-neutral hover:text-primary'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className={`text-left font-medium transition-colors cursor-pointer ${
                  isActive('/services') ? 'text-primary' : 'text-neutral hover:text-primary'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('/projects')}
                className={`text-left font-medium transition-colors cursor-pointer ${
                  isActive('/projects') ? 'text-primary' : 'text-neutral hover:text-primary'
                }`}
              >
                Projects
              </button>
              <a
                href="tel:+441494123456"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 text-center cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                01494 123 456
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
