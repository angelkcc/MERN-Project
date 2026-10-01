'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Tags,
    Layers,
    LogOut
} from 'lucide-react'

const Sidebar = () => {

    const pathname = usePathname()

    const menuItems = [
        {
            name: 'Dashboard',
            href: '/admin',
            icon: LayoutDashboard
        },
        {
            name: 'Products',
            href: '/admin/products',
            icon: Package
        },
        {
            name: 'Orders',
            href: '/admin/orders',
            icon: ShoppingCart
        },
        {
            name: 'Users',
            href: '/admin/users',
            icon: Users
        },
        {
            name: 'Brands',
            href: '/admin/brands',
            icon: Tags
        },
        {
            name: 'Categories',
            href: '/admin/categories',
            icon: Layers
        }
    ]

    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">

            {/* Logo */}
            <div className="h-20 flex items-center px-6 border-b border-gray-700">
                <h1 className="text-xl font-bold">
                    Admin Panel
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">

                <p className="text-xs text-gray-400 uppercase mb-3">
                    Menu
                </p>

                <div className="space-y-2">

                    {menuItems.map((item) => {

                        const Icon = item.icon

                        const isActive =
                            pathname === item.href

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                                    ${
                                        isActive
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-800'
                                    }
                                `}
                            >
                                <Icon size={20} />

                                <span>
                                    {item.name}
                                </span>
                            </Link>
                        )
                    })}

                </div>

            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-700">

                <button
                    className="flex items-center gap-3 w-full px-4 py-3
                    text-gray-300 hover:bg-gray-800 rounded-lg transition"
                >
                    <LogOut size={20} />

                    <span>
                        Logout
                    </span>
                </button>

            </div>

        </aside>
    )
}

export default Sidebar