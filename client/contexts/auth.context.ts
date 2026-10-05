import React from "react";
import {LoginInput, RegisterInput, TUserResponse} from "@/app/types/auth.types";

type TAuthContext = {
    user:TUserResponse | null;
    isAuthenticated:boolean;
    isLoading:boolean;
    login:(data:LoginInput)=> void;
    createAccount:(data:RegisterInput)=> void;
    logout:()=> void;
};


const initialValues:TAuthContext={
    user:null,
    isAuthenticated:false,
    isLoading:false,
    createAccount:()=>{},
    login:()=>{},
    logout:()=>{}
}

//context
export const AuthContext= React.createContext<TAuthContext>(initialValues);




