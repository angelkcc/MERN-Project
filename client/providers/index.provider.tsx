'use client'

import AuthProvider from "./auth.provider"
import ClientProvider from "./client.provider"

const Providers=({children}:Readonly<{children:React.ReactNode}>)=>{
    return(
        <ClientProvider>
            <AuthProvider>
            {children}
            </AuthProvider>
        </ClientProvider>
    )
}
export default Providers