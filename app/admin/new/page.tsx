"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: 'web' as 'web' | 'design',
    description: '',
    longDescription: '',
    imageUrl: '',
    images: '',
    technologies: '',
    githubUrl: '',
    demoUrl: '',
    featured: false,
  });

  // Générer le slug automatiquement depuis le nom
  useEffect(() => {
    if (formData.name && !formData.slug) {
      const slug = formData.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.name]);

  // Vérifier l'authentification
  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth !== 'true') {
      router.push('/admin');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Parser les images en JSON si c'est du JSON, sinon en tableau simple
      let parsedImages: any[] = [];
      if (formData.images.trim()) {
        try {
          // Essayer de parser en JSON
          parsedImages = JSON.parse(formData.images);
        } catch {
          // Si ce n'est pas du JSON, split par virgules et créer des objets
          parsedImages = formData.images
            .split(',')
            .map(url => url.trim())
            .filter(Boolean)
            .map(url => ({ src: url }));
        }
      }

      const projectData = {
        ...formData,
        images: parsedImages,
        technologies: formData.technologies 
          ? formData.technologies.split(',').map(tech => tech.trim()).filter(Boolean) 
          : [],
      };

      const response = await fetch('/api/admin/projects/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        alert('Projet créé avec succès !');
        router.push('/admin');
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.message || 'Erreur lors de la création'}`);
      }
    } catch (error) {
      alert('Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Retour au panneau admin
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Nouveau Projet</h1>
          <p className="text-gray-600 mt-2">Ajoutez un nouveau projet à votre portfolio</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          {/* Informations de base */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Informations de base</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du projet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                  Slug (URL) *
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="mon-projet-exemple"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Généré automatiquement depuis le nom</p>
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="web">Développement Web</option>
                <option value="design">Graphisme</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description courte * (pour les cartes)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Une brève description du projet en 1-2 lignes"
                required
              />
            </div>

            <div>
              <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Description détaillée
              </label>
              <textarea
                id="longDescription"
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                placeholder='[{"src":"/design/projet/image1.jpg","caption":"Description 1"},{"src":"/design/projet/image2.jpg","caption":"Description 2"}]'
              />
              <p className="text-xs text-gray-500 mt-1">
                Format JSON avec objets (recommandé) ou URLs séparées par virgules
              </p>
            </div>
          </div>

          {/* Médias */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Médias</h2>
            
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                URL de l'image principale *
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://images.unsplash.com/... ou /web/mon-projet.jpg"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Utilisez une URL Unsplash ou un chemin local (/web/image.jpg ou /design/image.jpg)
              </p>
            </div>

            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-2">
                Images supplémentaires (galerie)
              </label>
              <textarea
                id="images"
                name="images"
                value={formData.images}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                placeholder='[{"src":"/design/projet/image1.jpg","caption":"Description 1"},{"src":"/design/projet/image2.jpg","caption":"Description 2"}]'
              />
              <p className="text-xs text-gray-500 mt-1">Séparez les URLs par des virgules</p>
            </div>
          </div>

          {/* Technologies et liens */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Technologies & Liens</h2>
            
            <div>
              <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 mb-2">
                Technologies utilisées
              </label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Next.js, TypeScript, Tailwind CSS, PostgreSQL"
              />
              <p className="text-xs text-gray-500 mt-1">Séparez les technologies par des virgules</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Lien GitHub
                </label>
                <input
                  type="text"
                  id="githubUrl"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://github.com/username/projet"
                />
              </div>

              <div>
                <label htmlFor="demoUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Lien Démo
                </label>
                <input
                  type="text"
                  id="demoUrl"
                  name="demoUrl"
                  value={formData.demoUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://demo.example.com"
                />
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Options</h2>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="featured" className="ml-3 block text-sm font-medium text-gray-700">
                Mettre en avant sur la page d'accueil (Featured)
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Création...' : 'Créer le projet'}
            </button>
            <Link
              href="/admin"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Annuler
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
