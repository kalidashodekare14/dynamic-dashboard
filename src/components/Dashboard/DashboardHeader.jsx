"use client"
import React, { useEffect } from 'react'
import { FaBars } from "react-icons/fa6";


const DashboardHeader = ({ handleToggle }) => {

    const handleLogout = () => {
        localStorage.removeItem("token")
    }

    return (
        <div className={`p-3 shadow flex justify-between items-center`}>
            <FaBars className='lg:hidden' onClick={handleToggle} />
            <h1>Welcome Dashboard</h1>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-32 rounded-full">
                        <img
                            className='w-full'
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li onClick={handleLogout}><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardHeader