import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold">Digitek</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Impulsamos el crecimiento inteligente de empresas y gobiernos mediante soluciones digitales innovadoras.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('casos-exito')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Casos de Éxito
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('nosotros')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Nosotros
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Inteligencia Artificial</li>
                <li>Automatización</li>
                <li>Kata Suite</li>
                <li>Plataforma Conversacional</li>
                <li>Fábrica de Software</li>
                <li>Analítica Avanzada</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-400" />
                  <span className="text-gray-400 text-sm">contacto@digitek.cloud</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-green-400" />
                  <span className="text-gray-400 text-sm">+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-purple-400 mt-1" />
                  <span className="text-gray-400 text-sm">
                    Av. Revolución 1234<br />
                    Col. Centro, CDMX<br />
                    México, 06000
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Digitek. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Términos de Servicio
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

