'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Imagens dos projetos usando renders reais
const projectImages = [
  { src: '/renders/banheiro/banheiro-1.png', alt: 'Banheiro Projeto 1' },
  { src: '/renders/banheiro/banheiro-2.png', alt: 'Banheiro Projeto 2' },
  { src: '/renders/sala-praia/sala-praia-1.png', alt: 'Sala Praia Projeto 1' },
  { src: '/renders/sala-praia/sala-praia-2.png', alt: 'Sala Praia Projeto 2' },
  { src: '/renders/sala-praia/sala-praia-3.png', alt: 'Sala Praia Projeto 3' },
  { src: '/renders/sala-praia/sala-praia-4.png', alt: 'Sala Praia Projeto 4' },
  { src: '/renders/sala-praia/sala-praia-5.png', alt: 'Sala Praia Projeto 5' },
  { src: '/renders/sala-praia/sala-praia-6.png', alt: 'Sala Praia Projeto 6' },
  { src: '/renders/suite-freijo/suite-freijo-1.png', alt: 'Suíte Freijó Projeto 1' },
  { src: '/renders/suite-freijo/suite-freijo-2.png', alt: 'Suíte Freijó Projeto 2' },
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectImages.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Calcula quais imagens mostrar (3 visíveis)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projectImages.length;
      visible.push({ ...projectImages[index], index });
    }
    return visible;
  };

  return (
    <section className="section-padding bg-balaio-beige overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Carrossel */}
        <div className="relative">
          {/* Setas de Navegação */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-balaio-green hover:text-white transition-all -translate-x-1/2 lg:-translate-x-full lg:left-4"
            aria-label="Projeto anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-balaio-green hover:text-white transition-all translate-x-1/2 lg:translate-x-full lg:right-4"
            aria-label="Próximo projeto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Grid de Imagens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleImages().map((image, idx) => (
              <motion.div
                key={`${image.index}-${idx}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-balaio-dark/40 to-transparent z-10 group-hover:from-balaio-dark/60 transition-all" />
                
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {projectImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-balaio-green w-8'
                    : 'bg-gray-400 w-2 hover:bg-gray-500'
                }`}
                aria-label={`Ir para projeto ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
