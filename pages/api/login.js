// hotelb/pages/api/login.js

import { connectToDatabase } from "@/lib/mongodb"; // Adjust path as necessary
import bcrypt from "bcryptjs"; // Import bcrypt
import jwt from "jsonwebtoken"; // Import JWT

const JWT_SECRET = process.env.JWT_SECRET; // Define your JWT secret in environment variables

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const { db } = await connectToDatabase();

      // Find the user by email
      const user = await db.collection("users").findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ id: user._id, email }, JWT_SECRET, {
        expiresIn: "1h", // Token expiration time
      });

      return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
