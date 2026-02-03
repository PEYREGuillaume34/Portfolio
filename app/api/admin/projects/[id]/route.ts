import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db/drizzle';
import { projetTable } from '@/app/lib/db/schema';
import { eq } from 'drizzle-orm';

// GET - Récupérer un projet par ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const project = await db
      .select()
      .from(projetTable)
      .where(eq(projetTable.id, parseInt(id)))
      .limit(1);
    
    if (project.length === 0) {
      return NextResponse.json({ error: 'Projet non trouvé' }, { status: 404 });
    }
    
    return NextResponse.json(project[0]);
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// PUT - Mettre à jour un projet
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    await db
      .update(projetTable)
      .set({
        name: body.name,
        slug: body.slug,
        category: body.category,
        description: body.description,
        longDescription: body.longDescription || null,
        imageUrl: body.imageUrl,
        images: body.images || [],
        technologies: body.technologies || [],
        githubUrl: body.githubUrl || null,
        demoUrl: body.demoUrl || null,
        featured: body.featured || false,
        updated_at: new Date(),
      })
      .where(eq(projetTable.id, parseInt(id)));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// DELETE - Supprimer un projet
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await db.delete(projetTable).where(eq(projetTable.id, parseInt(id)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
