import mongoose from "mongoose";

async function connectDB() {
    try {
       await mongoose.connect(process.env.DB_URL);
       const fetchedFoodItem = mongoose.connection.db.collection('FoodItems');
       console.log('Connection to DB successful');
       const data = await fetchedFoodItem.find({}).toArray();
       
    } catch (e) {
       console.log(`Error while connecting to the database: ${e}`);
    }
 }
 
 export default connectDB;
