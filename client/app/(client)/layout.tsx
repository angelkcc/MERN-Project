import React from 'react'
import Footer from "../components/layout/client/footer"
import NavBar from "../components/layout/client/nav"

const ClientLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {

    return (
        <main className="min-h-screen flex flex-col">

            <NavBar />

            <section className="flex-1 pt-16">
                {children}
            </section>

            <Footer />

        </main>
    )
}

export default ClientLayout