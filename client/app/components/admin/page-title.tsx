import Link from 'next/link'
import React from 'react'

type IProps = {
    title: string
    link?: string
    linkLabel?: string
}

const PageTitle = ({ title, link, linkLabel }: IProps) => {
    return (
        <div className='flex justify-between items-center bg-white border border-gray-200 py-4 px-5 rounded'>
            <h1 className='font-bold text-xl text-gray-700'>{title}</h1>

            {link && <Link href={link}>
                <p className='bg-gray-700 text-white w-fit py-3 px-4 rounded font-bold min-w-30 text-center' >{linkLabel ?? 'Link Label'}</p>
            </Link>}
        </div>
    )
}

export default PageTitle