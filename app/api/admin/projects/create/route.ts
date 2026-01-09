import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db/drizzle';
import { projetTable } from '@/app/lib/db/schema';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation basique
    if (!data.name || !data.slug || !data.category || !data.description || !data.imageUrl) {
      return NextResponse.json(
        { message: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    // Insérer le projet
    const result = await db.insert(projetTable).values({
      name: data.name,
      slug: data.slug,
      category: data.category,
      description: data.description,
      longDescription: data.longDescription || null,
      imageUrl: data.imageUrl,
      images: data.images || [],
      technologies: data.technologies || [],
      githubUrl: data.githubUrl || null,
      demoUrl: data.demoUrl || null,
      featured: data.featured || false,
    }).returning();

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la création du projet' },
      { status: 500 }
    );
  }
}
