import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      room,
      checkInDate,
      checkOutDate,
      guests,
      fullName,
      email,
      phoneNumber,
      paymentMethod,
    } = req.body;

    // Validate the data if needed

    try {
      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db(); // Use your database name if needed

      const bookingData = {
        room,
        checkInDate,
        checkOutDate,
        guests,
        fullName,
        email,
        phoneNumber,
        paymentMethod,
        status: "confirmed", // Add initial status as confirmed
        createdAt: new Date(),
      };

      const result = await db
        .collection("booking_details")
        .insertOne(bookingData);
      client.close();

      res
        .status(201)
        .json({ message: "Booking details saved!", id: result.insertedId });
    } catch (error) {
      console.error("Failed to save booking details:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
