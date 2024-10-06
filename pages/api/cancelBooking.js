import { connectToDatabase } from "@/lib/mongodb"; // Import your MongoDB connection

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body; // Get email from request body

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // Connect to the database
      const { db } = await connectToDatabase();

      // Find the booking by email and update the status to 'canceled'
      const result = await db.collection("booking_details").updateOne(
        { email }, // Find the booking with this email
        { $set: { status: "canceled" } } // Update the status to 'canceled'
      );

      if (result.matchedCount === 0) {
        // No booking found with this email
        return res.status(404).json({ error: "Booking not found" });
      }

      res.status(200).json({ message: "Booking canceled successfully" });
    } catch (error) {
      console.error("Failed to cancel booking:", error);
      res.status(500).json({ error: "Failed to cancel booking" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" }); // Handle non-POST requests
  }
}
