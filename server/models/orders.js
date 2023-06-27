import mongoose, { Schema } from "mongoose";

const orderData = new Schema({
    email : {
        type : String,
        required : true
    },
    orders : {
        type : Array,
        required : true
    }
    ,

},{timestamps : true})

const Order = mongoose.model('ORDER',orderData);

export default Order;