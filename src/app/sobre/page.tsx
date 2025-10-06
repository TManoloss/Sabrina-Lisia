import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

export default function SobrePage() {
  return (
    <div className="pt-32 pb-16">
      {/* Hero */}
      <section className="container-custom mb-16">
        <SectionTitle 
          subtitle="CONHEÇA A ARQUITETA"
          title="Sobre Sabrina Lisia"
          centered
        />
      </section>

      {/* Missão e Visão */}
      <section className="container-custom mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-6">Minha Filosofia</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Acredito na importância de pensar a arquitetura para as pessoas e na criação de valores duradouros através de projetos integrados. Junto minhas referências de paisagens naturais, artes plásticas, fotografia, cinema e música, até chegar a memórias afetivas e sensações táteis, visuais e olfativas para alcançar resultados mais criativos e eficientes.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Minha missão é traduzir as necessidades e identidade dos meus clientes em projetos funcionais e únicos que reflitam sua essência.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Atuo em três principais frentes: Residencial, Comercial/Corporativo e Institucional. Elaboro projetos para construções e reformas, atuando desde o processo de projeto até a obra finalizada.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-balaio-green/20" />
            <Image
              src="/Sabrina/Perfil 2.png"
              alt="Sabrina Lisia"
              fill
              className="object-cover"
            />
            {/* Placeholder para imagem do estúdio */}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-16 mb-24">
        <div className="container-custom">
          <h2 className="font-serif text-4xl text-center mb-12">Meus Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-balaio-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Pessoas em Primeiro Lugar</h3>
              <p className="text-gray-600">
                Acreditamos que a arquitetura deve servir às pessoas, criando espaços que melhorem a qualidade de vida.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-balaio-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Criatividade e Inovação</h3>
              <p className="text-gray-600">
                Buscamos soluções criativas e inovadoras, sempre atentos às tendências e novas tecnologias.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-balaio-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Qualidade e Excelência</h3>
              <p className="text-gray-600">
                Comprometimento total com a qualidade em cada detalhe, do projeto à execução final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="container-custom mb-24">
        <h2 className="font-serif text-4xl text-center mb-12">Meu Processo</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-balaio-green text-white rounded-full mx-auto mb-4 flex items-center justify-center font-serif text-xl">
              1
            </div>
            <p className="text-gray-600 text-sm">
              Entendemos suas necessidades, desejos e orçamento para o projeto.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-balaio-green text-white rounded-full mx-auto mb-4 flex items-center justify-center font-serif text-xl">
              2
            </div>
            <h3 className="font-serif text-xl mb-2">Conceito</h3>
            <p className="text-gray-600 text-sm">
              Desenvolvemos o conceito do projeto, alinhando estética e funcionalidade.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-balaio-green text-white rounded-full mx-auto mb-4 flex items-center justify-center font-serif text-xl">
              3
            </div>
            <h3 className="font-serif text-xl mb-2">Projeto</h3>
            <p className="text-gray-600 text-sm">
              Elaboramos todos os detalhes técnicos e executivos do projeto.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-balaio-green text-white rounded-full mx-auto mb-4 flex items-center justify-center font-serif text-xl">
              4
            </div>
            <h3 className="font-serif text-xl mb-2">Execução</h3>
            <p className="text-gray-600 text-sm">
              Acompanhamos a obra até a entrega final do seu projeto.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-balaio-green text-white py-16">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl mb-6">
            Vamos Criar Algo Incrível Juntos?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar seus sonhos em realidade.
          </p>
          <Link href="/contato" className="btn-primary bg-white text-balaio-dark hover:bg-white/90">
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}