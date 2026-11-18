import type { TraitItem, MintPhase, HolderPerk, RoadmapPhase, FAQItem, LayerCallout, SneakPeekItem } from '../types';

export const siteConfig = {
  // Brand & Core Identity
  brandName: 'The Ape Den',
  tagline: '2,222 hand-drawn Apes on Robinhood Chain',
  domain: 'theapeden.space',
  officialApeWord: 'Apes',

  // Socials & Links
  socials: {
    xHandle: '@ApeonInk',
    xUrl: 'https://x.com/ApeonInk',
    discordUrl: 'https://discord.gg/theapeden',
    telegramUrl: 'https://t.me/theapeden',
  },

  // Mint Configuration (Three phases only: Team, GTD, FCFS. NO spot counts or allocation numbers.)
  mint: {
    totalSupply: 2222,
    chain: 'Robinhood Chain',
    marketplace: 'OpenSea',
    mintDate: null as string | null, // ISO string e.g. '2026-12-01T18:00:00Z' or null for TBA
    mintDateDisplay: 'TBA',
    isMintActive: false,
    openseaUrl: 'https://opensea.io/collection/the-ape-den',
    buttonDisabledText: 'Mint on OpenSea, coming soon',
    buttonActiveText: 'Mint Now on OpenSea',
  },

  // Stat Strip (Strict tags per user requirements: Strictly capped, Mint network, Mint marketplace, Hand-drawn)
  stats: [
    { label: 'Total Supply', value: '2,222', tag: 'Strictly capped' },
    { label: 'Blockchain', value: 'Robinhood Chain', tag: 'Mint network' },
    { label: 'Marketplace', value: 'OpenSea', tag: 'Mint marketplace' },
    { label: 'Trait Categories', value: '6 Layers', tag: 'Hand-drawn' },
  ],

  // Mint Phases (Strictly 3 phases: Team, GTD, FCFS. No spot counts, no allocation split numbers.)
  phases: [
    {
      id: 'team',
      name: 'Team',
      badge: 'Free',
      price: 'Free',
      description: 'Reserved for the core development team and treasury vault.',
      status: 'upcoming' as const,
    },
    {
      id: 'gtd',
      name: 'GTD',
      badge: 'Free',
      price: 'Free',
      description: 'Priority whitelist window for verified community contributors.',
      status: 'upcoming' as const,
    },
    {
      id: 'fcfs',
      name: 'FCFS',
      badge: 'Free',
      price: 'Free',
      description: 'First come first served phase. Final stage before mint closes.',
      status: 'upcoming' as const,
    },
  ] as MintPhase[],

  // Official Assets
  assets: {
    logo: '/assets/logo.png',
    featuredApe: '/assets/ape-sneak-1.webp',
    // Complete Sneak Peeks collection (Clean, verified artwork)
    sneakPeeks: [
      {
        id: 'ape-1',
        name: 'Ape #1',
        title: 'Gold Fur & 3D Glasses',
        image: '/assets/ape-sneak-1.webp',
        badge: 'Sneak Peek',
        traits: ['Gold Fur', '3D Glasses', 'Striped Shirt', 'Mint Background'],
      },
      {
        id: 'ape-2',
        name: 'Ape #2',
        title: 'Zombie Fur & Leather Vest',
        image: '/assets/ape-sneak-2.webp',
        badge: 'Sneak Peek',
        traits: ['Zombie Fur', 'Dynamite', 'Leather Vest', 'Cream Background'],
      },
      {
        id: 'ape-3',
        name: 'Ape #3',
        title: 'White Fur & Hardhat',
        image: '/assets/ape-sneak-3.webp',
        badge: 'Sneak Peek',
        traits: ['White Fur', 'Construction Helmet', 'Ethernet Jacket', 'Olive Background'],
      },
      {
        id: 'ape-4',
        name: 'Ape #4',
        title: 'Lava Fur & Gold Grill',
        image: '/assets/ape-sneak-4.webp',
        badge: 'Sneak Peek',
        traits: ['Lava Fur', 'Gold Grill', 'Rainbow Suspenders', 'Lime Background'],
      },
      {
        id: 'ape-5',
        name: 'Ape #5',
        title: 'Gold Fur & Laser Eyes',
        image: '/assets/ape-sneak-5.webp',
        badge: 'Sneak Peek',
        traits: ['Gold Fur', 'Laser Eyes', 'Tech Jacket', 'Sky Background'],
      },
      {
        id: 'ape-6',
        name: 'Ape #6',
        title: 'Black Fur & Electric Wires',
        image: '/assets/ape-sneak-6.webp',
        badge: 'Sneak Peek',
        traits: ['Black Fur', 'Construction Helmet', 'Wire Shirt', 'Lime Background'],
      },
      {
        id: 'ape-7',
        name: 'Ape #7',
        title: 'Pink Fur & Skeleton Tee',
        image: '/assets/ape-sneak-7.webp',
        badge: 'Sneak Peek',
        traits: ['Pink Fur', 'Money Roll', 'Skeleton Tee', 'Mint Background'],
      },
      {
        id: 'ape-8',
        name: 'Ape #8',
        title: 'Leopard Fur & Propeller Beanie',
        image: '/assets/ape-sneak-8.webp',
        badge: 'Sneak Peek',
        traits: ['Leopard Fur', 'Propeller Beanie', 'Dynamite', 'Lime Background'],
      },
      {
        id: 'ape-9',
        name: 'Ape #9',
        title: 'Brown Fur & Paisley Bandana',
        image: '/assets/ape-sneak-9.webp',
        badge: 'Sneak Peek',
        traits: ['Brown Fur', 'Bandana', 'Pizza Slice', 'Skeleton Tee'],
      },
      {
        id: 'ape-10',
        name: 'Ape #10',
        title: 'Black Fur & Flat Cap',
        image: '/assets/ape-sneak-10.webp',
        badge: 'Sneak Peek',
        traits: ['Black Fur', 'Flat Cap', '3D Glasses', 'Leather Vest'],
      },
      {
        id: 'ape-11',
        name: 'Ape #11',
        title: 'Gold Fur & Propeller Beanie',
        image: '/assets/ape-sneak-11.webp',
        badge: 'Sneak Peek',
        traits: ['Gold Fur', 'Laser Eyes', 'Propeller Beanie', 'Dynamite'],
      },
    ] as SneakPeekItem[],
  },

  // Anatomy of an Ape Layers
  anatomyLayers: [
    {
      id: 'hat',
      label: 'Hat / Headwear',
      shortDesc: 'Helmets, beanies, caps & headpieces',
      fullDesc: 'Layered headgear tailored to the ape skull outline, from high-vis construction helmets to streetwear beanies.',
      x: 52,
      y: 18,
      lineDirection: 'right',
    },
    {
      id: 'eyes',
      label: 'Eyes',
      shortDesc: 'Glares, glasses & optical traits',
      fullDesc: 'Expressive comic line eyes ranging from tired stares and laser vision to bold retro 3D glasses.',
      x: 58,
      y: 38,
      lineDirection: 'right',
    },
    {
      id: 'fur',
      label: 'Fur',
      shortDesc: 'Base skin tones & mythical coats',
      fullDesc: 'Distinct hand-drawn fur coats including White, Gold, Zombie, Leopard, and molten Lava textures.',
      x: 35,
      y: 35,
      lineDirection: 'left',
    },
    {
      id: 'mouth',
      label: 'Mouth',
      shortDesc: 'Attitudes, grins & comic expressions',
      fullDesc: 'Characterful mouth expressions rendered with thick black contour ink that define each Ape’s personality.',
      x: 62,
      y: 58,
      lineDirection: 'right',
    },
    {
      id: 'clothes',
      label: 'Clothes',
      shortDesc: 'Jackets, tactical gear & streetwear',
      fullDesc: 'Detailed torso apparel including Ethernet jackets, layered hoodies, warrior armor, and cloaks.',
      x: 48,
      y: 84,
      lineDirection: 'left',
    },
    {
      id: 'background',
      label: 'Background',
      shortDesc: 'Pop colors & signature backdrops',
      fullDesc: 'Clean solid and high-contrast comic-inspired backdrops highlighting each Ape silhouette on Robinhood Chain.',
      x: 18,
      y: 20,
      lineDirection: 'left',
    },
  ] as LayerCallout[],

  // Trait Gallery Data
  traits: [
    // Fur (10)
    { id: 'fur-brown', name: 'Brown', category: 'Fur', rarity: 15 },
    { id: 'fur-black', name: 'Black', category: 'Fur', rarity: 15, image: '/assets/ape-sneak-6.webp' },
    { id: 'fur-gray', name: 'Gray', category: 'Fur', rarity: 12 },
    { id: 'fur-tan', name: 'Tan', category: 'Fur', rarity: 12 },
    { id: 'fur-white', name: 'White', category: 'Fur', rarity: 10, image: '/assets/ape-sneak-3.webp' },
    { id: 'fur-pink', name: 'Pink', category: 'Fur', rarity: 8, image: '/assets/ape-sneak-7.webp' },
    { id: 'fur-leopard', name: 'Leopard', category: 'Fur', rarity: 8, image: '/assets/ape-sneak-8.webp' },
    { id: 'fur-zombie', name: 'Zombie', category: 'Fur', rarity: 6, image: '/assets/ape-sneak-2.webp' },
    { id: 'fur-gold', name: 'Gold', category: 'Fur', rarity: 3, image: '/assets/ape-sneak-1.webp' },
    { id: 'fur-lava', name: 'Lava', category: 'Fur', rarity: 2, image: '/assets/ape-sneak-4.webp' },

    // Eyes (10)
    { id: 'eyes-side-eye', name: 'Side Eye', category: 'Eyes', rarity: 12 },
    { id: 'eyes-tired', name: 'Tired Eyes', category: 'Eyes', rarity: 12 },
    { id: 'eyes-sleepy', name: 'Sleepy Eyes', category: 'Eyes', rarity: 12 },
    { id: 'eyes-closed', name: 'Closed Eyes', category: 'Eyes', rarity: 10 },
    { id: 'eyes-red', name: 'Red Eyes', category: 'Eyes', rarity: 10, image: '/assets/ape-sneak-2.webp' },
    { id: 'eyes-bloodshot', name: 'Bloodshot Eyes', category: 'Eyes', rarity: 9 },
    { id: 'eyes-black', name: 'Black Eyes', category: 'Eyes', rarity: 9 },
    { id: 'eyes-sunglasses', name: 'Sunglasses', category: 'Eyes', rarity: 8 },
    { id: 'eyes-3d-glasses', name: '3D Glasses', category: 'Eyes', rarity: 5, image: '/assets/ape-sneak-1.webp' },
    { id: 'eyes-laser', name: 'Laser Eyes', category: 'Eyes', rarity: 2, image: '/assets/ape-sneak-5.webp' },

    // Clothes (8)
    { id: 'clothes-warrior-armor', name: 'Warrior Armor', category: 'Clothes', rarity: 10 },
    { id: 'clothes-layered-hoodie', name: 'Layered Hoodie', category: 'Clothes', rarity: 14 },
    { id: 'clothes-ethernet-jacket', name: 'Ethernet Jacket', category: 'Clothes', rarity: 8, image: '/assets/ape-sneak-3.webp' },
    { id: 'clothes-tech-jacket', name: 'Tech Jacket', category: 'Clothes', rarity: 10, image: '/assets/ape-sneak-5.webp' },
    { id: 'clothes-navy-cloak', name: 'Navy Cloak', category: 'Clothes', rarity: 10 },
    { id: 'clothes-red-floral', name: 'Red Floral Shirt', category: 'Clothes', rarity: 12 },
    { id: 'clothes-skeleton-tee', name: 'Skeleton Tee', category: 'Clothes', rarity: 12, image: '/assets/ape-sneak-7.webp' },
    { id: 'clothes-none', name: 'None', category: 'Clothes', rarity: 15 },

    // Background (6)
    { id: 'bg-cream', name: 'Cream', category: 'Background', rarity: 18, image: '/assets/ape-sneak-2.webp' },
    { id: 'bg-pale-yellow', name: 'Pale Yellow', category: 'Background', rarity: 18 },
    { id: 'bg-mint', name: 'Mint', category: 'Background', rarity: 16, image: '/assets/ape-sneak-1.webp' },
    { id: 'bg-peach', name: 'Peach', category: 'Background', rarity: 16 },
    { id: 'bg-robinhood', name: 'Robinhood', category: 'Background', rarity: 14, image: '/assets/ape-sneak-3.webp' },
    { id: 'bg-vivid-orange', name: 'Vivid Orange', category: 'Background', rarity: 12 },

    // Mouth (Placeholders)
    { id: 'mouth-grin', name: 'Grin', category: 'Mouth', rarity: 16 },
    { id: 'mouth-frown', name: 'Frown', category: 'Mouth', rarity: 18, image: '/assets/ape-sneak-1.webp' },
    { id: 'mouth-open', name: 'Open', category: 'Mouth', rarity: 16, image: '/assets/ape-sneak-6.webp' },
    { id: 'mouth-shocked', name: 'Shocked', category: 'Mouth', rarity: 14 },
    { id: 'mouth-whistle', name: 'Whistle', category: 'Mouth', rarity: 14 },
    { id: 'mouth-neutral', name: 'Neutral', category: 'Mouth', rarity: 18, image: '/assets/ape-sneak-3.webp' },

    // Hat (Placeholders)
    { id: 'hat-construction-helmet', name: 'Construction Helmet', category: 'Hat', rarity: 8, image: '/assets/ape-sneak-3.webp' },
    { id: 'hat-visor', name: 'Visor', category: 'Hat', rarity: 12 },
    { id: 'hat-beanie', name: 'Beanie', category: 'Hat', rarity: 15 },
    { id: 'hat-bandana', name: 'Bandana', category: 'Hat', rarity: 14, image: '/assets/ape-sneak-9.webp' },
    { id: 'hat-bucket-hat', name: 'Bucket Hat', category: 'Hat', rarity: 12 },
    { id: 'hat-none', name: 'None', category: 'Hat', rarity: 25, image: '/assets/ape-sneak-1.webp' },
  ] as TraitItem[],

  // Holder Perks
  perks: [
    {
      id: 'perk-genesis',
      title: 'Genesis Status',
      subtitle: 'OG Role',
      description: 'Exclusive Genesis discord verification role and member standing in The Ape Den community.',
      iconName: 'Crown',
      highlight: true,
    },
    {
      id: 'perk-vault',
      title: 'Den Vault Access',
      subtitle: 'Community Treasury',
      description: 'Direct visibility into community treasury activations and community-led initiatives.',
      iconName: 'Shield',
    },
    {
      id: 'perk-early-access',
      title: 'Early Access',
      subtitle: 'Priority Previews',
      description: 'Early previews of upcoming art releases, companion drops, and community events.',
      iconName: 'Zap',
    },
    {
      id: 'perk-future-mints',
      title: 'Future Mints',
      subtitle: 'Reserved Allocations',
      description: 'Priority whitelist access across upcoming collection expansions in The Ape Den roadmap.',
      iconName: 'Sparkles',
    },
    {
      id: 'perk-art-downloads',
      title: 'High-Res Downloads',
      subtitle: 'Original Artwork',
      description: 'Full uncompressed resolution downloads of your individual Ape artwork with print rights.',
      iconName: 'Download',
    },
    {
      id: 'perk-ape-missions',
      title: 'Ape Missions',
      subtitle: 'Interactive Bounties',
      description: 'Participate in community bounties, art contests, and creative challenges across The Den.',
      iconName: 'Compass',
    },
  ] as HolderPerk[],

  // Roadmap (Clean, data-driven vertical timeline. Zero spot counts, zero banned words.)
  roadmap: [
    {
      phase: 'Phase 01',
      title: 'Launch & Community',
      status: 'in_progress' as const,
      timeframe: 'Current Stage',
      items: [
        'Website launch at theapeden.space',
        'Official sneak peeks revealed on @ApeonInk',
        'Community collaborations and whitelist access',
        'Smart contract deployment on Robinhood Chain',
      ],
    },
    {
      phase: 'Phase 02',
      title: 'The Mint',
      status: 'planned' as const,
      timeframe: 'Mint Date TBA',
      items: [
        'Three mint phases: Team, GTD, and FCFS hosted on OpenSea',
        'Immediate reveal of all 2,222 hand-drawn Apes',
        'Secondary market trading enabled on OpenSea',
      ],
    },
    {
      phase: 'Phase 03',
      title: 'Post-Mint Activation',
      status: 'planned' as const,
      timeframe: 'Post-Mint',
      items: [
        'Holder Discord role verification via official bot',
        'Den community vault activation',
        'First round of Ape Missions and community activities',
        'High-resolution art downloads for all 2,222 Ape holders',
      ],
    },
    {
      phase: 'Phase 04',
      title: 'Ecosystem Expansion',
      status: 'planned' as const,
      timeframe: 'Future Horizon',
      items: [
        'Expansion activations on Robinhood Chain',
        'Holder apparel and physical concepts',
        'Community governance votes on Den initiatives',
        'Next-generation collection concepts',
      ],
    },
  ] as RoadmapPhase[],

  // FAQ Accordion (Answers strictly concise, NO spot counts, NO banned words)
  faq: [
    {
      question: 'What is The Ape Den?',
      answer: 'The Ape Den is a collection of 2,222 hand-drawn Apes launching on Robinhood Chain with minting hosted on OpenSea.',
    },
    {
      question: 'How many Apes are there?',
      answer: 'The supply is strictly capped at 2,222 Apes. No additional Apes will ever be minted.',
    },
    {
      question: 'Which chain?',
      answer: 'The Ape Den is built and minted on Robinhood Chain.',
    },
    {
      question: 'Where is the mint?',
      answer: 'The official mint takes place directly on OpenSea.',
    },
    {
      question: 'When is the mint?',
      answer: 'The mint date is TBA. Announcements will be posted on X (@ApeonInk).',
    },
    {
      question: 'How do I get a spot?',
      answer: 'Spots come through community collaborations and announcements on X (@ApeonInk). There is no whitelist form or registration on this website.',
    },
    {
      question: 'Is the art hand-drawn?',
      answer: 'Yes. Every trait and Ape is original, hand-drawn comic art crafted with distinct ink outlines.',
    },
  ] as FAQItem[],

  // Collabs info
  collabs: {
    title: 'Project Collaborations',
    subtitle: 'Build with The Den',
    description: 'We connect with established communities, artists, and creators building on Robinhood Chain. If your project shares our ethos, reach out directly on X.',
    ctaText: 'Reach Out via X DMs',
    ctaUrl: 'https://x.com/ApeonInk',
  },
};
