import { NextResponse } from 'next/server';
import { themes } from '@/lib/quotes';

export async function GET() {
  try {
    return NextResponse.json(themes);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch themes' },
      { status: 500 }
    );
  }
}
