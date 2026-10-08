import Footer from '@/app/components/layout/client/footer'
import NavBar from '@/app/components/layout/client/nav'
import React from 'react'

const ClientLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='h-screen'>
            <NavBar />
            <section className='min-h-screen z-10 mt-16 mb-20'>
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default ClientLayout