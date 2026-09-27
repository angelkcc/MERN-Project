import LoginForm from "@/app/components/forms/login.form";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata={
    title:'Login | Ecommerce',
    description:'Login page for Ecommerce'
}
const LoginPage=()=>{
    return(
        <main className='h-screen flex justify-center items-center flex-col gap-5 tracking-wider'>
           <div className='border border-gray-400 p-4 rounded-md min-h-300px w-200px'>
           {/*title*/}
           <div className= 'flex flex-col gap-1 mb-4'>
            <h1 className='text-2xl text-gray-600 text-center font-semibold'>Login</h1>
            <p className='text-xs text-gray-500'>Fill the form from below to continue</p>
           </div>

        <LoginForm/>   
       </div>
    </main>
    )
}
export default LoginPage;