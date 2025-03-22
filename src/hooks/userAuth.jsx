import axios from 'axios';
import { useEffect, useState } from 'react'

const userAuth = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log('No token found');
            return;
        }

        axios.get('/api/user', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setUser(res.data.user)
            })
            .catch(error => {
                console.error("Invaild Token", error)
            })

    }, [])

    return [user]
}

export default userAuth