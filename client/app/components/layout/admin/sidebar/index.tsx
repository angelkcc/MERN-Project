// admin sidebar
import React from 'react'
import SidebarContent from './sidebar-content'
import { RiDashboardLine } from "react-icons/ri";



const Sidebar = () => {
    return (
        <aside className='h-screen border-r border-gray-300 w-60'>
            {/* icon */}
            <div className='h-15 flex justify-center items-center border-b border-gray-300'>
                <h1>E-commerce</h1>
            </div>

            <SidebarContent />
        </aside>
    )
}

export default Sidebar