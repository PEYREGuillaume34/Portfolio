import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Développeur Web <span className="text-blue-600">&</span> Graphiste
        </h1>

        {/* Sous-titre / Accroche */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Je crée des expériences digitales uniques, du code au design.
          Passionné par l'innovation et l'esthétique.
        </p>

        {/* Call-to-actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web"
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Voir mes projets Web
          </Link>
          <Link
            href="/design"
            className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Découvrir mes créations
          </Link>
        </div>

        {/* Badge ou info supplémentaire (optionnel) */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div>
            <span className="block text-2xl font-bold text-gray-900">10+</span>
            Projets réalisés
          </div>
          <div className="h-12 w-px bg-gray-300"></div>
          <div>
            <span className="block text-2xl font-bold text-gray-900">Ada Tech School</span>
            En formation
          </div>
        </div>
      </div>
    </section>
  );
}
