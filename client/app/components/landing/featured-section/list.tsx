'use client'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/api/categories.api'
import { TCategory } from '@/app/types/category.types'
import CategoryCard from '../category-section/card'
import { getFeaturedProducts } from '@/api/products.api'
import { TProduct } from '@/app/types/product.types'
import ProductCard from './product.cart'



const FeaturedList = () => {
    const { data, isLoading } = useQuery({
        queryFn: getFeaturedProducts,
        queryKey: ['featured-products']
    })
    console.log(data)
    return (
        <div className='mih-h-60 '>
            {
                isLoading && <div className='h-60 flex items-center justify-center'>
                    <p>Loading</p>
                </div>
            }
            {!isLoading && data?.data?.products.length > 0 && <div className='grid grid-cols-5 gap-4 min-h-60'>
                {data?.data?.products.map((product: TProduct) => <ProductCard key={product._id} product={product} />)}
            </div>}
        </div>
    )
}

export default FeaturedList