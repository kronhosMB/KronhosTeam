'use client';

import React from "react";
import Card from "@/components/Cards/ImageCard";
import {Zap, BookOpen, LineChart ,Smartphone, PackageSearch, Building2 } from 'lucide-react';


const CardsSection = () => {
  const services = [
    { title: 'Implementación ERP', desc: 'Sistemas integrados adaptados a su industria', icon: <Zap size={40} /> },
    { title: 'Business AI', desc: 'Inteligencia artificial para decisiones empresariales', icon: <LineChart size={40} /> },
    { title: 'Consultoría', desc: 'Asesoramiento experto en transformación digital', icon: <BookOpen size={40}/> },
    { title: 'Kronhos Mobile', desc: 'Aplicación móvil para acceder a funcionalidades esenciales en cualquier momento', icon: <Smartphone size={40}/> },
    { title: 'Kronhos Picking', desc: 'Solución móvil especializada para gestión de inventario y picking', icon: <PackageSearch size={40} /> },
    { title: 'Kronhos erp', desc: 'Sistema integral de gestión empresarial para optimizar sus procesos de negocio', icon: <Building2 size={40} /> }

  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 text-[#2B8AA7]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2B8AA7] text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;