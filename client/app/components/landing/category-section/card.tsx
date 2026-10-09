import { TCategory } from '@/app/types/category.types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type TProps = {
    category: TCategory
}

const CategoryCard = ({ category: { _id, name, description, image } }: TProps) => {
    return (
        <div className='min-h-60 mt-5 shadow pb-4 cursor-pointer'>
            {/* image */}
            <div className='h-40 w-full rounded-t overflow-clip' >
                <Image
                    src={image.path}
                    alt={`${name} image`}
                    height={100}
                    width={100}
                    className='h-full w-full object-cover hover:scale-[1.1] transition-all duration-300 hover:grayscale'
                />
            </div>
            {/* name */}
            <div className='px-2 '>
                <h4 className='text-gray-700 font-semibold text-md mt-2'>{name}</h4>
                <p className='text-[13px] text-gray-600 line-clamp-3 mt-1 leading-4 '>{description}</p>
            </div>


        </div>
    )
}

export default CategoryCard