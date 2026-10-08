import BrandList from '@/app/components/admin/brand/list'
import PageTitle from '@/app/components/admin/page-title'
import React from 'react'

const BrandsPage = () => {
    return (
        <section className='h-full bg-[#f8f8f8] pb-10'>
            <PageTitle
                title='All Brands'
                link='/admin/brands/create'
                linkLabel='Add New Brand'

            />

            {/* list */}
            <BrandList />


        </section>
    )
}

export default BrandsPage