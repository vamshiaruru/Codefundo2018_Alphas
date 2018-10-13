const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;
