import { NextResponse } from 'next/server';

export class FrameError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'FrameError';
  }
}

export function handleFrameError(error: unknown): NextResponse {
  console.error('Frame error:', error);

  if (error instanceof FrameError) {
    return NextResponse.json(
      {
        error: error.message,
        code: error.code
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { error: 'Unknown error occurred' },
    { status: 500 }
  );
}

export function validateQuoteId(id: string): boolean {
  return /^\d+$/.test(id) && parseInt(id) > 0;
}

export function validateThemeId(id: string): boolean {
  const validThemes = ['scalability', 'governance', 'ethereum', 'philosophy', 'innovation'];
  return validThemes.includes(id);
}

export function sanitizeFrameInput(input: any): any {
  // Basic sanitization for frame inputs
  if (typeof input === 'string') {
    return input.trim().slice(0, 1000); // Limit length
  }
  return input;
}

