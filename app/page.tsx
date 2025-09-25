'use client';

import { QuoteDisplay } from './components/QuoteDisplay';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header with wallet connection */}
      <header className="border-b border-white border-opacity-10 bg-surface bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-text-primary">
                Vitalik's Wisdom
              </h1>
              <p className="text-text-secondary text-sm">
                Your dose of Web3 insights, instantly
              </p>
            </div>
            
            <Wallet>
              <ConnectWallet>
                <div className="flex items-center gap-2 bg-surface px-3 py-2 rounded-lg border border-white border-opacity-10">
                  <Avatar className="w-6 h-6" />
                  <Name className="text-text-primary text-sm" />
                </div>
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </header>

      {/* Main quote display */}
      <QuoteDisplay />

      {/* Footer */}
      <footer className="border-t border-white border-opacity-10 bg-surface bg-opacity-50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-text-secondary text-sm mb-2">
            Built with ❤️ for the Web3 community
          </p>
          <p className="text-text-secondary text-xs">
            Quotes curated from Vitalik Buterin's public statements and writings
          </p>
        </div>
      </footer>
    </main>
  );
}
