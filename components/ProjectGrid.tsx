import ProjectCard from './ProjectCard';
import { Project } from '@/app/lib/db/queries';

interface ProjectGridProps {
  projects: Project[];
  title?: string;
  emptyMessage?: string;
}

export default function ProjectGrid({ 
  projects, 
  title,
  emptyMessage = "Aucun projet pour le moment."
}: ProjectGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Titre de section (optionnel) */}
        {title && (
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h2>
        )}

        {/* Grille de projets */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">{emptyMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
