const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    mobile: {
        type:Number,
        required:true
    },
    password: {
        type:String,
        required:true
    }
});

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;
