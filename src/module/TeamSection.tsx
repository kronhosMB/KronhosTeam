"use client"

import React, { useState } from 'react';

const departments = [
  {
    name: "Todos",
    members: []
  },
  {
    name: "Gerencia",
    members: [
      {
        name: "Luis Piedra",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Workers/image.png"
      }
    ]
  },
  {
    name: "Ventas",
    members: [
      {
        name: "Ana Martinez",
        position: "Directora de Ventas",
        desc: "Experta en desarrollo de negocios",
        image: "/Workers/image.png"
      },
      {
        name: "Ana Martinez",
        position: "Directora de Ventas",
        desc: "Experta en desarrollo de negocios",
        image: "/Workers/image.png"
      },
    ]
  },
  {
    name: "Administrativos",
    members: [
      {
        name: "Laura Sánchez",
        position: "Directora Administrativa",
        desc: "Especialista en gestión empresarial",
        image: "/Workers/image.png"
      },
      {
        name: "Laura Sánchez",
        position: "Directora Administrativa",
        desc: "Especialista en gestión empresarial",
        image: "/Workers/image.png"
      },
      {
        name: "Laura Sánchez",
        position: "Directora Administrativa",
        desc: "Especialista en gestión empresarial",
        image: "/Workers/image.png"
      },
      {
        name: "Laura Sánchez",
        position: "Directora Administrativa",
        desc: "Especialista en gestión empresarial",
        image: "/Workers/image.png"
      },
      {
        name: "Laura Sánchez",
        position: "Directora Administrativa",
        desc: "Especialista en gestión empresarial",
        image: "/Workers/image.png"
      },
    ]
  },
  {
    name: "Desarrollo",
    members: [
      {
        name: "Miguel Torres",
        position: "Director de Tecnología",
        desc: "Líder en desarrollo de software",
        image: "/Workers/image.png"
      },
      {
        name: "Miguel Torres",
        position: "Director de Tecnología",
        desc: "Líder en desarrollo de software",
        image: "/Workers/image.png"
      },
      {
        name: "Miguel Torres",
        position: "Director de Tecnología",
        desc: "Líder en desarrollo de software",
        image: "/Workers/image.png"
      },
      {
        name: "Miguel Torres",
        position: "Director de Tecnología",
        desc: "Líder en desarrollo de software",
        image: "/Workers/image.png"
      },
    ]
  }
];

departments[0].members = departments.slice(1).flatMap(dept => dept.members);

export default function TeamSection() {
  const [activeDept, setActiveDept] = useState("Todos");

  const currentMembers = departments.find(dept => dept.name === activeDept)?.members || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B8AA7] mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce a los profesionales que hacen posible el éxito de nuestros clientes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.name}
                onClick={() => setActiveDept(dept.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeDept === dept.name
                    ? "bg-[#2B8AA7] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl 
                  transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 
                      group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                  from-[#2B8AA7]/95 to-transparent p-6 text-white transform transition-all 
                  duration-500 translate-y-4 group-hover:translate-y-0"
                >
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="font-medium text-yellow-300 mb-3">{member.position}</p>
                  <p className="text-sm opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 leading-relaxed"
                  >
                    {member.desc}
                  </p>
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500"
                  >
                    <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}