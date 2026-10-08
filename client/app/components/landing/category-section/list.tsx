'use client'
import CategoryCard from './card'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/api/categories.api'
import { TCategory } from '@/app/types/category.types'



const CategoryList = () => {
    const { data, isLoading } = useQuery({
        queryFn: getCategories,
        queryKey: ['categories']
    })
    console.log(data)
    return (
        <div className='mih-h-60 '>

            {
                isLoading && <div className='h-60 flex items-center justify-center'>
                    <p>Loading</p>
                </div>
            }
            {!isLoading && data?.data?.categories.length > 0 && <div className='grid grid-cols-5 gap-4 min-h-60'>
                {data?.data?.categories.map((category: TCategory) => <CategoryCard key={category._id} category={category} />)}
            </div>}
        </div>
    )
}

export default CategoryList