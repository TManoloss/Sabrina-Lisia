'use client';

import { useState } from 'react';
import Image from 'next/image';

interface RenderCategory {
  title: string;
  images: string[];
}

const renderCategories: RenderCategory[] = [
  {
    title: 'Banheiro',
    images: [
      '/renders/banheiro/banheiro-1.png',
      '/renders/banheiro/banheiro-2.png',
    ],
  },
  {
    title: 'Sala Praia',
    images: [
      '/renders/sala-praia/sala-praia-1.png',
      '/renders/sala-praia/sala-praia-2.png',
      '/renders/sala-praia/sala-praia-3.png',
      '/renders/sala-praia/sala-praia-4.png',
      '/renders/sala-praia/sala-praia-5.png',
      '/renders/sala-praia/sala-praia-6.png',
    ],
  },
  {
    title: 'Suíte Freijó',
    images: [
      '/renders/suite-freijo/suite-freijo-1.png',
      '/renders/suite-freijo/suite-freijo-2.png',
    ],
  },
];

export default function RendersGallery() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section className="section-padding bg-balaio-beige">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-balaio-green mb-2 font-medium">
            NOSSOS RENDERS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-balaio-dark">
            Visualize Seus Sonhos
          </h2>
          <div className="w-24 h-0.5 bg-balaio-green mx-auto mt-6"></div>
        </div>

        {/* Tabs de Categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {renderCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === index
                  ? 'bg-balaio-green text-white shadow-lg'
                  : 'bg-white text-balaio-dark hover:bg-balaio-green/10'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Galeria de Imagens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCategories[selectedCategory].images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <Image
                src={image}
                alt={`${renderCategories[selectedCategory].title} - ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-balaio-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Contador de Imagens */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            {renderCategories[selectedCategory].images.length} render
            {renderCategories[selectedCategory].images.length > 1 ? 's' : ''} disponíve
            {renderCategories[selectedCategory].images.length > 1 ? 'is' : 'l'}
          </p>
        </div>
      </div>
    </section>
  );
}
