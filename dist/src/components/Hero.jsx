import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                <span>Transformación Digital Inteligente</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Impulsamos el{' '}
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  crecimiento inteligente
                </span>{' '}
                de tu empresa
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transformamos procesos, optimizamos decisiones y mejoramos la experiencia de usuarios y ciudadanos mediante soluciones digitales innovadoras que integran inteligencia artificial, automatización y tecnología de vanguardia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Descubre nuestros servicios</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Hablar con un experto
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Proyectos exitosos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">95%</div>
                  <div className="text-sm text-gray-600">Satisfacción del cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Soporte técnico</div>
                </div>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/src/assets/images/cutting_edge_tech/cutting_edge_tech.jpg" 
                  alt="Tecnología de vanguardia" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Sparkles size={24} className="text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-10 h-10 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

