import { neon } from '@neondatabase/serverless';
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/app/lib/db/schema";
import * as dotenv from 'dotenv';

// Charger les variables d'environnement pour les scripts (seed, etc.)
if (!process.env.DATABASE_URL) {
  dotenv.config();
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });