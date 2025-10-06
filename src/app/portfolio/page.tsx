import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/mdx';
import PortfolioFilters from './PortfolioFilters';

export default function PortfolioPage() {
  const allProjects = getAllProjects();

  return (
    <div className="pt-32 pb-16">
      {/* Header */}
      <section className="container-custom mb-16">
        <SectionTitle 
          subtitle="NOSSO TRABALHO"
          title="Portfolio de Projetos"
          centered
        />
        <p className="text-center text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Conheça alguns dos projetos que realizamos com dedicação e criatividade, 
          sempre pensando nas necessidades únicas de cada cliente.
        </p>
      </section>

      {/* Filtros */}
      <section className="container-custom mb-12">
        <PortfolioFilters projects={allProjects} />
      </section>
    </div>
  );
}