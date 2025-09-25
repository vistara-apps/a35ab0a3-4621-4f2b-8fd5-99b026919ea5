import { NextRequest, NextResponse } from 'next/server';
import { getRandomQuote, getQuotesByTheme, getThemeById, themes } from '@/lib/quotes';
import { Quote } from '@/lib/types';
import { generateFrameMetadata, parseFrameState, validateFrameRequest } from '@/lib/frame-utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validateFrameRequest(body)) {
      return NextResponse.json({ error: 'Invalid frame request' }, { status: 400 });
    }

    const { untrustedData } = body;
    const buttonIndex = untrustedData.buttonIndex;
    const state = parseFrameState(untrustedData.state);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://a35ab0a346214f2b8fd599b026919ea5-fj4u.vercel.app';

    let newQuote: Quote;
    let newView: 'quote' | 'themes' | 'theme-quotes' = state?.view || 'quote';
    let newThemeId = state?.themeId;

    // Handle button actions
    switch (buttonIndex) {
      case 1: // New Quote or Random Quote (from themes view)
        newQuote = getRandomQuote();
        newView = 'quote';
        newThemeId = newQuote.theme;
        break;

      case 2: // Browse Themes or Scalability theme
        if (newView === 'themes') {
          // Scalability theme selected
          const scalabilityQuotes = getQuotesByTheme('scalability');
          newQuote = scalabilityQuotes[Math.floor(Math.random() * scalabilityQuotes.length)] || getRandomQuote();
          newView = 'theme-quotes';
          newThemeId = 'scalability';
        } else {
          // Browse Themes from quote view
          newView = 'themes';
          newQuote = state?.quoteId ? require('@/lib/quotes').quotes.find((q: Quote) => q.id === state.quoteId) || getRandomQuote() : getRandomQuote();
        }
        break;

      case 3: // Share (link action) or Governance theme
        if (newView === 'themes') {
          // Governance theme selected
          const governanceQuotes = getQuotesByTheme('governance');
          newQuote = governanceQuotes[Math.floor(Math.random() * governanceQuotes.length)] || getRandomQuote();
          newView = 'theme-quotes';
          newThemeId = 'governance';
        } else {
          // Share action should use link, not POST
          return NextResponse.json({ error: 'Share action should use link' }, { status: 400 });
        }
        break;

      case 4: // Ethereum theme or Next in Theme
        if (newView === 'themes') {
          // Ethereum theme selected
          const ethereumQuotes = getQuotesByTheme('ethereum');
          newQuote = ethereumQuotes[Math.floor(Math.random() * ethereumQuotes.length)] || getRandomQuote();
          newView = 'theme-quotes';
          newThemeId = 'ethereum';
        } else if (newView === 'theme-quotes' && newThemeId) {
          // Next in Theme
          const themeQuotes = getQuotesByTheme(newThemeId);
          const currentIndex = themeQuotes.findIndex(q => q.id === state?.quoteId);
          const nextIndex = (currentIndex + 1) % themeQuotes.length;
          newQuote = themeQuotes[nextIndex];
          newView = 'theme-quotes';
        } else {
          newQuote = getRandomQuote();
        }
        break;

      default:
        newQuote = getRandomQuote();
    }

    // Generate frame metadata
    const frameMetadata = generateFrameMetadata(newQuote, newView, newThemeId, baseUrl);

    return NextResponse.json(frameMetadata);
  } catch (error) {
    console.error('Frame action error:', error);
    return NextResponse.json(
      { error: 'Failed to process frame action' },
      { status: 500 }
    );
  }
}

