// scripts/update-projects.ts
import { db } from '../app/lib/db/drizzle';
import { projetTable } from '../app/lib/db/schema';
import { eq } from 'drizzle-orm';
import * as dotenv from 'dotenv';

dotenv.config();

async function updateProjects() {
  try {
    console.log('🔄 Mise à jour des projets...');
    
    // Mettre à jour le projet "Affiches Événementielles"
    await db.update(projetTable)
      .set({
        imageUrl: '/design/TRAVAIL/presentation_communication.jpg', // Votre nouveau chemin
        updated_at: new Date()
      })
      .where(eq(projetTable.slug, 'affiches-evenementielles'));
    
    console.log('✅ Projet "Affiches Événementielles" mis à jour');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour :', error);
    process.exit(1);
  }
}

updateProjects();