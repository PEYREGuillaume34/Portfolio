import { db } from '../app/lib/db/drizzle';
import { projetTable } from '../app/lib/db/schema';
import * as dotenv from 'dotenv';

dotenv.config();

async function reset() {
  console.log('🗑️  Suppression de tous les projets...');

  try {
    await db.delete(projetTable);
    console.log('✅ Base de données vidée avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de la suppression :', error);
    process.exit(1);
  }

  process.exit(0);
}

reset();
