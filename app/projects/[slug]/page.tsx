import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/app/lib/db/queries";
import ImageCarousel from "@/components/ImageCarousel";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable",
    };
  }

  return {
    title: `${project.name} - Portfolio`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const categoryColor = project.category === "web" ? "blue" : "purple";
  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.imageUrl];

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Navigation retour */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href={`/${project.category}`}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          Retour aux projets {project.category === "web" ? "Web" : "Design"}
        </Link>
      </div>

      {/* En-tête du projet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              project.category === "web"
                ? "bg-blue-100 text-blue-800"
                : "bg-purple-100 text-purple-800"
            }`}
          >
            {project.category === "web" ? "Développement Web" : "Graphisme"}
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {project.name}
          </h1>
        </div>

        {/* Description détaillée */}
        {project.longDescription && (
          <section className="max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="prose prose-lg max-w-none text-gray-600 whitespace-pre-line">
              {project.longDescription}
            </div>
          </section>
        )}

        {/* Carrousel d'images */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <ImageCarousel images={images} projectName={project.name} />
        </section>

        {/* Liens, actions et technologies - alignés horizontalement */}
        <section className="flex flex-wrap items-center justify-center gap-8 mb-6">
          {/* Boutons */}
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 bg-${categoryColor}-600 text-white font-medium rounded-lg hover:bg-${categoryColor}-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center`}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Voir la démo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Voir sur GitHub
              </a>
            )}
          </div>

          {/* Technologies utilisées */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex items-center gap-4 sm:flex-nowrap flex-wrap">
              <h2 className="text-xl font-bold text-gray-900 whitespace-nowrap">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-${categoryColor}-50 text-${categoryColor}-700 rounded-lg font-medium border border-${categoryColor}-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      </section>


      {/* Call to action */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Intéressé par mon travail ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            N'hésitez pas à explorer mes autres projets ou à me contacter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${project.category}`}
              className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Voir plus de projets
            </Link>
            <a
              href="mailto:peyreguillaume34@gmail.com"
              className={`px-8 py-4 bg-${categoryColor}-600 text-white font-medium rounded-lg hover:bg-${categoryColor}-700 transition-colors shadow-lg hover:shadow-xl`}
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
