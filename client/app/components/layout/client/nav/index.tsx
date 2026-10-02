import React from 'react'
import NavLinks from './nav-links'
import UserProfile from '@/app/components/ui/user-profile'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import Link from 'next/link';
const NavBar = () => {
    return (
        <nav className='h-16 border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-xs flex justify-between items-center px-20'>
            {/* logo */}
            <div>
                <p>E Commerce</p>
            </div>

            {/* links */}
            <NavLinks />

            {/*auth / profile */}
            <div>
                {/* profile */}
                <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-2'>
                        {/* wish list */}
                        <Link href={'/wishlist'} title='wishlist'>
                            <FaRegHeart size={24} className='text-red-500' />
                        </Link>
                        {/* cart */}
                        <Link href={'/cart'} title='cart'>
                            <HiOutlineShoppingBag size={26} className='text-blue-500 -mt-1' />
                        </Link>
                    </div>

                    <UserProfile />
                </div>

                {/* auth links */}
            </div>
        </nav>
    )
}

export default NavBar