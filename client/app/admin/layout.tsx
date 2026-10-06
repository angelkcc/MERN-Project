'use client'
import AdminHeader from '@/app/components/layout/admin/header'
import Sidebar from '@/app/components/layout/admin/sidebar'
import withAuth from '@/hoc/withAuth.hoc'
import { Role } from '@/app/types/enum.types'
import React from 'react'

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='flex h-screen overflow-clip w-full bg-[#f8f8f8] '>
            {/* sidebar  */}
            <Sidebar />
            <section className='w-full'>
                {/* header */}
                <AdminHeader />
                <section className='p-1 h-full'>
                    {children}
                </section>
            </section>
        </main>
    )
}

const ProtectedAdminLayout = withAuth(AdminLayout, [Role.ADMIN])
export default ProtectedAdminLayout