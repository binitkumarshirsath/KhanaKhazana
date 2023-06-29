import mongoose from "mongoose";

async function connectDB() {
  try {
    //Connect to db
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to DB");

    }catch (e){
    console.log(`Error while connecting to the database: ${e}`);
  }
}

export default connectDB;
