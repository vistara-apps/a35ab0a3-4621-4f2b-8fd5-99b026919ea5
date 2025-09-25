import { NextRequest } from 'next/server';
import { getRandomQuote, getThemeById } from '@/lib/quotes';
import { Quote } from '@/lib/types';
import { generateFrameMetadata } from '@/lib/frame-utils';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const quoteId = searchParams.get('quoteId');
    const themeId = searchParams.get('themeId');
    const view = (searchParams.get('view') as 'quote' | 'themes' | 'theme-quotes') || 'quote';

    let quote: Quote;

    if (quoteId) {
      // If specific quote requested, find it
      const quotes = require('@/lib/quotes').quotes;
      quote = quotes.find((q: Quote) => q.id === quoteId) || getRandomQuote();
    } else if (themeId && view === 'theme-quotes') {
      // Get random quote from specific theme
      const quotes = require('@/lib/quotes').quotes;
      const themeQuotes = quotes.filter((q: Quote) => q.theme === themeId);
      quote = themeQuotes[Math.floor(Math.random() * themeQuotes.length)] || getRandomQuote();
    } else {
      // Default: random quote
      quote = getRandomQuote();
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://a35ab0a346214f2b8fd599b026919ea5-fj4u.vercel.app';

    // Generate frame metadata
    const frameMetadata = generateFrameMetadata(quote, view, themeId || quote.theme, baseUrl);

    // Return HTML with Frame metadata
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Vitalik's Wisdom - Farcaster Frame</title>
          ${Object.entries(frameMetadata).map(([key, value]) =>
            `<meta property="${key}" content="${value.replace(/"/g, '&quot;')}" />`
          ).join('\n          ')}
        </head>
        <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
          <div style="text-align: center; max-width: 600px;">
            <h1 style="font-size: 24px; margin-bottom: 20px; color: #ffffff;">Vitalik's Wisdom</h1>
            <blockquote style="font-size: 18px; font-style: italic; margin: 20px 0; line-height: 1.4;">
              "${quote.text}"
            </blockquote>
            <p style="font-size: 14px; opacity: 0.8; margin-top: 10px;">
              — ${quote.author}
            </p>
            ${themeId ? `<p style="font-size: 12px; margin-top: 10px; color: #f72585;">Theme: ${getThemeById(themeId)?.name || 'General'}</p>` : ''}
          </div>
        </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Frame route error:', error);
    return new Response('Failed to generate frame', { status: 500 });
  }
}

