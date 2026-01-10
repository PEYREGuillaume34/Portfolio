import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByCategory, type Project } from "../lib/db/queries";

export const metadata = {
  title: "Développement Web - Portfolio",
  description: "Mes projets de développement web : applications, sites, APIs et plus encore.",
};

export default async function WebPage() {
  const projects = await getProjectsByCategory('web') as Project[];

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero de la page */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Développement <span className="text-blue-600">Web</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la conception à la mise en production, découvrez mes projets de développement web.
            Applications modernes, sites performants et APIs robustes.
          </p>
        </div>
      </section>

      {/* Grille de projets */}
      <ProjectGrid 
        projects={projects}
        emptyMessage="Aucun projet web pour le moment. Revenez bientôt !"
      />
    </main>
  );
}
