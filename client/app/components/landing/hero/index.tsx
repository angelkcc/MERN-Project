import React from 'react'
import hero from '@/app/assets/hero.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='relative h-[85vh] w-full '>
            {/* overlay */}
            <div className='absolute bg-black/40 inset-0 z-10' />

            {/* bg-image */}
            <div className='absolute inset-0 z-5'>
                <Image
                    src={hero}
                    alt='hero image'
                    height={1000}
                    width={1000}
                    className='h-full w-full'
                />
            </div>

            {/*CTA */}
            <div className="relative z-20">
                <div className="flex min-h-150 items-center px-5 md:px-10">
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-semibold font-serif leading-tight">
                            REVEAL YOUR <br />
                            <span className="text-white">NATURAL</span> GLOW
                        </h1>

                        <p className="mt-5 max-w-md text-[#f8f8f8]">
                            Discover skincare that enhances your natural beauty.
                            Gentle, effective, and made for you.
                        </p>

                        <Link
                            href="/products"
                            className="mt-20 inline-block rounded-full bg-gray-700 px-7 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:opacity-90"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero