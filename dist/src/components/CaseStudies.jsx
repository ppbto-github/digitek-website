import React from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "Transformación Digital Bancaria",
      client: "Institución Financiera Regional",
      challenge: "Modernización de procesos crediticios y mejora de la experiencia del cliente",
      solution: "Implementación de Kata Suite con IA para análisis de riesgo y plataforma conversacional para atención al cliente",
      results: [
        { icon: TrendingUp, metric: "40%", description: "Reducción en tiempo de aprobación de créditos" },
        { icon: Users, metric: "85%", description: "Mejora en satisfacción del cliente" },
        { icon: Clock, metric: "60%", description: "Reducción en tiempo de respuesta" }
      ],
      image: "/src/assets/images/kata_suite/kata_suite.png"
    },
    {
      title: "Automatización de Procesos Gubernamentales",
      client: "Gobierno Municipal",
      challenge: "Optimización de trámites ciudadanos y reducción de tiempos de espera",
      solution: "Desarrollo de plataforma digital con RPA y chatbots inteligentes para atención ciudadana",
      results: [
        { icon: Clock, metric: "70%", description: "Reducción en tiempo de trámites" },
        { icon: Users, metric: "90%", description: "Satisfacción ciudadana" },
        { icon: TrendingUp, metric: "50%", description: "Aumento en trámites digitales" }
      ],
      image: "/src/assets/images/automation/automation.jpg"
    },
    {
      title: "Analítica Avanzada para Retail",
      client: "Cadena de Retail Nacional",
      challenge: "Optimización de inventarios y predicción de demanda",
      solution: "Implementación de modelos predictivos y dashboards de Business Intelligence",
      results: [
        { icon: TrendingUp, metric: "25%", description: "Aumento en ventas" },
        { icon: Award, metric: "30%", description: "Reducción en costos de inventario" },
        { icon: Users, metric: "95%", description: "Precisión en predicciones" }
      ],
      image: "/src/assets/images/advanced_analytics/advanced_analytics.jpg"
    }
  ];

  return (
    <section id="casos-exito" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Casos de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Éxito
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas y gobiernos a transformar sus operaciones y alcanzar resultados extraordinarios.
            </p>
          </div>

          {/* Cases */}
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      {caseStudy.client}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{caseStudy.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Desafío:</h4>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solución:</h4>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <result.icon size={24} className="text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">{result.metric}</div>
                        <div className="text-sm text-gray-600">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
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

export default CaseStudies;

