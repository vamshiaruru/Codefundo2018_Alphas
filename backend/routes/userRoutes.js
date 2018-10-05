const router=require("express").Router();
const userController=require("../controllers/user.controller");
//routes
router.post("/login",userController.login);
router.post("/signin",userController.signin);
module.exports=router;