import { Target, Award, Users, Zap, LightbulbIcon, BookOpen, LineChart } from 'lucide-react';

export default function PageAbout() {
  const values = [
    { title: 'Innovación', desc: 'Desarrollo continuo de soluciones de vanguardia', icon: <LightbulbIcon /> },
    { title: 'Excelencia', desc: 'Compromiso con la más alta calidad en servicios', icon: <Award /> },
    { title: 'Cliente Primero', desc: 'Enfoque personalizado en cada necesidad empresarial', icon: <Users /> },
    { title: 'Sostenibilidad', desc: 'Prácticas empresariales responsables y duraderas', icon: <Target /> }
  ];

  const services = [
    { title: 'Implementación ERP', desc: 'Sistemas integrados adaptados a su industria', icon: <Zap /> },
    { title: 'Business AI', desc: 'Inteligencia artificial para decisiones empresariales', icon: <LineChart /> },
    { title: 'Consultoría', desc: 'Asesoramiento experto en transformación digital', icon: <BookOpen /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#2B8AA7] mb-6 animate-fade-up">
            Acerca de Kronhos ERP
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-up">
            Transformando negocios a través de soluciones tecnológicas innovadoras
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/Images/KR.png"
              alt="Kronhos ERP Mission"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="animate-fade-left">
            <h2 className="text-3xl font-bold text-[#2B8AA7] mb-6">Nuestra Misión</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse possimus pariatur reprehenderit nulla nisi eveniet asperiores, laboriosam error.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-right">
            <h2 className="text-3xl font-bold text-[#2B8AA7] mb-6">Nuestra Visión</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse possimus pariatur reprehenderit nulla nisi eveniet asperiores, laboriosam error.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/Images/KR.png"
              alt="Kronhos ERP Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2B8AA7] text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 text-[#2B8AA7]">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#2B8AA7] text-center mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2B8AA7] text-center mb-12">
            Nuestras Soluciones
          </h2>
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
    </div>
  );
}