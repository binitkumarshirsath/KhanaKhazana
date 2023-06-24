import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String
    }
    ,
    email : {
        required : true,
        type : String
    },

    password : {
        required : true,
        type : String
    }
},{timestamps : true})

const User = mongoose.model('USER',userSchema);
export default User;