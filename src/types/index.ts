export interface TraitItem {
  id: string;
  name: string;
  category: 'Background' | 'Fur' | 'Eyes' | 'Mouth' | 'Clothes' | 'Hat';
  image?: string;
  rarity?: number;
}

export interface MintPhase {
  id: string;
  name: string;
  badge: string;
  price: string;
  description: string;
  status: 'upcoming' | 'live' | 'completed';
}

export interface HolderPerk {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  status: 'planned' | 'in_progress' | 'completed';
  timeframe: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LayerCallout {
  id: string;
  label: string;
  shortDesc: string;
  fullDesc: string;
  x: number;
  y: number;
  lineDirection: 'left' | 'right';
}

export interface SneakPeekItem {
  id: string;
  name: string;
  title: string;
  image: string;
  badge: string;
  traits: string[];
}
