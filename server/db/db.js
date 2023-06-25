import mongoose from "mongoose";

async function connectDB() {
  try {
    //Connect to db
    await mongoose.connect(process.env.DB_URL);

    //Fetch data from db
    const fetchedFoodDB = mongoose.connection.db.collection("FoodDB")
    const fetchedFoodItem = mongoose.connection.db.collection("FoodItems");
    const fetchedFoodCategory = mongoose.connection.db.collection("FoodCategory");
    global.foodDB = await fetchedFoodDB.find({}).toArray();
    global.foodCategory = await fetchedFoodCategory.find({}).toArray();
    global.foodItems = await fetchedFoodItem.find({}).toArray();
    }catch (e){
    console.log(`Error while connecting to the database: ${e}`);
  }
}

export default connectDB;
