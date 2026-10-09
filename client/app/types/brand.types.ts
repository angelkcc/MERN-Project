import { IImage, TResponse } from "./global.types";

export type TBrand = {
  name: string;
  description: string;
  logo: IImage;
} & TResponse;