import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    const { email, password } = req.body
    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        const currentUser = await userCollection.findOne({ email })
        if (!currentUser) {
            return NextResponse.json({ message: "User Not find" }, { status: 400 })
        }
        const hashPassword = bcrypt.compare(password, currentUser.password)
        if (!hashPassword) {
            return NextResponse.json({ message: "Password not matched" }, { status: 401 })
        }
        const token = jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })
        return res.status(200).json({
            message: "New user registration success",
            token,
            data: currentUser.email
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Data no found", error });
    }
}