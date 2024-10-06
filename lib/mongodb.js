import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  const db = client.db(process.env.HotelBooking); // Ensure you replace 'test' with your database name

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
