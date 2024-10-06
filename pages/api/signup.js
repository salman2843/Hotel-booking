// hotelb/pages/api/signup.js

import { connectToDatabase } from "@/lib/mongodb"; // Adjust path as necessary
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // Import JWT

const JWT_SECRET = process.env.JWT_SECRET; // Define your JWT secret in environment variables

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const { db } = await connectToDatabase();

      // Check if the user already exists
      const userExists = await db.collection("users").findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const newUser = await db.collection("users").insertOne({
        name,
        email,
        password: hashedPassword,
      });

      // Generate JWT token
      const token = jwt.sign({ id: newUser.insertedId, email }, JWT_SECRET, {
        expiresIn: "1h", // Token expiration time
      });

      return res
        .status(201)
        .json({ message: "User created successfully", token });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
