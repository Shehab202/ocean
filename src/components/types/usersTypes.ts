import { StaticImageData } from "next/image";

export interface usersTypes {
  title: string;
  description: string;
  image: string | StaticImageData;
  name: string;
}
