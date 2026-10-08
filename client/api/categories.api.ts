import { AxiosError } from "axios";
import api from ".";


export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error?.response?.data;
    }
  }
};
