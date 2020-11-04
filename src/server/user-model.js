const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
    name:{
        type: String,
        required: "Name is required"
    },
    email:{
        type: String,
        required: "Email is required",
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is required")
            }
        }
    },
    created:{
        type: Date,
        default: Date.now
    },
    hashed_password:{
        type: String,
        required: "Password is required"
    }
})