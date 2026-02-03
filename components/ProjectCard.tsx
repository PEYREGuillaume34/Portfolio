import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  id: number;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[] | null;
}

export default function ProjectCard({
  slug,
  name,
  description,
  imageUrl,
  category,
  technologies,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group">
      <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image du projet */}
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badge catégorie */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              category === 'web' 
                ? 'bg-blue-600 text-white' 
                : 'bg-purple-600 text-white'
            }`}>
              {category === 'web' ? 'Web' : 'Design'}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 text-gray-500 text-xs">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
