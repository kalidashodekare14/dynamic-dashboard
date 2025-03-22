import userAuth from "@/hooks/userAuth"

export default function Home() {

    const [user] = userAuth()

    console.log('check user', user)

    return (
        <div>
            <h1>Welcome Next.js 14</h1>
        </div>
    )
}