import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Digitek</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('casos-exito')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Casos de Éxito
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('casos-exito')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Casos de Éxito
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

