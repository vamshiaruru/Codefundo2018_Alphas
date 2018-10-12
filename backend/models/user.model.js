const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: false
    }
});

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;
