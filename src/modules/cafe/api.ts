import { buildMediaUrl, strapiGet } from "../../services/strapiClient";
import {
  CafeContent,
  ContactInfo,
  FooterContent,
  FooterLinkGroup,
  HeaderContent,
  HeroSection,
  ImageAsset,
  MenuCategory,
  MenuItem,
  NavigationLink,
} from "./types";

type StrapiMedia = {
  data?: {
    id: number;
    attributes?: {
      url?: string;
      alternativeText?: string;
    };
  } | null;
};

type StrapiLink = {
  id: number;
  label?: string;
  href?: string;
};

type StrapiMenuItem = {
  id: number;
  title?: string;
  description?: string;
  price?: number;
  tags?: string[];
  image?: StrapiMedia;
};

type StrapiMenuCategory = {
  id: number;
  title?: string;
  description?: string;
  items?: StrapiMenuItem[];
};

type StrapiFooterColumn = {
  id: number;
  title?: string;
  links?: StrapiLink[];
};

type CafeHomeAttributes = {
  headerTitle?: string;
  headerTagline?: string;
  headerLogo?: StrapiMedia;
  navigation?: StrapiLink[];
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: StrapiMedia;
  menuCategories?: StrapiMenuCategory[];
  deliveryPhone?: string;
  deliveryNote?: string;
  whatsappLink?: string;
  footerColumns?: StrapiFooterColumn[];
  footerAddress?: string;
  footerSchedule?: string;
  footerSocial?: StrapiLink[];
  footerCopyright?: string;
};

type CafeHomeResponse = {
  data?: {
    id: number;
    attributes?: CafeHomeAttributes;
  } | null;
};

const mapMedia = (media?: StrapiMedia): ImageAsset | undefined => {
  const url = buildMediaUrl(media?.data?.attributes?.url);
  if (!url) {
    return undefined;
  }
  return {
    url,
    alternativeText: media?.data?.attributes?.alternativeText ?? undefined,
  };
};

const mapLinks = (links?: StrapiLink[]): NavigationLink[] =>
  (links ?? [])
    .filter((link): link is Required<StrapiLink> => Boolean(link?.label && link?.href))
    .map((link) => ({
      id: link.id,
      label: link.label as string,
      href: link.href as string,
    }));

const mapMenuItems = (items?: StrapiMenuItem[]): MenuItem[] =>
  (items ?? [])
    .filter((item) => Boolean(item.title))
    .map((item) => ({
      id: item.id,
      title: item.title ?? "",
      description: item.description ?? undefined,
      price: item.price ?? undefined,
      tags: item.tags ?? undefined,
      image: mapMedia(item.image),
    }));

const mapMenuCategories = (categories?: StrapiMenuCategory[]): MenuCategory[] =>
  (categories ?? [])
    .filter((category) => Boolean(category.title))
    .map((category) => ({
      id: category.id,
      title: category.title ?? "",
      description: category.description ?? undefined,
      items: mapMenuItems(category.items),
    }));

const mapFooterColumns = (columns?: StrapiFooterColumn[]): FooterLinkGroup[] =>
  (columns ?? []).map((column) => ({
    id: column.id,
    title: column.title ?? undefined,
    links: mapLinks(column.links),
  }));

const mapHeader = (attributes?: CafeHomeAttributes): HeaderContent => ({
  title: attributes?.headerTitle ?? "Derbent Cafe",
  tagline: attributes?.headerTagline ?? undefined,
  logo: mapMedia(attributes?.headerLogo),
  navigation: mapLinks(attributes?.navigation),
});

const mapHero = (attributes?: CafeHomeAttributes): HeroSection => ({
  title: attributes?.heroTitle ?? "Signature Caucasus cuisine",
  subtitle: attributes?.heroSubtitle ?? undefined,
  image: mapMedia(attributes?.heroImage),
});

const mapContact = (attributes?: CafeHomeAttributes): ContactInfo => ({
  phone: attributes?.deliveryPhone ?? "",
  note: attributes?.deliveryNote ?? undefined,
  whatsapp: attributes?.whatsappLink ?? undefined,
});

const mapFooter = (attributes?: CafeHomeAttributes): FooterContent => ({
  columns: mapFooterColumns(attributes?.footerColumns),
  address: attributes?.footerAddress ?? undefined,
  schedule: attributes?.footerSchedule ?? undefined,
  socialLinks: mapLinks(attributes?.footerSocial),
  copyright: attributes?.footerCopyright ?? undefined,
});

export const getCafeContent = async (): Promise<CafeContent> => {
  const response = await strapiGet<CafeHomeResponse>("/api/cafe-home");
  const attributes = response.data?.attributes;

  return {
    header: mapHeader(attributes),
    hero: mapHero(attributes),
    menu: mapMenuCategories(attributes?.menuCategories),
    contact: mapContact(attributes),
    footer: mapFooter(attributes),
  };
};

