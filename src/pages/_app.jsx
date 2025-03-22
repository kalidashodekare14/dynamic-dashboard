import '@/styles/globals.css'
import ProtectRoute from '../hooks/userProtect'

export default function MyApp({ Component, pageProps }) {


    return (
        <ProtectRoute>
            <Component {...pageProps} />
        </ProtectRoute>
    )
}