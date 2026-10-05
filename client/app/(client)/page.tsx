
import Link from 'next/link'

export default function Home() {
    return (
        <main>

            {/* Hero Section */}
            <section className='bg-gray-50'>
                <div className='max-w-7xl mx-auto px-6 py-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

                        <div>
                            <p className='text-blue-600 font-semibold mb-4'>
                                Welcome to MyStore
                            </p>

                            <h1 className='text-5xl font-bold text-gray-900 leading-tight'>
                                Everything you need,
                                <span className='text-blue-600'>
                                    {' '}all in one place.
                                </span>
                            </h1>

                            <p className='text-gray-600 text-lg mt-6 max-w-lg'>
                                Discover quality products from trusted brands.
                                Shop easily, find what you love, and enjoy a
                                simple shopping experience.
                            </p>

                            <div className='flex gap-4 mt-8'>
                                <Link
                                    href='/products'
                                    className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700'
                                >
                                    Shop Now
                                </Link>

                                <Link
                                    href='/products'
                                    className='border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-white'
                                >
                                    Explore Products
                                </Link>
                            </div>
                        </div>

                        <div className='bg-blue-600 rounded-3xl p-10 min-h-[400px] flex items-center justify-center'>
                            <div className='bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm'>
                                <p className='text-gray-500 text-sm'>
                                    Featured Collection
                                </p>

                                <h2 className='text-3xl font-bold mt-2'>
                                    Shop smarter.
                                </h2>

                                <p className='text-gray-500 mt-3'>
                                    Find your favorite products from brands
                                    you trust.
                                </p>

                                <div className='grid grid-cols-2 gap-4 mt-6'>
                                    <div className='bg-gray-100 rounded-xl p-5 text-center'>
                                        <div className='text-3xl'>👟</div>
                                        <p className='font-semibold mt-2'>
                                            Fashion
                                        </p>
                                    </div>

                                    <div className='bg-gray-100 rounded-xl p-5 text-center'>
                                        <div className='text-3xl'>💻</div>
                                        <p className='font-semibold mt-2'>
                                            Electronics
                                        </p>
                                    </div>

                                    <div className='bg-gray-100 rounded-xl p-5 text-center'>
                                        <div className='text-3xl'>⌚</div>
                                        <p className='font-semibold mt-2'>
                                            Accessories
                                        </p>
                                    </div>

                                    <div className='bg-gray-100 rounded-xl p-5 text-center'>
                                        <div className='text-3xl'>🏠</div>
                                        <p className='font-semibold mt-2'>
                                            Lifestyle
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* About Company */}
            <section className='py-16'>
                <div className='max-w-7xl mx-auto px-6 text-center'>
                    <p className='text-blue-600 font-semibold'>
                        About Us
                    </p>

                    <h2 className='text-3xl font-bold mt-2'>
                        Your trusted online store
                    </h2>

                    <p className='text-gray-600 max-w-2xl mx-auto mt-4'>
                        MyStore brings quality products from trusted brands
                        together in one convenient place. We aim to make
                        online shopping simple, reliable, and enjoyable.
                    </p>
                </div>
            </section>


            {/* Brands */}
            <section className='bg-gray-50 py-16'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='text-center mb-10'>
                        <p className='text-blue-600 font-semibold'>
                            Trusted Brands
                        </p>

                        <h2 className='text-3xl font-bold mt-2'>
                            Shop your favorite brands
                        </h2>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
                        <div className='bg-white p-6 rounded-xl text-center font-bold'>
                            Nike
                        </div>

                        <div className='bg-white p-6 rounded-xl text-center font-bold'>
                            Adidas
                        </div>

                        <div className='bg-white p-6 rounded-xl text-center font-bold'>
                            Apple
                        </div>

                        <div className='bg-white p-6 rounded-xl text-center font-bold'>
                            Samsung
                        </div>

                        <div className='bg-white p-6 rounded-xl text-center font-bold'>
                            Sony
                        </div>
                    </div>
                </div>
            </section>


            {/* Categories */}
            <section className='py-16'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='text-center mb-10'>
                        <p className='text-blue-600 font-semibold'>
                            Categories
                        </p>

                        <h2 className='text-3xl font-bold mt-2'>
                            Explore our categories
                        </h2>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        <div className='border rounded-xl p-8 text-center hover:shadow-md'>
                            <div className='text-4xl'>💻</div>
                            <h3 className='font-bold mt-4'>
                                Electronics
                            </h3>
                        </div>

                        <div className='border rounded-xl p-8 text-center hover:shadow-md'>
                            <div className='text-4xl'>👕</div>
                            <h3 className='font-bold mt-4'>
                                Fashion
                            </h3>
                        </div>

                        <div className='border rounded-xl p-8 text-center hover:shadow-md'>
                            <div className='text-4xl'>👟</div>
                            <h3 className='font-bold mt-4'>
                                Shoes
                            </h3>
                        </div>

                        <div className='border rounded-xl p-8 text-center hover:shadow-md'>
                            <div className='text-4xl'>⌚</div>
                            <h3 className='font-bold mt-4'>
                                Accessories
                            </h3>
                        </div>
                    </div>
                </div>
            </section>


            {/* Featured Products */}
            <section className='bg-gray-50 py-16'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='flex justify-between items-center mb-10'>
                        <div>
                            <p className='text-blue-600 font-semibold'>
                                Featured
                            </p>

                            <h2 className='text-3xl font-bold mt-2'>
                                Featured Products
                            </h2>
                        </div>

                        <Link
                            href='/products'
                            className='text-blue-600 font-semibold'
                        >
                            View All →
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>

                        <div className='bg-white rounded-xl p-5'>
                            <div className='bg-gray-100 h-48 rounded-lg flex items-center justify-center text-6xl'>
                                📱
                            </div>

                            <h3 className='font-bold mt-4'>
                                Smartphone
                            </h3>

                            <p className='text-gray-500 mt-1'>
                                Latest technology
                            </p>

                            <p className='font-bold text-blue-600 mt-3'>
                                Rs. 45,000
                            </p>
                        </div>

                        <div className='bg-white rounded-xl p-5'>
                            <div className='bg-gray-100 h-48 rounded-lg flex items-center justify-center text-6xl'>
                                👟
                            </div>

                            <h3 className='font-bold mt-4'>
                                Running Shoes
                            </h3>

                            <p className='text-gray-500 mt-1'>
                                Comfortable & stylish
                            </p>

                            <p className='font-bold text-blue-600 mt-3'>
                                Rs. 8,500
                            </p>
                        </div>

                        <div className='bg-white rounded-xl p-5'>
                            <div className='bg-gray-100 h-48 rounded-lg flex items-center justify-center text-6xl'>
                                ⌚
                            </div>

                            <h3 className='font-bold mt-4'>
                                Smart Watch
                            </h3>

                            <p className='text-gray-500 mt-1'>
                                Track your everyday life
                            </p>

                            <p className='font-bold text-blue-600 mt-3'>
                                Rs. 12,000
                            </p>
                        </div>

                        <div className='bg-white rounded-xl p-5'>
                            <div className='bg-gray-100 h-48 rounded-lg flex items-center justify-center text-6xl'>
                                🎧
                            </div>

                            <h3 className='font-bold mt-4'>
                                Headphones
                            </h3>

                            <p className='text-gray-500 mt-1'>
                                Immersive sound
                            </p>

                            <p className='font-bold text-blue-600 mt-3'>
                                Rs. 6,500
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* New Arrivals */}
            <section className='py-16'>
                <div className='max-w-7xl mx-auto px-6 text-center'>
                    <p className='text-blue-600 font-semibold'>
                        New Arrivals
                    </p>

                    <h2 className='text-3xl font-bold mt-2'>
                        Fresh products just for you
                    </h2>

                    <p className='text-gray-600 mt-4'>
                        Check out the latest products added to our store.
                    </p>

                    <Link
                        href='/products'
                        className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-blue-700'
                    >
                        Browse Products
                    </Link>
                </div>
            </section>

        </main>
    )
}