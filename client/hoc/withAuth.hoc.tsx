'use client'
import useAuth from "@/hooks/useAuth.hook";
import { Role } from "@/app/types/enum.types";
import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";
import toast from "react-hot-toast";


function withAuth<P extends object>(
    Component: ComponentType<P>,
    roles?: Role[]
) {
    return function ProtectedPage(props: P) {
        const router = useRouter()
        const { isAuthenticated, user, isLoading } = useAuth()
        // useEffect
        useEffect(() => {
            if (isLoading) return;

            if (!isAuthenticated) {
                toast.error('Please login to continue')
                router.replace('/login')
                return
            }

            if (roles && (!user || !roles.includes(user.role))) {
                toast.error('you are not authorized to access this page')
                router.replace('/unauthorized')
                return
            }

        }, [isAuthenticated, isLoading, router, user])

        if (isLoading) return <div>Loading</div>;

        if (!isAuthenticated) {
            return null
        }

        if (roles && (!user || !roles.includes(user.role))) {
            return null
        }

        return <Component {...props} />

    }

}

export default withAuth