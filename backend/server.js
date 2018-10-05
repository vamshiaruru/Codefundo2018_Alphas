require("dotenv").config();
const app=require("express")();
const port=process.env.port||3000;
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/alphas");
// bodyParser middleware for post requests
const bodyParser=require("body-parser");
app.use(bodyParser.json());
//routes configuration
const userRoutes=require("./routes/userRoutes");
app.use("/",userRoutes);



app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})