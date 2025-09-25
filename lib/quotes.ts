import { Quote, QuoteTheme } from './types';

export const themes: QuoteTheme[] = [
  {
    id: 'scalability',
    name: 'Scalability',
    description: 'Insights on blockchain scaling solutions',
    color: '#4ecdc4'
  },
  {
    id: 'governance',
    name: 'Governance',
    description: 'Thoughts on decentralized governance',
    color: '#ff6b6b'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    description: 'Vision and philosophy of Ethereum',
    color: '#45b7d1'
  },
  {
    id: 'philosophy',
    name: 'Philosophy',
    description: 'Broader thoughts on technology and society',
    color: '#96ceb4'
  },
  {
    id: 'innovation',
    name: 'Innovation',
    description: 'On building the future of technology',
    color: '#feca57'
  }
];

export const quotes: Quote[] = [
  {
    id: '1',
    text: 'The internet of money should not cost 5 cents per transaction.',
    author: 'Vitalik Buterin',
    theme: 'scalability',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    text: 'Whereas most technologies tend to automate workers on the periphery doing menial tasks, blockchains automate away the center.',
    author: 'Vitalik Buterin',
    theme: 'philosophy',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    text: 'Ethereum is not just a platform, it\'s a programming language that allows people to build new kinds of applications.',
    author: 'Vitalik Buterin',
    theme: 'ethereum',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    text: 'The whole point of cryptocurrency is to provide an alternative to the traditional financial system.',
    author: 'Vitalik Buterin',
    theme: 'philosophy',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    text: 'I think that governments that try to ban cryptocurrencies will just end up shooting themselves in the foot.',
    author: 'Vitalik Buterin',
    theme: 'governance',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    text: 'Bitcoin is great as a form of digital money, but its scripting language is too weak for any kind of serious advanced applications to be built on top.',
    author: 'Vitalik Buterin',
    theme: 'ethereum',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '7',
    text: 'The blockchain space is still very much in its infancy, and there\'s a lot of room for innovation.',
    author: 'Vitalik Buterin',
    theme: 'innovation',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '8',
    text: 'I think the main value proposition of Bitcoin is that it\'s a store of value and a medium of exchange that is not controlled by any government.',
    author: 'Vitalik Buterin',
    theme: 'philosophy',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '9',
    text: 'Proof of stake is more environmentally friendly and more secure than proof of work.',
    author: 'Vitalik Buterin',
    theme: 'ethereum',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '10',
    text: 'The goal is to build a more open, more free, and more fair society through technology.',
    author: 'Vitalik Buterin',
    theme: 'philosophy',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '11',
    text: 'Scalability is a multi-dimensional problem. We need to scale not just transaction throughput, but also developer experience.',
    author: 'Vitalik Buterin',
    theme: 'scalability',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '12',
    text: 'The most important scarce resource is legitimacy.',
    author: 'Vitalik Buterin',
    theme: 'governance',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export function getQuotesByTheme(themeId: string): Quote[] {
  return quotes.filter(quote => quote.theme === themeId);
}

export function getQuoteById(id: string): Quote | undefined {
  return quotes.find(quote => quote.id === id);
}

export function getThemeById(id: string): QuoteTheme | undefined {
  return themes.find(theme => theme.id === id);
}
