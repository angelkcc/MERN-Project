'use client'
import withAuth from '@/hoc/withAuth.hoc'
import { Role } from '@/app/types/enum.types'
import React from 'react'

const CartPage = () => {
    return (
        <section>
            <h1>CartPage</h1>
        </section>
    )
}

const ProtectedCart = withAuth(CartPage, [Role.USER])
export default ProtectedCart