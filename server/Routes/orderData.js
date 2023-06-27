import mongoose from "mongoose";
import express from "express";
import Order from "../models/orders.js";
const router = express.Router();

router.post("/orderData", async (req, res) => {
  const { email, data, date } = req.body;
  
  const newData = [date,...data];
  const e_id = await Order.findOne({ email });

  if (e_id !== null) {
    try {
      await Order.findOneAndUpdate({ email }, { $push: { date : date ,orders : newData } });
      res.status(200).send({ success: "true" });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const newOrder = new Order({
        email : email,
        orders : [newData],
      });
      await newOrder.save();
      res.status(200).send({ success: "true" });
    } catch (error) {
      console.log(error);
    }
  }
});

router.post('/myOrders',async (req,res)=>{
  try {
  
    const email = req.body.email
    const data = await Order.findOne({email});
    return res.send({data : data});
  } catch (error) {
    console.log(error);
  }
})

export default router;
