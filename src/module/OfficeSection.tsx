"use client"

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const offices = [
  {
    city: "Ambato",
    image: "/Office/empresa2.jpg",
    address: "Av. Cevallos y Mariano Egüez, Edificio Central, Piso 3",
    phone: "+593 3 123 4567",
    email: "ambato@empresa.com",
    schedule: "Lun - Vie: 8:30 - 17:30",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7985032891297!2d-78.6327131!3d-1.2752072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38392e2d63a9b%3A0xd29cee5e157a4cbd!2sKronhos%20Business%20Solutions%20-%20Software%20ERP!5e0!3m2!1ses!2sec!4v1680000000000!5m2!1ses!2sec",
    features: [
      "Espacios colaborativos",
      "Sala de capacitación",
      "Zona de descanso",
      "Internet de alta velocidad"
    ]
  },
  {
    city: "Guayaquil",
    image: "/Office/empresa3.jpg",
    address: "Av. Francisco de Orellana, World Trade Center, Torre A, Piso 12",
    phone: "+593 4 123 4567",
    email: "guayaquil@empresa.com",
    schedule: "Lun - Vie: 9:00 - 18:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7985032891297!2d-78.6327131!3d-1.2752072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38392e2d63a9b%3A0xd29cee5e157a4cbd!2sKronhos%20Business%20Solutions%20-%20Software%20ERP!5e0!3m2!1ses!2sec!4v1680000000000!5m2!1ses!2sec",
    features: [
      "Vista panorámica al río",
      "Salas de conferencia equipadas",
      "Centro de negocios",
      "Seguridad 24/7"
    ]
  },
  {
    city: "Quito",
    image: "/Office/image.png",
    address: "Av. 6 de Diciembre y Whymper, Edificio Cosmos, Piso 8",
    status: "coming-soon",
    inauguracionDate: "Enero 2025",
    phone: "+593 2 123 4567",
    email: "quito@empresa.com",
    schedule: "Próximamente",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7985032891297!2d-78.6327131!3d-1.2752072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38392e2d63a9b%3A0xd29cee5e157a4cbd!2sKronhos%20Business%20Solutions%20-%20Software%20ERP!5e0!3m2!1ses!2sec!4v1680000000000!5m2!1ses!2sec",
    features: [
      "Sala de reuniones moderna",
      "Área de coworking",
      "Estacionamiento privado",
      "Cafetería"
    ]
  },
];

export default function OfficeLocations() {
  const [activeOffice, setActiveOffice] = useState("Quito");
  const currentOffice = offices.find(office => office.city === activeOffice);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
      <section className="py-20 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B8AA7] mb-4">
              Nuestras Oficinas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ubicaciones estratégicas para estar más cerca de nuestros clientes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {offices.map((office) => (
              <button
                key={office.city}
                onClick={() => setActiveOffice(office.city)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeOffice === office.city
                    ? "bg-[#2B8AA7] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md"
                }`}
              >
                {office.city}
              </button>
            ))}
          </div>

          {currentOffice && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={currentOffice.image}
                    alt={`Oficina ${currentOffice.city}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {currentOffice.city}
                      </h3>
                      {currentOffice.status === 'coming-soon' && (
                        <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                          ¡Próxima Inauguración - {currentOffice.inauguracionDate}!
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#2B8AA7] flex-shrink-0" />
                    <p className="text-gray-600">{currentOffice.address}
                      {currentOffice.status === 'coming-soon' && (
                        <span className="text-yellow-600 font-medium ml-2">
                          ¡Inauguración {currentOffice.inauguracionDate}!
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-[#2B8AA7] flex-shrink-0" />
                    <p className="text-gray-600">{currentOffice.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-[#2B8AA7] flex-shrink-0" />
                    <p className="text-gray-600">{currentOffice.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-[#2B8AA7] flex-shrink-0" />
                    <p className="text-gray-600">{currentOffice.schedule}</p>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-[#2B8AA7] mb-3">
                      {currentOffice.status === 'coming-soon' ? 'Características próximas:' : 'Características de la oficina:'}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {currentOffice.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl bg-white h-[600px]">
                <iframe
                  src={currentOffice.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}