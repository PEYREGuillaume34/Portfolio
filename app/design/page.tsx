import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByCategory, type Project } from "../lib/db/queries";

export const metadata = {
  title: "Graphisme - Portfolio",
  description: "Mes créations graphiques : identités visuelles, illustrations, logos et designs.",
};

export default async function DesignPage() {
  const projects = await getProjectsByCategory('design') as Project[];

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero de la page */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Graphisme <span className="text-purple-600">&</span> Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mon travail de graphiste : identités visuelles, illustrations, logos et créations diverses.
            Chaque projet raconte une histoire unique.
          </p>
        </div>
      </section>

      {/* Grille de projets */}
      <ProjectGrid 
        projects={projects}
        emptyMessage="Aucun projet de graphisme pour le moment. Revenez bientôt !"
      />
    </main>
  );
}
