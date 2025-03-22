import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners';

const userProtect = ({ children }) => {

    const router = useRouter()
    const [loading, setLoading] = useState(true);

    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

    useEffect(() => {
        if (!token) {
            router.replace('/login', undefined, { shallow: true }).then(() => {

                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }, [router])

    if (loading) {
        return <div className='h-[600px] flex justify-center items-center'>
            <FadeLoader
                color="#07ab4e"
                margin={5}
            />
        </div>
    }

    return children
}

export default userProtect