// admin header
import UserProfile from '@/app/components/ui/user-profile'
import React from 'react'

const AdminHeader = () => {
    return (
        <nav className='flex justify-between py-1 h-15 border-b border-gray-300 w-full pl-4 pr-10 items-center shadow-xs'>
            <h1 className='italic text-gray-500'>Welcome Back, <span className='font-semibold'>Admin</span></h1>
            <UserProfile />
        </nav>
    )
}

export default AdminHeader