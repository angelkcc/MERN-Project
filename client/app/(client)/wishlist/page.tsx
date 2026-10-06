'use client'
import withAuth from '@/hoc/withAuth.hoc'
import { Role } from '@/app/types/enum.types'
import React from 'react'

const WishlistPage = () => {
    return (
        <section>
            <h1>Wishlist Page</h1>
        </section>
    )
}

const ProtectedWishlist = withAuth(WishlistPage, [Role.USER])
export default ProtectedWishlist