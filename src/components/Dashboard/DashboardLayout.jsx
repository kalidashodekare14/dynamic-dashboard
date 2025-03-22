import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardLayout = ({ children }) => {

    const pathname = usePathname()
    console.log(pathname)

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
        <div className='flex'>
            <div className='border border-[#bbb] w-40 min-h-screen'>
                {
                    navigationInfo.map(navi => (
                        <Link key={navi.id} href={navi.path}>
                            <p className={`${pathname === navi.path && "bg-[#07ab4e] text-white"} p-3`}>{navi.name}</p>
                        </Link>
                    ))
                }
            </div>
            <main className='w-full'>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout