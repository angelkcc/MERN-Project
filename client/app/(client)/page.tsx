import Link from 'next/link'

const HomePage = () => {
    return (
        <div>

            {/* Hero */}
            <section className="bg-gray-100">

                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="max-w-2xl">

                        <p className="text-blue-600 font-semibold mb-3">
                            Welcome to MyStore
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                            Everything you need,
                            <span className="text-blue-600">
                                {' '}all in one place.
                            </span>
                        </h1>

                        <p className="mt-5 text-gray-600 text-lg">
                            Discover quality products at great prices.
                        </p>

                        <div className="mt-8 flex gap-4">

                            <Link
                                href="/products"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                            >
                                Shop Now
                            </Link>

                            <Link
                                href="/brands"
                                className="border border-gray-300 hover:bg-white px-6 py-3 rounded-lg transition"
                            >
                                Explore Brands
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* Categories */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <h2 className="text-2xl font-bold text-gray-900">
                    Shop by Category
                </h2>

                <p className="text-gray-500 mt-2">
                    Explore our popular categories
                </p>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

                    <div className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-md transition cursor-pointer">
                        Electronics
                    </div>

                    <div className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-md transition cursor-pointer">
                        Clothing
                    </div>

                    <div className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-md transition cursor-pointer">
                        Shoes
                    </div>

                    <div className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-md transition cursor-pointer">
                        Accessories
                    </div>

                </div>

            </section>

        </div>
    )
}

export default HomePage