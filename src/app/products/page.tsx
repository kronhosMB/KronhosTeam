'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, ChevronUp, Star, Database, Shield } from 'lucide-react';

export default function PageProducts() {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const toggleProduct = (index: number) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };

  const products = [
    {
      title: 'Kronhos ERP',
      description: 'Sistema integral de gestión empresarial para optimizar sus procesos de negocio',
      icon: '/Images/KR.png',
      features: ['Gestión financiera', 'Control de inventario', 'Reportes en tiempo real'],
      details: {
        beneficios: [
          'Reducción de costos operativos',
          'Mejora en la toma de decisiones',
          'Automatización de procesos'
        ],
        caracteristicas: [
          'Dashboard personalizable',
          'Integración con otros sistemas',
          'Reportes avanzados'
        ],
        stats: [
          { icon: <Database className="w-5 h-5 text-blue-500" />, value: '99.9%', label: 'Uptime' },
          { icon: <Shield className="w-5 h-5 text-green-500" />, value: '100%', label: 'Seguro' },
          { icon: <Star className="w-5 h-5 text-yellow-500" />, value: '4.9', label: 'Rating' }
        ]
      }
    },
    {
      title: 'Kronhos Móvil',
      description: 'Aplicación móvil para acceder a funcionalidades esenciales en cualquier momento',
      icon: '/Images/kronhosMovil.png',
      features: ['Acceso remoto', 'Notificaciones', 'Interfaz intuitiva'],
      details: {
        beneficios: [
          'Acceso desde cualquier lugar',
          'Respuesta inmediata',
          'Mayor productividad'
        ],
        caracteristicas: [
          'Interfaz adaptativa',
          'Notificaciones push',
          'Sincronización en tiempo real'
        ],
        stats: [
          { icon: <Database className="w-5 h-5 text-blue-500" />, value: '24/7', label: 'Disponible' },
          { icon: <Shield className="w-5 h-5 text-green-500" />, value: '100%', label: 'Seguro' },
          { icon: <Star className="w-5 h-5 text-yellow-500" />, value: '4.8', label: 'Rating' }
        ]
      }
    },
    {
      title: 'Kronhos Picking',
      description: 'Solución móvil especializada para gestión de inventario y picking',
      icon: '/Images/KronhosPicking.png',
      features: ['Control de stock', 'Escaneo QR', 'Trazabilidad'],
      details: {
        beneficios: [
          'Optimización de almacén',
          'Reducción de errores',
          'Control preciso de inventario'
        ],
        caracteristicas: [
          'Lectura de códigos QR/barras',
          'Gestión de ubicaciones',
          'Reportes de trazabilidad'
        ],
        stats: [
          { icon: <Database className="w-5 h-5 text-blue-500" />, value: '99.9%', label: 'Preciso' },
          { icon: <Shield className="w-5 h-5 text-green-500" />, value: '100%', label: 'Seguro' },
          { icon: <Star className="w-5 h-5 text-yellow-500" />, value: '4.7', label: 'Rating' }
        ]
      }
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <h1 className="text-4xl font-bold text-center text-[#2B8AA7] mb-12 animate-fade-up">
          PRODUCTOS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="relative transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={`
                bg-white rounded-xl shadow-lg transition-all duration-500 animate-fade-up h-full
                ${hoveredProduct === index ? 'shadow-2xl' : ''}
                ${expandedProduct === index ? 'z-20' : 'z-10'}
              `}
              style={{
                animationDelay: `${index * 200}ms`,
                position: 'relative'
              }}>
                <div className="p-6 flex flex-col h-full">
                  <div className="relative">
                    <Image
                      src={product.icon}
                      alt={product.title}
                      width={128}
                      height={128}
                      className={`
                        mx-auto mb-6 transition-all duration-500
                        ${hoveredProduct === index ? 'transform scale-110' : ''}
                      `}
                      priority
                    />
                  </div>
                  
                  <h2 className="text-xl font-semibold text-[#2B8AA7] mb-4 text-center">
                    {product.title}
                  </h2>

                  <p className="text-gray-600 mb-6 text-center">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {product.details.stats.map((stat, i) => (
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
                    {product.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className={`
                          flex items-center text-gray-500 transition-all duration-300
                          ${hoveredProduct === index ? 'transform translate-x-2' : ''}
                        `}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"/>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => toggleProduct(index)}
                    className={`
                      w-full bg-[#2B8AA7] text-white py-2 px-4 rounded-lg flex items-center justify-center 
                      group hover:bg-[#1f7a96] transition-all duration-300 mt-auto
                      ${hoveredProduct === index ? 'transform scale-105' : ''}
                    `}
                  >
                    {expandedProduct === index ? (
                      <>Menos información <ChevronUp className="ml-2 w-4 h-4 animate-bounce" /></>
                    ) : (
                      <>Más información <ChevronDown className="ml-2 w-4 h-4 group-hover:animate-bounce" /></>
                    )}
                  </button>
                </div>
              </div>
              
              {expandedProduct === index && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-30"
                  onClick={() => setExpandedProduct(null)}
                >
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg"
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-down m-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-[#2B8AA7]">{product.title}</h3>
                        <button 
                          onClick={() => setExpandedProduct(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <ChevronUp className="w-6 h-6" />
                        </button>
                      </div>

                      <h3 className="font-semibold mb-3 text-[#2B8AA7]">Beneficios</h3>
                      <ul className="space-y-2 mb-4">
                        {product.details.beneficios.map((beneficio, i) => (
                          <li 
                            key={i} 
                            className="flex items-center text-gray-600 transition-all duration-300 hover:translate-x-2"
                          >
                            <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                            {beneficio}
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-semibold mb-3 text-[#2B8AA7]">Características Adicionales</h3>
                      <ul className="space-y-2">
                        {product.details.caracteristicas.map((caracteristica, i) => (
                          <li 
                            key={i} 
                            className="flex items-center text-gray-600 transition-all duration-300 hover:translate-x-2"
                          >
                            <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                            {caracteristica}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}