'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Imagens do carrossel usando renders reais
const carouselImages = [
  ['/renders/banheiro/banheiro-1.png', '/renders/banheiro/banheiro-2.png'],
  ['/renders/sala-praia/sala-praia-1.png', '/renders/sala-praia/sala-praia-2.png'],
  ['/renders/suite-freijo/suite-freijo-1.png', '/renders/suite-freijo/suite-freijo-2.png'],
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="container-custom relative z-20 py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Carrossel de Imagens */}
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-2 gap-4"
              >
                {carouselImages[currentSlide].map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-balaio-dark/20 to-transparent z-10" />
                    <Image
                      src={img}
                      alt={`Projeto ${currentSlide * 2 + idx + 1}`}
                      fill
                      className="object-cover"
                      priority={currentSlide === 0}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx
                      ? 'bg-balaio-green w-8'
                      : 'bg-gray-400'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Texto */}
          <div className="text-left lg:pl-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 text-balaio-dark leading-tight"
            >
              ESCRITÓRIO DE<br />
              ARQUITETURA<br />
              E DESIGN<br />
              
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
            >
              Criando espaços únicos que traduzem a identidade e necessidades dos meus clientes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/portfolio" className="btn-primary">
                Ver Portfolio
              </Link>
              <Link href="/contato" className="btn-outline">
                Entre em Contato
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
