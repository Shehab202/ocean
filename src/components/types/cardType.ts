import { StaticImageData } from "next/image";

export interface CardType {
  image: string | StaticImageData;
  title: string;
  description: string;
}
export interface priceCardType {
  items: string[];
  activeTab: any;
  description: string;
  title: string;
  price: any
}
