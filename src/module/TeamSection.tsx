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
        name: "Danilo",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Work/Gerencia/danilo.webp",
        linkedin: "cdcddcd",
        phone: "+593 99 503 1688"

      },
      {
        name: "Geovanny Cevallos ",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Work/Gerencia/geovany.jpg",
        linkedin: "",
        phone: "+593 93 948 2058"
      },
      {
        name: "Dennis Meza",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Work/Gerencia/deniis.jpg",
        linkedin: "",
        phone: "+593 99 984 2558"
      },
    ]
  },
  {
    name: "Consultores",
    members: [
      {
        name: "Samantha Izurieta ",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Work/Consultores/sama.jpg",
        linkedin: "",
        phone: "+593 99 630 7400"
      },
      {
        name: "Gabriela  Reinoso ",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Work/Consultores/gaby.webp",
        linkedin: "",
        phone: "+593 98 350 2996"
      },
      {
        name: "Liliana Chuncha",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Work/Consultores/lili.jpg",
        linkedin: "",
        phone: "+593 99 592 9331"
      },
      {
        name: "Josselyn Sares",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Work/Consultores/jos.jpg",
        linkedin: "",
        phone: ""
      },
      {
        name: "Romina Moreano ",
        position: "CEO & Founder",
        desc: "20+ años liderando transformaciones digitales",
        image: "/Work/Consultores/romy.webp",
        linkedin: "",
        phone: ""
      },
    ]
  },
  {
    name: "Desarrolladores",

    members: [
      {
        name: "Franklin Cárdenas",
        position: "Senior Programmer",
        desc: "Experto en desarrollo de Backend - Fronted",
        image: "/Work/Desarrolladores/image.png",
        linkedin: "",
        phone: "+593 98 794 4867"
      }, {
        name: "Josué López",
        position: "Senior Programmer",
        desc: "Experto en desarrollo de Backend - Fronted",
        image: "https://avatars.githubusercontent.com/u/135351568?v=4",
        linkedin: "https://www.linkedin.com/in/thiag0/",
        phone: "+593 93 929 4943"
      },
      {
        name: "Hamilton Jumbo",
        position: "Junior Programmer",
        desc: "Experto en desarrollo de Backend - Fronted",
        image: "/Work/Desarrolladores/Hami.webp",
        linkedin: "https://www.linkedin.com/in/hamilton-jumbo-b24a97330/",
        phone: "+593 99 503 1688"
      },
      {
        name: "Henry Cortez ",
        position: "Junior Programmer",
        desc: "Experto en desarrollo de Backend - Fronted",
        image: "/Work/Desarrolladores/henry.webp",
        linkedin: "",
        phone: "+593 99 727 3092"
      },
    ]
  },
  {
    name: "Especialistas",
    members: [
      {
        name: "",
        position: "",
        desc: "",
        image: "",
        linkedin: "",
        phone: ""
      },
      {
        name:"",
        position: "",
        desc: "",
        image: "",
        linkedin: "",
        phone: ""
      },
      {
        name: "",
        position: "",
        desc: "",
        image: "",
        linkedin: "",
        phone: ""
      },
    ]
  },
  {
    name: "Comercialistas",
    members: [
      {
        name: "Fausto Aragon ",
        position: "Junior Programmer",
        desc: "Administrativo en Comercio",
        image: "/Work/Desarrolladores/image.png",
        linkedin: "",
        phone: "0988635070"
      },
    ]
  },
];

departments[0].members = departments.slice(1).flatMap(dept => dept.members);

export default function TeamSection() {
  const [activeDept, setActiveDept] = useState("Todos");
  const currentMembers = departments.find(dept => dept.name === activeDept)?.members || [];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
      <section className="py-20 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto">
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
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {currentMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl 
                  transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[3/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 
                      group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t 
                  from-[#2B8AA7]/95 via-[#2B8AA7]/40 to-transparent pt-20 pb-6 px-6
                  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="font-medium text-yellow-300 mb-3">{member.position}</p>
                  <p className="text-sm text-white opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 leading-relaxed"
                  >
                    {member.desc}
                  </p>
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500"
                  >
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center text-white hover:text-yellow-300 transition-colors"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                          />
                        </svg>
                        <span className="ml-2">{member.phone}</span>
                      </a>
                    )}
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