import { MongoClient, Db } from "mongodb";
import { NowRequest, NowResponse } from "@vercel/node";
import url from "url";

let cachedDb: Db = null;

async function connectToDataBase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);
  cachedDb = db;

  return db;
}

export default async (req: NowRequest, res: NowResponse) => {
  const db = await connectToDataBase(process.env.MONGODB_URI);

  const top10 = await db
    .collection("challenges")
    .find({ user_id: { $exists: true } })
    .limit(10)
    .sort({ level: -1 })
    .toArray();
  return res.json(top10);
};
