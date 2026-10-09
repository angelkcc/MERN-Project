import { TBrand } from "./brand.types";
import { TCategory } from "./category.types";
import { IImage, TResponse } from "./global.types";

export type TProduct = {
  name: string;
  price: number;
  cover_image: IImage;
  images: IImage[];
  category: TCategory;
  brand: TBrand;
  stock: number;
  is_featured?: boolean;
  new_arrival?: boolean;
  description: string;
} & TResponse;