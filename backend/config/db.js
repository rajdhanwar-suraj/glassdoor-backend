const { MongoClient } = require("mongodb");

// const client = new MongoClient(process.env.MONGO_URI);

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds
  connectTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
});


let dbInstance;

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    dbInstance = client.db(process.env.MONGO_DATABASE);
  } catch (e) {
    console.error("Could not connect to MongoDB", e);
  }
};

const getDB = () => {
  return dbInstance;
};

module.exports = { connectDB, getDB };
