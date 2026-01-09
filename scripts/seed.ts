import { db } from '../app/lib/db/drizzle';
import { projetTable } from '../app/lib/db/schema';
import { githubProjects } from '../app/lib/projectsData';
import * as dotenv from 'dotenv';

dotenv.config();

async function seed() {
  console.log('🌱 Début du seeding...');

  try {
    // Utilisation des projets depuis projectsData
    const webProjects = githubProjects.web;
    const designProjects = githubProjects.design;

    // Insérer tous les projets
    console.log('📝 Insertion des projets web...');
    for (const project of webProjects) {
      await db.insert(projetTable).values(project);
      console.log(`✅ Projet web ajouté : ${project.name}`);
    }

    console.log('\n🎨 Insertion des projets design...');
    for (const project of designProjects) {
      await db.insert(projetTable).values(project);
      console.log(`✅ Projet design ajouté : ${project.name}`);
    }

    console.log('\n✨ Seeding terminé avec succès !');
    console.log(`\n📊 Résumé :`);
    console.log(`   - ${webProjects.length} projets web`);
    console.log(`   - ${designProjects.length} projets design`);
    console.log(`   - ${webProjects.filter(p => p.featured).length + designProjects.filter(p => p.featured).length} projets featured`);

  } catch (error) {
    console.error('❌ Erreur lors du seeding :', error);
    process.exit(1);
  }

  process.exit(0);
}

seed();
