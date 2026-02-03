import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { getFeaturedProjects, type Project } from "./lib/db/queries";

export default async function Home() {
  // Récupération des projets featured depuis la base de données
  const featuredProjects = (await getFeaturedProjects()) as Project[];

  return (
    <main>
      {/* Section Hero - Présentation */}
      <Hero />

      {/* Section Projets Mis en Avant */}
      {featuredProjects.length > 0 && (
        <section className="bg-white">
          <ProjectGrid 
            projects={featuredProjects}
            title="Projets Mis en Avant"
          />
        </section>
      )}

      {/* Section Call to Action */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            N'hésitez pas à me contacter pour discuter de vos besoins en développement web ou en design graphique.
          </p>
          <a
            href="mailto:votre.email@example.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Me contacter
          </a>
        </div>
      </section>
    </main>
  );
}
