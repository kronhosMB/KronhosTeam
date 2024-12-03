'use client';

import React from "react";

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-cover transition-transform duration-300 hover:scale-101" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 hover:text-indigo-600">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <a
          href={link}
          className="text-blue-600 hover:text-indigo-800 mt-2 inline-block transition-colors duration-300"
        >
          Más información...
        </a>
      </div>
    </div>
  );
};

export default Card;
