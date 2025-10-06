import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug, getAllProjects } from '@/lib/mdx';
import AnimatedImage from '@/components/AnimatedImage';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  return (
    <div className="pt-32 pb-16">
      {/* Hero Image */}
      <section className="container-custom mb-12">
        <div className="relative w-full aspect-[9/16] max-h-[80vh] rounded-lg overflow-hidden mx-auto">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-300" />
          )}
        </div>
      </section>

      {/* Informações do Projeto */}
      <section className="container-custom mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-wider text-balaio-green mb-2 font-medium">
              {project.category}
            </p>
            <h1 className="font-serif text-5xl mb-6">{project.title}</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-balaio-dark/10">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-gray-500 mb-1">Localização</dt>
                <dd className="font-medium">{project.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 mb-1">Ano</dt>
                <dd className="font-medium">{project.year}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 mb-1">Área</dt>
                <dd className="font-medium">{project.area}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 mb-1">Categoria</dt>
                <dd className="font-medium">{project.category}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Conteúdo do Projeto */}
      {project.content && (
        <section className="container-custom mb-16">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </section>
      )}

      {/* Galeria de Imagens */}
      {project.images && project.images.length > 0 && (
        <section className="container-custom mb-16">
          <h2 className="font-serif text-3xl mb-8 text-center">Galeria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <AnimatedImage
                key={index}
                src={image}
                alt={`${project.title} - Imagem ${index + 1}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Navegação */}
      <section className="container-custom">
        <div className="flex justify-between items-center pt-8 border-t border-balaio-dark/10">
          <Link 
            href="/portfolio"
            className="text-balaio-green hover:text-balaio-dark transition-colors font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Portfolio
          </Link>
          <Link 
            href="/contato"
            className="btn-primary"
          >
            Iniciar Seu Projeto
          </Link>
        </div>
      </section>
    </div>
  );
}