export interface ProductItem {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  specs?: string[];
  // New fields for PDP
  gallery?: string[];
  video?: string;
  highlights?: {
    label: string;
    value: string;
    unit?: string;
    icon?: string;
  }[];
  detailedSpecs?: {
    title: string;
    subtitle?: string;
    icon?: string;
    items: { label: string; value: string }[];
  }[];
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  items: ProductItem[];
}

export interface NavLink {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}