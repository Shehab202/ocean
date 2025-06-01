import { StaticImageData } from "next/image";

export interface CardType {
  image: string | StaticImageData;
  title: string;
  description: string;
}
export interface priceCardType {
  items: string[];
  activeTab: string;
  description: string;
  title: string;
  price: { monthly: string; annually: string };
}
