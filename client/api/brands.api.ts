import { AxiosError } from "axios";
import api from ".";


export const getBrands = async () => {
  try {
    const response = await api.get("/brands");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error?.response?.data;
    }
  }
};
export const createBrand = async (formData: FormData) => {
    try {
        const response = await api.post("/brands", formData);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw error?.response?.data;
        }
    }
};