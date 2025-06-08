import React from 'react';
import { Target, Eye, Heart, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Adoptamos y desarrollamos tecnologías de vanguardia para crear soluciones que marquen la diferencia."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos comprometemos con la calidad superior en cada proyecto, superando las expectativas de nuestros clientes."
    },
    {
      icon: Heart,
      title: "Impacto Positivo",
      description: "Creamos soluciones que generan un impacto real y positivo en la sociedad y las organizaciones."
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos de la mano con nuestros clientes como socios estratégicos en su transformación digital."
    }
  ];

  const team = [
    {
      name: "Dr. Carlos Mendoza",
      role: "CEO & Fundador",
      expertise: "IA y Transformación Digital",
      experience: "15+ años en tecnología"
    },
    {
      name: "Ing. María González",
      role: "CTO",
      expertise: "Arquitectura de Software",
      experience: "12+ años en desarrollo"
    },
    {
      name: "Lic. Roberto Silva",
      role: "Director de Innovación",
      expertise: "Automatización y RPA",
      experience: "10+ años en procesos"
    },
    {
      name: "Dra. Ana Rodríguez",
      role: "Directora de IA",
      expertise: "Machine Learning",
      experience: "8+ años en IA"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Acerca de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Nosotros
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos pioneros en transformación digital, comprometidos con impulsar el crecimiento inteligente de empresas y gobiernos a través de la innovación tecnológica.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Impulsar el crecimiento inteligente de empresas y gobiernos mediante soluciones digitales innovadoras que integran inteligencia artificial, automatización y tecnología de vanguardia para transformar procesos, optimizar decisiones y mejorar la experiencia de usuarios y ciudadanos.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Eye size={24} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en transformación digital en América Latina, reconocida por nuestra capacidad de innovación, excelencia en el servicio y el impacto positivo que generamos en la sociedad a través de la tecnología.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <value.icon size={32} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestro Equipo</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-1">{member.expertise}</p>
                  <p className="text-xs text-gray-500">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Stats */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Proyectos completados</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Soporte técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

