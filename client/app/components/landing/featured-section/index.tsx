import React from 'react'
import SectionHeading from '../section-heading';
import FeaturedList from './list';
const FeaturedProductSection = () => {
    return (
        <section className='min-h-100 px-20 py-10'>
            {/* heading */}
            <SectionHeading
                title='Featured Products'
                subTitle='Discover our featured products'
                link='#'
            />

            {/* category list */}
            <FeaturedList />
        </section>
    )
}

export default FeaturedProductSection