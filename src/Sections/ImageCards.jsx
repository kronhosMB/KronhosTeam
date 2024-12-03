'use client';

import React from "react";
import Card from "../components/Cards/ImageCard";

const CardsSection = () => {

  return (
    <main className="w-fit h-fit p-5 grid grid-cols-1 sm:grid-cols-2 gap-6 ml-6">

      <div className="p-5">
        <Card
          title="Card 1"
          description="Card Description"
          imageUrl="/Cards/E1.jpg"
          link="#"
          />
      </div>    
      
      <div className="p-5">
        <Card
          title="Card 2"
          description="Card Description"
          imageUrl="/Cards/E2.webp"
          link="#"
        />
      </div>
      
      <div className="p-5">
        <Card
          title="Card 3"
          description="Card Description"
          imageUrl="/Cards/E3.webp"
          link="#"
        />
      </div>
      
      <div className="p-5">
        <Card
          title="Card 4"
          description="Card Description"
          imageUrl="/Cards/E4.webp"
          link="#"
        />
      </div>

      <div className="p-5">
        <Card
          title="Card 5"
          description="Card Description"
          imageUrl="/Cards/E1.jpg"
          link="#"
        />
      </div>
        
      <div className="p-5">
    <Card
          title="Card 6"
          description="Card Description"
          imageUrl="/Cards/E5.webp"
          link="#"
        />
      </div>

  </main>
  );
};

export default CardsSection;
