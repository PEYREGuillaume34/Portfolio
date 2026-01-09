import { db } from './drizzle';
import { projetTable } from './schema';
import { eq, desc } from 'drizzle-orm';

// Type pour les projets
export type Project = typeof projetTable.$inferSelect;

/**
 * Récupère tous les projets featured pour la page d'accueil
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const projects = await db
      .select()
      .from(projetTable)
      .where(eq(projetTable.featured, true))
      .orderBy(desc(projetTable.created_at))
      .limit(6);
    
    return projects;
  } catch (error) {
    console.error('Erreur lors de la récupération des projets featured:', error);
    return [];
  }
}

/**
 * Récupère tous les projets d'une catégorie spécifique
 */
export async function getProjectsByCategory(category: 'web' | 'design'): Promise<Project[]> {
  try {
    const projects = await db
      .select()
      .from(projetTable)
      .where(eq(projetTable.category, category))
      .orderBy(desc(projetTable.created_at));
    
    return projects;
  } catch (error) {
    console.error(`Erreur lors de la récupération des projets ${category}:`, error);
    return [];
  }
}

/**
 * Récupère un projet par son slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const projects = await db
      .select()
      .from(projetTable)
      .where(eq(projetTable.slug, slug))
      .limit(1);
    
    return projects[0] || null;
  } catch (error) {
    console.error(`Erreur lors de la récupération du projet ${slug}:`, error);
    return null;
  }
}

/**
 * Récupère tous les projets (pour le panneau admin)
 */
export async function getAllProjects(): Promise<Project[]> {
  try {
    const projects = await db
      .select()
      .from(projetTable)
      .orderBy(desc(projetTable.created_at));
    
    return projects;
  } catch (error) {
    console.error('Erreur lors de la récupération de tous les projets:', error);
    return [];
  }
}
