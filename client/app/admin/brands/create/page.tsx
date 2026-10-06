import AddNewBrand from '@/app/components/admin/brand/add'
import PageTitle from '@/app/components/admin/page-title'
import React from 'react'

const CreateBrandPage = () => {
    return (
        <section className='h-full bg-[#f8f8f8]'>
            <PageTitle
                title='Add New Brand'
                link='/admin/brands'
                linkLabel='Back'
            />

            {/* list */}
            <AddNewBrand />


        </section>
    )
}

export default CreateBrandPage