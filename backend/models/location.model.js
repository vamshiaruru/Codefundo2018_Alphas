const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    workers: {
        // Strings of email addresses of each worker working there
        type: [String],
        required: false
    },
    neededHelp: {
        type: Number,
        required: false
    },
    contact: {
        type: Number,
        required: false
    }
});

const locationModel = mongoose.model("loctations", locationSchema);
module.exports = locationModel;
