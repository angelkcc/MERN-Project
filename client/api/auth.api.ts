import { LoginInput, RegisterInput } from "@/app/types/auth.types";
import axios, { AxiosError } from "axios";

//* mutation function
export const login = async (data: LoginInput) => {
  try {
    // send post req
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/login",
      data,
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error?.response?.data;
    }
  }
};

// register
export const Register = async (data: RegisterInput) => {
    try{
        const response = await axios.post(
            "http://localhost:8080/api/v1/auth/register",
            data
        );
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw error?.response?.data;
        }
    }
};
