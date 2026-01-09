import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db/drizzle';
import { projetTable } from '@/app/lib/db/schema';
import { eq } from 'drizzle-orm';

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
