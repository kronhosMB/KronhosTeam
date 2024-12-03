'use client';

import Carrousel from '@/Sections/Carrousel';
import Cards from '@/Sections/ImageCards';
import Card from '@/components/Cards/ImageCard'

export default function Home() {
  return (
    <>
      <h1 className='font-bold text-2xl p-5 ml-20'>
        Conoce nuestros servicios
      </h1>
      <div className='flex flex-wrap justify-center'>
      <Cards />
      </div>
      <h1 className='font-bold text-2xl p-5 ml-20'>
        Empresas que confian en nosotros
      </h1>
      <Carrousel />
    </>
  );
}