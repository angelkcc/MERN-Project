import Link from 'next/link'
import React from 'react'
import { RiDashboardLine } from 'react-icons/ri'

type TSidebarItem = {
    icon: React.ReactNode,
    label: string,
    id: string,
    link: string
}

const sidebarLinks: TSidebarItem[] = [
    {
        id: 'dashboard',
        link: '/admin',
        label: 'Dashboard',
        icon: <RiDashboardLine />
    },
    {
        id: 'brands',
        link: '/admin/brands',
        label: 'Brands',
        icon: <RiDashboardLine />
    },
    {
        id: 'categories',
        link: '/admin/categories',
        label: 'Categories',
        icon: <RiDashboardLine />
    },
    {
        id: 'products',
        link: '/admin/products',
        label: 'Products',
        icon: <RiDashboardLine />
    },
    {
        id: 'orders',
        link: '/admin/orders',
        label: 'Orders',
        icon: <RiDashboardLine />
    },
    {
        id: 'users',
        link: '/admin/users',
        label: 'Users',
        icon: <RiDashboardLine />
    }

]
const SidebarContent = () => {
    return (
        <div className='flex flex-col gap-1 px-1 pt-1'>
            {
                sidebarLinks.map(item => <LinkItem key={item.id} item={item} />)
            }
        </div>
    )
}



const LinkItem = ({ item: { link, icon, label } }: { item: TSidebarItem }) => {
    return (
        <Link href={link}>
            <div className='flex items-center gap-0.5 border border-gray-300 px-1 py-2.5 rounded-sm text-gray-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>
                {icon}
                <p>{label}</p>
            </div>
        </Link>
    )

}

export default SidebarContent