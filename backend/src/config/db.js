import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect =await mongoose.connect(process.env.DB_URL);
    console.log("Db connection success", connect.connection.host);
  } catch (error) {
    console.log("Db connection failed ", error);
  }
}

export default connectDB;
