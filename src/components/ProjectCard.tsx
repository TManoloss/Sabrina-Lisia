import Link from 'next/link';
import Image from 'next/image';
import { ProjectData } from '@/lib/mdx';

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/portfolio/${project.slug}`}
      className="group block"
    >
      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg mb-4">
        <div className="absolute inset-0 bg-balaio-green/20 group-hover:bg-balaio-green/40 transition-all duration-300 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-balaio-dark/60 to-transparent z-10" />
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
          <p className="text-sm uppercase tracking-wider mb-1 opacity-90">
            {project.category}
          </p>
          <h3 className="font-serif text-2xl group-hover:text-balaio-beige transition-colors">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{project.location}</span>
        <span>{project.year}</span>
      </div>
    </Link>
  );
}