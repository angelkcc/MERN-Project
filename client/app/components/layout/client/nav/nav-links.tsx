'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type TNavItem = {
    link: string,
    label: string
    id: string
}

const links: TNavItem[] = [
    {
        id: 'home',
        link: '/',
        label: 'Home'
    },
    {
        id: 'products',
        link: '/products',
        label: 'Products'
    },
    {
        id: 'about-us',
        link: '/about-us',
        label: 'About Us'
    },
    {
        id: 'contact-us',
        link: '/contact',
        label: 'Contact Us'
    }

]

const NavLinks = () => {
    return (
        <div className='flex gap-2 font-semibold text-gray-700'>
            {
                links.map((item) => <NavLink key={item.id} item={item} />)
            }

        </div>
    )
}


const NavLink = ({ item: { link, label } }: { item: TNavItem }) => {
    const pathName = usePathname()
    // console.log(pathName)
    const isActive = pathName === link
    return (
        <Link className={`hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''}`} href={link}>
            <span >{label}</span>
        </Link>
    )

}

export default NavLinks