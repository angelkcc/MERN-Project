import { AxiosError } from "axios";
import api from ".";

export const getFeaturedProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error?.response?.data;
    }
  }
};