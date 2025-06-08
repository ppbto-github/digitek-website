import React from 'react';
import { Brain, Cog, Zap, Database, MessageSquare, Code, BarChart3, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Implementamos soluciones de IA que automatizan procesos complejos, mejoran la toma de decisiones y optimizan la experiencia del usuario.",
      image: "/src/assets/images/ai/ai.jpg",
      features: ["Machine Learning", "Procesamiento de Lenguaje Natural", "Visión por Computadora", "Análisis Predictivo"]
    },
    {
      icon: Cog,
      title: "Automatización",
      description: "Automatizamos procesos mediante robotización (RPA) para aumentar la eficiencia operativa y reducir errores humanos.",
      image: "/src/assets/images/automation/automation.jpg",
      features: ["RPA", "Automatización de Procesos", "Workflows Inteligentes", "Integración de Sistemas"]
    },
    {
      icon: Zap,
      title: "Tecnología de Vanguardia",
      description: "Adoptamos las últimas tecnologías para mantener a tu empresa a la vanguardia de la innovación digital.",
      image: "/src/assets/images/cutting_edge_tech/cutting_edge_tech.jpg",
      features: ["Cloud Computing", "IoT", "Blockchain", "Edge Computing"]
    },
    {
      icon: Database,
      title: "Kata Suite",
      description: "Suite completa para el sector financiero que ayuda a mejorar la eficiencia y el crecimiento del negocio con soluciones que generan más clientes en menos tiempo.",
      image: "/src/assets/images/kata_suite/kata_suite.png",
      features: ["Core Bancario", "Gestión de Créditos", "Análisis de Riesgo", "Reportería Avanzada"]
    },
    {
      icon: MessageSquare,
      title: "Plataforma Conversacional",
      description: "Canales de mensajería digital como WhatsApp, Facebook Messenger, Instagram, SMS, email, entre otros.",
      image: "/src/assets/images/conversational_platform/conversational_platform.png",
      features: ["Chatbots Inteligentes", "Omnicanalidad", "Automatización de Respuestas", "Análisis de Conversaciones"]
    },
    {
      icon: Code,
      title: "Fábrica de Software",
      description: "Desarrollo a la medida: Front-end, Back-End, Apps Web, Móviles y Conversacionales.",
      image: "/src/assets/images/software_factory/software_factory.jpg",
      features: ["Desarrollo Web", "Apps Móviles", "APIs", "Arquitectura de Software"]
    },
    {
      icon: BarChart3,
      title: "Analítica Avanzada",
      description: "Diseño y construcción de Modelos Predictivos y Tableros de Business Intelligence a la medida de sus necesidades.",
      image: "/src/assets/images/advanced_analytics/advanced_analytics.jpg",
      features: ["Business Intelligence", "Modelos Predictivos", "Dashboards", "Data Mining"]
    },
    {
      icon: Headphones,
      title: "Digital Customer Service",
      description: "Mesa de ayuda digital para atención de Clientes Digitales.",
      image: "/src/assets/images/digital_customer_service/digital_customer_service.webp",
      features: ["Soporte 24/7", "Tickets Inteligentes", "Base de Conocimiento", "Métricas de Satisfacción"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestras{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Principales Líneas
              </span>{' '}
              de Servicio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales que combinan tecnología de vanguardia con expertise especializado para impulsar la transformación digital de tu organización.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <service.icon size={24} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

