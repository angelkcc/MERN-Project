import React from 'react'
import hero from '@/app/assets/hero.jpg'
import Image from 'next/image'

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

        </section>
    )
}

export default Hero