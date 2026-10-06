import React from 'react'
import NavLinks from './nav-links'
import AuthSection from './authSection';
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
            <AuthSection />
        </nav>
    )
}

export default NavBar