import Link from 'next/link'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

type IProps = {
    title: string,
    subTitle: string
    link?: string
}

const SectionHeading = ({ title, subTitle, link }: IProps) => {
    return (
        <header className='flex justify-between items-center'>
            <div>
                {/* title */}
                <h3 className='text-gray-600 font-semibold text-lg'>{title}</h3>
                {/*sub title */}
                <p className='text-gray-500 text-sm'>{subTitle}</p>
            </div>

            {/* link */}
            {link && <Link href={link}>
                <div className='flex items-center gap-0.5 text-gray-500'>
                    <span className='text-sm '>Explore All</span>
                    <FiChevronDown size={20} className='mt-0.5' />
                </div>
            </Link>}
        </header>
    )
}

export default SectionHeading