# Vitalik's Wisdom

A Farcaster Frame and Base Mini App that serves curated Vitalik Buterin quotes in beautiful, shareable poster formats for Web3 enthusiasts.

## Features

- **Random Quote Display**: Get instant inspiration with randomly selected Vitalik quotes
- **Themed Collections**: Browse quotes by categories like Scalability, Governance, Ethereum, Philosophy, and Innovation
- **Shareable Posters**: Beautiful, social media-ready quote cards with dynamic OG images
- **Farcaster Frame**: Full Frame v2 support with interactive buttons and state management
- **Theme Navigation**: Browse quotes by theme within the Frame interface
- **Social Sharing**: Share quotes directly to Farcaster or copy links
- **OnchainKit Integration**: Wallet connection and identity features

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: React 19 (required for OnchainKit compatibility)
- **Blockchain**: OnchainKit for Base integration
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── PosterCard.tsx   # Main quote display card
│   ├── QuoteDisplay.tsx # Quote management logic
│   ├── ShareButton.tsx  # Social sharing functionality
│   └── ThemeProvider.tsx # Theme switching logic
├── api/                 # API routes
│   ├── quotes/         # Quote-related endpoints
│   └── themes/         # Theme data endpoints
├── theme-preview/      # Theme preview page
└── globals.css         # Global styles and theme variables

lib/
├── quotes.ts           # Quote data and utilities
└── types.ts           # TypeScript type definitions
```

## Themes

The app supports multiple blockchain-inspired themes:

- **Default**: Warm social theme with dark teal background and coral accents
- **Celo**: Black background with yellow accents
- **Solana**: Dark purple with purple/magenta accents
- **Base**: Dark blue with Base blue accents
- **Coinbase**: Dark navy with Coinbase blue accents

Switch themes by adding `?theme=themeName` to the URL or visit `/theme-preview`.

## Quote Categories

- **Scalability**: Insights on blockchain scaling solutions
- **Governance**: Thoughts on decentralized governance
- **Ethereum**: Vision and philosophy of Ethereum
- **Philosophy**: Broader thoughts on technology and society
- **Innovation**: On building the future of technology

## Farcaster Frame

The app includes full Farcaster Frame v2 support:

- **Frame URL**: `/frame` - Main Frame entry point
- **Interactive Buttons**: New Quote, Browse Themes, Share, Next in Theme
- **State Management**: Maintains quote selection and navigation state
- **Dynamic Images**: OG images generated for each quote
- **Theme Navigation**: Browse quotes by category within Frame

### Frame API Endpoints

- `GET /frame` - Main Frame HTML with metadata
- `POST /api/frame/action` - Handle Frame button interactions
- `GET /api/og` - Generate dynamic Open Graph images for quotes

### Regular API Endpoints

- `GET /api/quotes/random` - Get a random quote
- `GET /api/quotes/theme/[themeId]` - Get quotes by theme
- `GET /api/themes` - Get all available themes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - feel free to use this project as inspiration for your own Base Mini Apps!

## Acknowledgments

- Quotes curated from Vitalik Buterin's public statements and writings
- Built with love for the Web3 community
- Powered by Base and OnchainKit
