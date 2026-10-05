'use client'
import UserProfile from '@/app/components/ui/user-profile'
import useAuth from '@/hooks/useAuth.hook'
import { Role } from '@/app/types/enum.types'
import Link from 'next/link'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa6'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

const AuthSection = () => {
    const { user, isLoading, isAuthenticated, logout } = useAuth()
    return (
        <div>
            {
                isLoading && <div>
                    <p>Loading</p>
                </div>
            }
            {/* profile */}
            {!isLoading && user && isAuthenticated && <div className='flex items-center gap-3'>
                {user.role !== Role.ADMIN && <div className='flex items-center gap-2'>
                    {/* wish list */}
                    <Link href={'/wishlist'} title='wishlist'>
                        <FaRegHeart size={24} className='text-red-500' />
                    </Link>
                    {/* cart */}
                    <Link href={'/cart'} title='cart'>
                        <HiOutlineShoppingBag size={26} className='text-blue-500 -mt-1' />
                    </Link>
                </div>}

                <UserProfile user={user} logout={logout} />
            </div>}

            {/* auth links */}
            {
                !isLoading && !user && <div className='flex  gap-2'>
                    <Link href='/login' >
                        <button className='border border-black/70 bg-black/70 text-white py-2 px-3 min-w-24 rounded font-bold cursor-pointer hover:text-black/70 hover:bg-white transition-all duration-500'>
                            Login
                        </button>
                    </Link>
                    <Link href='/register'>
                        <button className='border border-black/70 text-black/70 py-2 px-3 min-w-24 rounded font-bold cursor-pointer hover:text-white hover:bg-black/70 transition-all duration-500'>
                            Sign Up
                        </button>
                    </Link>
                </div>
            }
        </div >
    )
}

export default AuthSection