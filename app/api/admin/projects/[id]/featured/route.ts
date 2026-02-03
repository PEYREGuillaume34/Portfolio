import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db/drizzle';
import { projetTable } from '@/app/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { featured } = await request.json();

    await db
      .update(projetTable)
      .set({ featured })
      .where(eq(projetTable.id, parseInt(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
