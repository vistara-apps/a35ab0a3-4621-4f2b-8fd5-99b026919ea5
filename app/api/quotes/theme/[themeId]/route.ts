import { NextResponse } from 'next/server';
import { getQuotesByTheme } from '@/lib/quotes';

export async function GET(
  request: Request,
  { params }: { params: { themeId: string } }
) {
  try {
    const quotes = getQuotesByTheme(params.themeId);
    return NextResponse.json(quotes);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}
