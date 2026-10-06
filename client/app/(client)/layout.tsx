import Footer from '@/app/components/layout/client/footer'
import NavBar from '@/app/components/layout/client/nav'
import React from 'react'

const ClientLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main>
            <NavBar />
            <section className='min-h-[80vh] relative top-16 z-0'>
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default ClientLayout