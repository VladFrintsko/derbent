export type ImageAsset = {
  url?: string;
  alternativeText?: string;
};

export type NavigationLink = {
  id: number;
  label: string;
  href: string;
};

export type HeaderContent = {
  title: string;
  tagline?: string;
  logo?: ImageAsset;
  navigation: NavigationLink[];
};

export type HeroSection = {
  title: string;
  subtitle?: string;
  image?: ImageAsset;
};

export type MenuItem = {
  id: number;
  title: string;
  description?: string;
  price?: number;
  image?: ImageAsset;
  tags?: string[];
};

export type MenuCategory = {
  id: number;
  title: string;
  description?: string;
  items: MenuItem[];
};

export type ContactInfo = {
  phone: string;
  note?: string;
  whatsapp?: string;
};

export type FooterLinkGroup = {
  id: number;
  title?: string;
  links: NavigationLink[];
};

export type FooterContent = {
  columns: FooterLinkGroup[];
  address?: string;
  schedule?: string;
  socialLinks: NavigationLink[];
  copyright?: string;
};

export type CafeContent = {
  header: HeaderContent;
  hero: HeroSection;
  menu: MenuCategory[];
  contact: ContactInfo;
  footer: FooterContent;
};

