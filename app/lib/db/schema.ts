import { relations } from "drizzle-orm";
import { boolean, index, json } from "drizzle-orm/pg-core";
import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

// ========================================
// TYPES
// ========================================

export type CarouselImage = {
  src: string;
  caption?: string;
  isAnimated?: boolean;
  overlayGif?: string;
};

// ========================================
// TABLES DE BASE
// ========================================

export const projetTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  
  // Identification
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(), // URL-friendly (ex: "site-ecommerce-nextjs")
  category: text("category").notNull(), // "web" ou "design"
  
  // Descriptions
  description: text("description").notNull(), // Courte description pour les cartes
  longDescription: text("long_description"), // Description complète pour la page détail
  
  // Médias (chemins relatifs depuis /public)
  imageUrl: text("image_url").notNull(), // Image principale (ex: "/web/projet-1-main.jpg")
  images: json("images").$type<(string | CarouselImage)[]>().default([]), // Galerie d'images (strings ou objets avec caption)
  
  // Métadonnées
  technologies: json("technologies").$type<string[]>().default([]), // Technologies utilisées
  githubUrl: text("github_url"), // Lien GitHub (optionnel, surtout pour projets web)
  demoUrl: text("demo_url"), // Lien démo/preview (optionnel)
  
  // Mise en avant
  featured: boolean("featured").default(false).notNull(), // Afficher sur la page d'accueil
  
  // Timestamps
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});