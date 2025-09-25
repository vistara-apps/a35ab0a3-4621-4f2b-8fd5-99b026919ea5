'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="poster-card">
          <div className="flex justify-center mb-6">
            <AlertCircle className="w-16 h-16 text-accent" />
          </div>
          
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            Oops! Something went wrong
          </h1>
          
          <p className="text-text-secondary mb-8">
            We encountered an error while loading Vitalik's wisdom. 
            Don't worry, even the best systems have hiccups!
          </p>
          
          <div className="space-y-4">
            <button
              onClick={reset}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="btn-secondary mx-auto block"
            >
              Go Home
            </button>
          </div>
          
          {error.digest && (
            <p className="text-text-secondary text-xs mt-6">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
