import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='min-h-70 bg-teal-900 text-white'>

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Store */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            MyStore
                        </h2>

                        <p className="text-gray-400 text-sm">
                            Your one-stop shop for quality products.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-2 text-sm text-gray-400">

                            <Link
                                href="/"
                                className="hover:text-white"
                            >
                                Home
                            </Link>

                            <Link
                                href="/products"
                                className="hover:text-white"
                            >
                                Products
                            </Link>

                            <Link
                                href="/brands"
                                className="hover:text-white"
                            >
                                Brands
                            </Link>

                        </div>
                    </div>


                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Company
                        </h3>

                        <div className="flex flex-col gap-2 text-sm text-gray-400">

                            <Link
                                href="/aboutus"
                                className="hover:text-white"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/contactus"
                                className="hover:text-white"
                            >
                                Contact Us
                            </Link>

                        </div>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="text-sm text-gray-400 space-y-2">

                            <p>
                                Email: support@mystore.com
                            </p>

                            <p>
                                Phone: +977 9800000000
                            </p>

                            <p>
                                Kathmandu, Nepal
                            </p>

                        </div>
                    </div>

                </div>


                {/* Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">

                    <p className="text-sm text-gray-500">
                        © 2026 MyStore. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer