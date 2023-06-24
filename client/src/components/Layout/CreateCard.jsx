import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CardItem from "./CardItem";

export default function CreateCard() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);

  async function getDatafromBackend() {
    try {
      const response = await axios.post("/api/foodData");
      setFoodItems(response.data[0]);
      setFoodCategory(response.data[1]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDatafromBackend();
  }, []);

  return (
    <div className="container">
      {foodCategory.length !== 0 ? (
        foodCategory.map((category) => {
          return (
            <div  className="d-flex flex-wrap" key={category.CategoryName}>
              <h3>{category.CategoryName}</h3>
              <div className="d-flex flex-wrap">

              
              {foodItems.length !== 0 ? (
                foodItems
                  .filter((food) => category.CategoryName === food.CategoryName)
                  .map((filteredFood,i) => (
                    <CardItem key={i} filteredFood={filteredFood} />
                  ))
              ) : (
                <h2>Loading....</h2>
              )}
              </div>
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
