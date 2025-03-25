export type VotesType = {
  count: number;
  value: number;
};

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[];
};

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
};

export type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  size: string;
  images: string[];
  discount?: string;
  currentPrice: number;
  punctuation: PunctuationType;
  reviews: ReviewType[];
};

export type AdSlot = {
  id: string;
  category:
    | "Standard Banner"
    | "High-Impact Ad"
    | "Special Execution"
    | "Sponsored Content"
    | "Social Media"
    | "Live Streaming"
    | "Video Production";
  unit?: string;
  dimensions?: string;
  device?: string;
  rate: number;
  currency: string;
  placement?: string;
  duration: string;
  availability: number;
  platform: string;
  contentType?: string;
  specifications?: string;
  brand?: string;
  images: string[]; // New field for sample images
};

export type ProductTypeList = {
  id: string;
  name: string;
  price: string;
  color: string;
  images: string[];
  discount?: string;
  currentPrice?: number;
};

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
};

export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};
