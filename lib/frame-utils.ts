import { Quote } from './types';

export interface FrameState {
  quoteId: string;
  themeId?: string;
  view: 'quote' | 'themes' | 'theme-quotes';
  timestamp: number;
}

export type FrameMetadata = Record<string, string>;

export function generateFrameMetadata(
  quote: Quote,
  view: 'quote' | 'themes' | 'theme-quotes' = 'quote',
  themeId?: string,
  baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || 'https://a35ab0a346214f2b8fd599b026919ea5-fj4u.vercel.app'
): FrameMetadata {
  const ogImageUrl = `${baseUrl}/api/og?quoteId=${quote.id}${themeId ? `&themeId=${themeId}` : ''}`;

  const frameState: FrameState = {
    quoteId: quote.id,
    themeId,
    view,
    timestamp: Date.now()
  };

  const metadata: FrameMetadata = {
    'fc:frame': 'vNext',
    'fc:frame:image': ogImageUrl,
    'fc:frame:post_url': `${baseUrl}/api/frame/action`,
    'fc:frame:state': JSON.stringify(frameState),
  };

  // Configure buttons based on view
  switch (view) {
    case 'themes':
      metadata['fc:frame:button:1'] = '🎲 Random Quote';
      metadata['fc:frame:button:1:action'] = 'post';
      metadata['fc:frame:button:2'] = '📘 Scalability';
      metadata['fc:frame:button:2:action'] = 'post';
      metadata['fc:frame:button:3'] = '🏛️ Governance';
      metadata['fc:frame:button:3:action'] = 'post';
      metadata['fc:frame:button:4'] = '⛓️ Ethereum';
      metadata['fc:frame:button:4:action'] = 'post';
      break;

    case 'theme-quotes':
      metadata['fc:frame:button:1'] = '🎲 New Quote';
      metadata['fc:frame:button:1:action'] = 'post';
      metadata['fc:frame:button:2'] = '📚 Browse Themes';
      metadata['fc:frame:button:2:action'] = 'post';
      metadata['fc:frame:button:3'] = '🔗 Share';
      metadata['fc:frame:button:3:action'] = 'link';
      metadata['fc:frame:button:3:target'] = `${baseUrl}?quoteId=${quote.id}`;
      metadata['fc:frame:button:4'] = `➡️ Next in Theme`;
      metadata['fc:frame:button:4:action'] = 'post';
      break;

    default: // 'quote'
      metadata['fc:frame:button:1'] = '🎲 New Quote';
      metadata['fc:frame:button:1:action'] = 'post';
      metadata['fc:frame:button:2'] = '📚 Browse Themes';
      metadata['fc:frame:button:2:action'] = 'post';
      metadata['fc:frame:button:3'] = '🔗 Share';
      metadata['fc:frame:button:3:action'] = 'link';
      metadata['fc:frame:button:3:target'] = `${baseUrl}?quoteId=${quote.id}`;
      break;
  }

  return metadata;
}

export function parseFrameState(stateString?: string): FrameState | null {
  if (!stateString) return null;

  try {
    const parsed = JSON.parse(stateString);
    if (typeof parsed === 'object' &&
        typeof parsed.quoteId === 'string' &&
        typeof parsed.view === 'string' &&
        typeof parsed.timestamp === 'number') {
      return parsed as FrameState;
    }
  } catch (error) {
    console.error('Failed to parse frame state:', error);
  }

  return null;
}

export function validateFrameRequest(body: any): boolean {
  return !!(body && body.untrustedData && typeof body.untrustedData.buttonIndex === 'number');
}
