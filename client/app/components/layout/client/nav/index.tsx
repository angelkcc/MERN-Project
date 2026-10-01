'use client'

import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'

const NavBar = () => {
    return (
        <nav className="h-16 bg-white border-b shadow-sm fixed top-0 left-0 right-0 z-50">

            <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    MyStore
                </Link>


                {/* Links */}
                <div className="hidden md:flex items-center gap-8">

                    <Link
                        href="/"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Home
                    </Link>

                    <Link
                        href="/products"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Products
                    </Link>

                    <Link
                        href="/brands"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Brands
                    </Link>

                    <Link
                        href="/aboutus"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        About Us
                    </Link>

                    <Link
                        href="/contactus"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Contact
                    </Link>

                </div>


                {/* Right side */}
                <div className="flex items-center gap-5">

                    {/* Cart */}
                    <Link
                        href="/cart"
                        className="relative text-gray-700 hover:text-blue-600 transition"
                    >
                        <ShoppingCart size={22} />

                        {/* Cart count */}
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </Link>


                    {/* Login */}
                    <Link
                        href="/login"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                    >
                        <User size={20} />
                        <span>Login</span>
                    </Link>

                </div>

            </div>

        </nav>
    )
}

export default NavBar