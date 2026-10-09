
import { TProduct } from '@/app/types/product.types';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbCurrencyRupeeNepalese } from "react-icons/tb";

type TProps = {
    product: TProduct
}

const ProductCard = ({ product: { _id, name, description, cover_image, price } }: TProps) => {
    return (
        <div className='min-h-60 mt-5 shadow rounded overflow-clip'>
            {/* image */}
            <div className='h-40 w-full rounded-t overflow-clip' >
                <Image
                    src={cover_image.path}
                    alt={`${name} image`}
                    height={100}
                    width={100}
                    className='h-full w-full object-cover hover:scale-[1.1] transition-all duration-300 hover:grayscale'
                />
            </div>
            {/* name */}
            <div className='px-2 '>
                <h4 className='text-gray-700 font-semibold text-md mt-2'>{name}</h4>
                <div className='flex gap-1 items-center text-sm my-1 text-teal-800'>
                    <TbCurrencyRupeeNepalese size={16} />
                    <p className='font-semibold '>{price}</p>
                </div>
                <p className='text-[13px] text-gray-600 line-clamp-3 mt-1 leading-4 '>{description}</p>
            </div>


            <Link className='cursor-pointer' href={`/products/${_id}?name=${name}&d=${description}`}  >
                <button className='bg-teal-950 mt-3 w-full text-white  py-3  font-semibold'>
                    View Detail
                </button>
            </Link>


        </div>
    )
}

export default ProductCard