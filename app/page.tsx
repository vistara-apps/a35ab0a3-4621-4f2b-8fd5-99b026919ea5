import { FrameQuoteDisplay } from './components/FrameQuoteDisplay';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white border-opacity-10 bg-surface bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-2">
              Vitalik's Wisdom
            </h1>
            <p className="text-text-secondary text-sm">
              Your dose of Web3 insights, instantly
            </p>
            <p className="text-text-secondary text-xs mt-2">
              A Farcaster Frame for Web3 wisdom
            </p>
          </div>
        </div>
      </header>

      {/* Main quote display */}
      <FrameQuoteDisplay />

      {/* Footer */}
      <footer className="border-t border-white border-opacity-10 bg-surface bg-opacity-50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-text-secondary text-sm mb-2">
            Built with ❤️ for the Web3 community
          </p>
          <p className="text-text-secondary text-xs">
            Quotes curated from Vitalik Buterin's public statements and writings
          </p>
          <p className="text-text-secondary text-xs mt-2">
            Try it as a Farcaster Frame: Visit /frame
          </p>
        </div>
      </footer>
    </main>
  );
}
