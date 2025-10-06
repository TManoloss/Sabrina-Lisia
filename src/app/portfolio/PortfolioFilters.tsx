'use client';

import { useState } from 'react';
import { ProjectData } from '@/lib/mdx';
import ProjectCard from '@/components/ProjectCard';

interface PortfolioFiltersProps {
  projects: ProjectData[];
}

export default function PortfolioFilters({ projects }: PortfolioFiltersProps) {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Residencial', 'Comercial', 'Institucional'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-balaio-green text-white'
                : 'bg-white border-2 border-balaio-dark/20 text-balaio-dark hover:border-balaio-green'
            }`}
          >
            {category === 'all' ? 'Todos' : category}
          </button>
        ))}
      </div>

      {/* Grid de Projetos Filtrados */}
      <div className="mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
