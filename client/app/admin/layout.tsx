import React from "react"
import Sidebar from "../components/layout/admin/sidebar"
import AdminHeader from "../components/layout/admin/header"

const AdminLayout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {

    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Main area */}
            <div className="flex-1 flex flex-col">

                {/* Header */}
                <AdminHeader />

                {/* Page content */}
                <main className="flex-1 p-6">
                    {children}
                </main>

            </div>

        </div>
    )
}

export default AdminLayout