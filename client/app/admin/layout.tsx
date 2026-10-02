import AdminHeader from '@/app/components/layout/admin/header'
import Sidebar from '@/app/components/layout/admin/sidebar'
import React from 'react'

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='flex h-screen w-full'>
            {/* sidebar  */}
            <Sidebar />
            <section className='w-full'>
                {/* header */}
                <AdminHeader />
                <section className='p-1'>
                    {children}
                </section>
            </section>
        </main>
    )
}

export default AdminLayout