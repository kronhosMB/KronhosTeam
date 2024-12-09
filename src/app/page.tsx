'use client';

import Carrousel from '@/components/Sections/Carrousel';
import Cards from '@/components/Sections/ImageCards';

export default function Page() {
  return (
    <>
      <section className="relative h-screen md:h-[88vh] w-full flex items-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Videos/KronhosMainP.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>
      <h2 className="text-4xl font-bold text-[#2B8AA7] mb-4 text-center mt-10">
        Conoce nuestros servicios
      </h2>
      <div className='flex flex-wrap justify-center'>
        <Cards />
      </div>
      <h2 className="text-4xl font-bold text-[#2B8AA7] mb-4 text-center mt-10">
        Empresas que confian en nosotros
      </h2>
      <Carrousel />
    </>
  );
}