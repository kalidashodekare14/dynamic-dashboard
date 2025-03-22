import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
var jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const token = req.headers["authorization"]?.split(" ")[1]

            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('check token decoded', decoded)
            const db = await connectDB()
            const userCollection = db.collection('users');
            const user = await userCollection.findOne({ _id: new ObjectId(decoded.id) });
            console.log(user)
            if (!user) {
                return res.status(400).json({ message: "User not found" });
            }
            return res.status(200).json({ user: { email: user.email } })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "No data found" })
        }
    }
}