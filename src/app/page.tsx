import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/mdx';
import HeroCarousel from '@/components/HeroCarousel';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import RendersGallery from '@/components/RendersGallery';

export default function HomePage() {
  const projects = getAllProjects().slice(0, 6);

  return (
    <>
      {/* Hero Section com Carrossel */}
      <HeroCarousel />

      {/* Sobre Mim */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Título centralizado */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-balaio-green mb-2 font-medium">
              SOBRE MIM
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-balaio-dark mb-4">
              Sabrina Lísia
            </h2>
            <div className="w-24 h-0.5 bg-balaio-green mx-auto mt-6"></div>
          </div>

          {/* Layout: Imagem | Texto | Imagem */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Imagem Esquerda */}
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-t from-balaio-dark/10 to-transparent z-10" />
              <Image
                src="/Sabrina/Perfil.png"
                alt="Sabrina Lisia"
                fill
                className="object-cover"
              />
            </div>

            {/* Texto Central */}
            <div className="text-center px-4 lg:px-8 order-1 lg:order-2">
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Sou uma Designer de Interiores e Arquiteta  apaixonada por criar espaços que contam histórias. Acredito na <strong>importância de pensar a arquitetura para as pessoas</strong> e na criação de <strong>valores duradouros</strong> através de projetos integrados e personalizados.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Adoro transformar espaços em ambientes funcionais, acolhedores e cheios de personalidade, sempre buscando unir estética e conforto.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                Minha missão é traduzir as necessidades e identidade dos meus clientes em <strong>projetos funcionais e únicos</strong>.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                Atuo em principalmente na área de <strong>Design de Interiores</strong>.
              </p>
              <Link href="/sobre" className="btn-primary inline-block">
                Saiba Mais
              </Link>
            </div>

            {/* Imagem Direita */}
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-lg order-3">
              <div className="absolute inset-0 bg-gradient-to-t from-balaio-dark/10 to-transparent z-10" />
              <Image
                src="/renders/sala-praia/sala-praia-1.png"
                alt="Projeto de Sabrina Lisia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <TestimonialsSection />

      {/* Carrossel de Projetos */}
      <ProjectsCarousel />

   
      {/* Áreas de Atuação */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionTitle 
              subtitle="ÁREAS QUE ATUO"
              title="Como Posso Ajudar"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-balaio-dark/10 rounded-lg hover:border-balaio-green transition-colors">
              <div className="w-16 h-16 bg-balaio-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Residencial</h3>
              <p className="text-gray-600">
                Projetos de casas, apartamentos e reformas residenciais que refletem o estilo de vida dos moradores.
              </p>
            </div>
            <div className="text-center p-8 border border-balaio-dark/10 rounded-lg hover:border-balaio-green transition-colors">
              <div className="w-16 h-16 bg-balaio-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Comercial</h3>
              <p className="text-gray-600">
                Espaços corporativos, lojas e estabelecimentos que aliam funcionalidade e identidade da marca.
              </p>
            </div>
            <div className="text-center p-8 border border-balaio-dark/10 rounded-lg hover:border-balaio-green transition-colors">
              <div className="w-16 h-16 bg-balaio-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Institucional</h3>
              <p className="text-gray-600">
                Projetos para instituições de ensino, saúde e espaços públicos que priorizam acessibilidade e conforto.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Final */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Tem uma ideia?<br />
            Vamos conversar!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Vamos elaborar uma proposta especial para você e transformar seus sonhos em realidade.
          </p>
          <Link href="/contato" className="btn-primary text-lg px-12 py-4">
            Iniciar Projeto
          </Link>
        </div>
      </section>
    </>
  );
}