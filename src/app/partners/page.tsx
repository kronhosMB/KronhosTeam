import { ExternalLink, Building2, Shield, Users, ArrowRight } from 'lucide-react';

export default function PagePartners() {
  const partners = [
    {
      name: "SAP Partner",
      description: "Socio certificado para implementación y soporte de soluciones SAP",
      benefits: ["Certificación oficial", "Soporte premium", "Acceso prioritario"],
      icon: <Building2 className="w-16 h-16 text-[#2B8AA7]" />
    },
    {
      name: "Microsoft Partner",
      description: "Partner tecnológico para soluciones cloud y empresariales",
      benefits: ["Azure certified", "Integración .NET", "Soporte 24/7"],
      icon: <Shield className="w-16 h-16 text-[#2B8AA7]" />
    },
    {
      name: "AWS Partner",
      description: "Socio estratégico para servicios en la nube",
      benefits: ["Cloud expertise", "Soluciones escalables", "Seguridad avanzada"],
      icon: <Users className="w-16 h-16 text-[#2B8AA7]" />
    }
  ];

  const features = [
    "Certificaciones internacionales",
    "Soporte técnico especializado",
    "Acceso a recursos exclusivos",
    "Desarrollo conjunto de soluciones",
    "Beneficios comerciales"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#2B8AA7] mb-6 animate-fade-up">
            PARTNERS
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-up">
            Únete a nuestra red de socios estratégicos y potencia tu negocio con soluciones tecnológicas innovadoras
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-6">
                  {partner.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2B8AA7] text-center mb-4">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {partner.description}
                </p>
                <ul className="space-y-3">
                  {partner.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 text-[#2B8AA7] mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2B8AA7] text-center mb-12">
            Beneficios del Programa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg transform transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-6 h-6 text-[#2B8AA7] mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#2B8AA7] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para ser Partner?</h3>
              <p className="mb-6">Únete a nuestro programa de partners y accede a beneficios exclusivos</p>
              <button className="w-full bg-white text-[#2B8AA7] py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}