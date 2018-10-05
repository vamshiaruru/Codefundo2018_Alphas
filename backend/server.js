require("dotenv").config();
const app = require("./app");
const port=process.env.port||3000;
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/alphas");

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is runing on port ${port}`);
    }
})