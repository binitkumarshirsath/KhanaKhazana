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
})

// const User = new mongoose.model('USER',userSchema);

// const Binit = new User({
//     name : "Binit",
//     email : "test@123",
//     password : "123456"
// })

// Binit.save();

export default User;