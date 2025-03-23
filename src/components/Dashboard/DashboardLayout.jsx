import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DashboardHeader from './DashboardHeader'

const DashboardLayout = ({ children }) => {

    const pathname = usePathname()
    const [isToggle, setIsToggle] = useState(false)

    console.log('check now', isToggle)

    const handleToggle = () => {
        setIsToggle(!isToggle)
    }


    const navigationInfo = [
        {
            id: "1",
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            id: "2",
            name: "Profile",
            path: "/dashboard/profile"
        },
        {
            id: "3",
            name: "Settings",
            path: "/dashboard/settings"
        }
    ]

    return (
        <div className='flex relative font-rubik'>
            <div className={`${isToggle ? "translate-y-20 translate-x-0 duration-300" : "-translate-x-full translate-y-20 duration-300"} z-50 absolute lg:static lg:translate-y-0 lg:translate-x-0  left-0  bg-white w-52 border h-screen`}>
                <h1 className='px-3 py-5 border-b border-[#bbb]'>Dynamic Dashboard</h1>
                {
                    navigationInfo.map(navi => (
                        <Link key={navi.id} href={navi.path}>
                            <p className={`${pathname === navi.path && "bg-[#07ab4e] text-white"} p-3`}>{navi.name}</p>
                        </Link>
                    ))
                }
            </div>
            <main className='w-full z-10'>
                <div>
                    <DashboardHeader handleToggle={handleToggle} />
                </div>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout