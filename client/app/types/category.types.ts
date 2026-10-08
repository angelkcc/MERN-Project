import { IImage, TResponse } from "./global.types";

export type TCategory ={
  name: string;
  description: string;
  image:IImage;
} & TResponse