'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  project: string;
  images: [string, string]; // Duas imagens por depoimento
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "A casa na praia sempre foi um sonho de criança e, ao falar com a Sabrina, parecia que nos conhecíamos desde essa época. As conversas para o projeto foram sensacionais e a obra foi conduzida com maestria! Obrigado por ajudarem a realizar meu sonho.",
    author: "Michel",
    project: "Casa Barra do Una",
    images: ['/images/testimonial-1a.jpg', '/images/testimonial-1b.jpg'],
  },
  {
    id: 2,
    quote: "Projeto surpreendente e maravilhoso realizado pela Sabrina! A cada dia sentimos que os espaços cumprem bem seus propósitos, tudo foi pensado de acordo com as nossas necessidades. Deixamos aqui nossos agradecimento à toda Equipe e aos profissionais envolvidos!",
    author: "Ingrid e Raul",
    project: "Apartamento Vila Leopoldina",
    images: ['/images/testimonial-2a.jpg', '/images/testimonial-2b.jpg'],
  },
  {
    id: 3,
    quote: "A parceria com a Sabrina foi ótima! Sempre aberta a troca de ideias e trazendo soluções criativas excelentes e de muito bom gosto! O resultado superou nossas expectativas.",
    author: "João",
    project: "Apartamento Nord",
    images: ['/images/testimonial-3a.jpg', '/images/testimonial-3b.jpg'],
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];
  const isEven = currentIndex % 2 === 0;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-balaio-dark mb-4">
            O QUE DIZEM SOBRE A SABRINA
          </h2>
          <div className="w-24 h-0.5 bg-balaio-green mx-auto mt-6"></div>
        </div>

        {/* Conteúdo Alternado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
              {/* Imagens */}
              <div className={`grid grid-cols-2 gap-4 ${!isEven ? 'lg:col-start-2' : ''}`}>
                {/* Imagem 1 */}
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-balaio-dark/10 to-transparent z-10" />
                  {/* Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-balaio-green/30 to-balaio-beige" />
                  {/* Descomente quando tiver as imagens:
                  <Image
                    src={currentTestimonial.images[0]}
                    alt={`${currentTestimonial.project} - Imagem 1`}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>

                {/* Imagem 2 */}
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-balaio-dark/10 to-transparent z-10" />
                  {/* Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-balaio-beige to-balaio-green/30" />
                  {/* Descomente quando tiver as imagens:
                  <Image
                    src={currentTestimonial.images[1]}
                    alt={`${currentTestimonial.project} - Imagem 2`}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>

              {/* Texto do Depoimento */}
              <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="max-w-xl">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-balaio-green/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-600 italic leading-relaxed mb-8">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="font-semibold text-balaio-dark text-lg mb-1">
                      {currentTestimonial.author}
                    </p>
                    <p className="text-gray-500 italic">
                      {currentTestimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navegação */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-balaio-green text-balaio-green hover:bg-balaio-green hover:text-white transition-all flex items-center justify-center"
            aria-label="Depoimento anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-balaio-green w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-balaio-green text-balaio-green hover:bg-balaio-green hover:text-white transition-all flex items-center justify-center"
            aria-label="Próximo depoimento"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
