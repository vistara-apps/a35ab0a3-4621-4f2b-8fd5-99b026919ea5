import { NextResponse } from 'next/server';
import { getRandomQuote } from '@/lib/quotes';

export async function GET() {
  try {
    const quote = getRandomQuote();
    return NextResponse.json(quote);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch quote' },
      { status: 500 }
    );
  }
}
