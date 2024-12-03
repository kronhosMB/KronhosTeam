'use client';
import { useState, FormEvent } from 'react';
import { BookOpen, Users, Calendar, ChevronDown, ChevronUp, ArrowRight, Clock, Star, Award } from 'lucide-react';

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  modalidad: string;
  comentario: string;
}

export default function PageTraining() {
  const [expandedTraining, setExpandedTraining] = useState<number | null>(null);
  const [hoveredTraining, setHoveredTraining] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    modalidad: '',
    comentario: ''
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const value = input.value.replace(/[^0-9]/g, '').slice(0, 13);
    setFormData({ ...formData, telefono: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    const phoneNumber = '+593984695669';
    const message = ` *NUEVA SOLICITUD DE CAPACITACIÓN* 
  
      *Detalles del Solicitante:*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  👤 *Nombre:* ${formData.nombre}
  🏢 *Empresa:* ${formData.empresa}
  📧 *Email:* ${formData.email}
  📞 *Teléfono:* ${formData.telefono}
  📚 *Modalidad:* ${formData.modalidad}
  
  💭 *Comentario:*
  ${formData.comentario}`;
  
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      modalidad: '',
      comentario: ''
    });
  };

  const trainings = [
    {
      title: 'Capacitación Inicial',
      description: 'Introducción completa a los sistemas Kronhos y sus funcionalidades básicas',
      icon: <BookOpen className="w-12 h-12 text-[#2B8AA7]" />,
      features: ['Fundamentos del sistema', 'Navegación básica', 'Configuración inicial'],
      details: {
        duracion: '16 horas',
        modalidad: 'Presencial/Virtual',
        nivel: 'Básico',
        stats: [
          { icon: <Clock className="w-5 h-5 text-blue-500" />, value: '16h', label: 'Duración' },
          { icon: <Users className="w-5 h-5 text-green-500" />, value: '100%', label: 'Práctica' },
          { icon: <Award className="w-5 h-5 text-yellow-500" />, value: '4.9', label: 'Rating' }]
      }
    },
    {
      title: 'Capacitación Avanzada',
      description: 'Profundización en características avanzadas y optimización del sistema',
      icon: <Users className="w-12 h-12 text-[#2B8AA7]" />,
      features: ['Configuraciones avanzadas', 'Reportes personalizados', 'Integración de módulos'],
      details: {
        duracion: '24 horas',
        modalidad: 'Presencial',
        nivel: 'Avanzado',
        stats: [
          { icon: <Clock className="w-5 h-5 text-blue-500" />, value: '24h', label: 'Duración' },
          { icon: <Users className="w-5 h-5 text-green-500" />, value: '100%', label: 'Práctica' },
          { icon: <Award className="w-5 h-5 text-yellow-500" />, value: '4.9', label: 'Rating' }]
      }
    },
    {
      title: 'Workshops Especializados',
      description: 'Sesiones prácticas enfocadas en funcionalidades específicas',
      icon: <Calendar className="w-12 h-12 text-[#2B8AA7]" />,
      features: ['Casos de uso reales', 'Solución de problemas', 'Mejores prácticas'],
      details: {
        duracion: '8 horas',
        modalidad: 'Virtual',
        nivel: 'Intermedio',
        stats: [
          { icon: <Clock className="w-5 h-5 text-blue-500" />, value: '8h', label: 'Duración' },
          { icon: <Users className="w-5 h-5 text-green-500" />, value: '100%', label: 'Práctica' },
          { icon: <Award className="w-5 h-5 text-yellow-500" />, value: '4.9', label: 'Rating' }]
      }
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-4xl font-bold text-center text-[#2B8AA7] mb-8 animate-fade-up">
          CAPACITACIONES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="relative transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredTraining(index)}
              onMouseLeave={() => setHoveredTraining(null)}
            >
              <div className={`
                bg-white rounded-xl shadow-lg transition-all duration-500 animate-fade-up h-full
                ${hoveredTraining === index ? 'shadow-2xl' : ''}
              `}
                style={{
                  animationDelay: `${index * 200}ms`
                }}>
                <div className="p-6 flex flex-col h-full">
                  <div className={`
                    flex justify-center mb-6 transition-all duration-500
                    ${hoveredTraining === index ? 'transform scale-110' : ''}
                  `}>
                    {training.icon}
                  </div>

                  <h2 className="text-xl font-semibold text-[#2B8AA7] mb-4 text-center">
                    {training.title}
                  </h2>

                  <p className="text-gray-600 mb-6 text-center">
                    {training.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {training.details.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="text-center p-2 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100"
                      >
                        <div className="flex justify-center mb-1">{stat.icon}</div>
                        <div className="font-semibold">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {training.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`
                          flex items-center text-gray-500 transition-all duration-300
                          ${hoveredTraining === index ? 'transform translate-x-2' : ''}
                        `}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setExpandedTraining(index === expandedTraining ? null : index)}
                    className={`
                      w-full bg-[#2B8AA7] text-white py-2 px-4 rounded-lg flex items-center justify-center 
                      group hover:bg-[#1f7a96] transition-all duration-300 mt-auto
                      ${hoveredTraining === index ? 'transform scale-105' : ''}
                    `}
                  >
                    {expandedTraining === index ? (
                      <>Menos información <ChevronUp className="ml-2 w-4 h-4 animate-bounce" /></>
                    ) : (
                      <>Más información <ChevronDown className="ml-2 w-4 h-4 group-hover:animate-bounce" /></>
                    )}
                  </button>
                </div>
              </div>

              {expandedTraining === index && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-30"
                  onClick={() => setExpandedTraining(null)}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg"
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-down m-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-[#2B8AA7]">{training.title}</h3>
                        <button
                          onClick={() => setExpandedTraining(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <ChevronUp className="w-6 h-6" />
                        </button>
                      </div>

                      <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-[#2B8AA7]">Detalles del Curso</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Duración</p>
                            <p className="font-semibold">{training.details.duracion}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Modalidad</p>
                            <p className="font-semibold">{training.details.modalidad}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg col-span-2">
                            <p className="text-sm text-gray-500">Nivel</p>
                            <p className="font-semibold">{training.details.nivel}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2 text-[#2B8AA7]">Contenido del Curso</h3>
                        <ul className="space-y-2">
                          {training.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center text-gray-600 transition-all duration-300 hover:translate-x-2"
                            >
                              <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-up">
            <h2 className="text-2xl font-bold text-[#2B8AA7] mb-4 text-center">
              Solicita tu Capacitación
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B8AA7] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B8AA7] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B8AA7] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={10}
                    value={formData.telefono}
                    onChange={handleInput}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B8AA7] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Modalidad
                </label>
                <select
                  value={formData.modalidad}
                  onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B8AA7] focus:border-transparent"
                  required
                >
                  <option value="">Seleccione una modalidad</option>
                  <option value="Virtual">Virtual</option>
                  <option value="Física">Física</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comentario
                </label>
                <textarea
                  value={formData.comentario}
                  onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B8AA7] focus:border-transparent"
                  rows={2}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2B8AA7] text-white py-2 px-4 rounded-lg hover:bg-[#1f7a96] transition-colors duration-300 flex items-center justify-center group"
              >
                Enviar Solicitud
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}