import Image from 'next/image'
import React from 'react'
import profileImage from '@/app/assets/profile.jpg'
import { TUserResponse } from '@/app/types/auth.types'

type IProps = {
    user: TUserResponse,
    logout: () => void
}

const UserProfile = ({ user: { full_name, profile_image }, logout }: IProps) => {
    return (
        <div className='flex gap-2 items-center '>
            {/* profile image */}
            <div className='h-14 w-14 rounded-full overflow-clip p-0.5 border border-blue-400'>
                <Image
                    src={profile_image?.path ?? profileImage}
                    alt={'user profile image'}
                    height={1000}
                    width={1000}
                    className='h-full w-full rounded-full'
                />
            </div>

            <div>
                {/* name  */}
                <p className='text-gray-700 font-semibold text-lg '>{full_name}</p>
                {/* logout button */}
                <p
                    onClick={logout}
                    className='cursor-pointer text-red-500 text-sm w-fit tracking-wider'>Logout</p>
            </div>
        </div>
    )
}

export default UserProfile