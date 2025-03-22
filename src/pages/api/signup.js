import { connectDB } from "@/lib/connectDB";
// import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const newUser = req.body
        console.log(newUser)
        try {
            const db = await connectDB()
            const userCollection = db.collection('users')
            const hashPasword = bcrypt.hashSync(newUser.password, 14)
            const result = await userCollection.insertOne({ ...newUser, password: hashPasword, createdAt: new Date() })
            return res.status(200).json({ message: "New user registration success", data: result });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "No data found", error });
        }
    }
}