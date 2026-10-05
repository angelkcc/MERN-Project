'use client'
import React from 'react';
import {AuthContext} from '@/contexts/auth.context';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, logout } from '@/api/auth.api';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AuthProvider=({children}:Readonly<{children:React.ReactNode}>)=>{
   const router= useRouter();
   const queryClient= useQueryClient();
    const {isLoading, data}=useQuery({
        queryFn:getProfile,
        queryKey:['profile'],
        staleTime:5*60*1000,
        refetchOnWindowFocus:'always',
        retry:false,
    
    })
    //logout mutation

    const {mutate,isPending}=useMutation({
        mutationFn:logout,
        onSuccess:(response)=>{
            toast.success(response.message||'Logout successful');
            router.replace('/')
            queryClient.setQueryData(['profile'],null)
        },
        onError:(error)=>{
            toast.error(error.message||'Something went wrong')
        }
    })


    //login


    //register


    return(
        <AuthContext.Provider value={{
            user:data?.data || null,
            isAuthenticated:!!data?.data,
            isLoading:isLoading || isPending,
            createAccount:()=>{},
            login:()=>{},
            logout:mutate
        }}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider