import React from 'react'

import CategoryList from './list';
import SectionHeading from '../section-heading';
const CategorySection = () => {
    return (
        <section className='min-h-100 px-20 py-5'>
            {/* heading */}
            <SectionHeading
                title='Categories'
                subTitle='Discover our featured categories'
                link='#'
            />

            {/* category list */}
            <CategoryList />
        </section>
    )
}

export default CategorySection