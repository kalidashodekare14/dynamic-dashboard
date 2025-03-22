import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const userProtect = ({ children }) => {

    const router = useRouter()

    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

    useEffect(() => {
        if (!token) {
            router.replace('/login')
            return null;
        }
    }, [token, router])
    return children
}

export default userProtect