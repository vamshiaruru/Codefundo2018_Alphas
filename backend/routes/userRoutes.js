const router=require("express").Router();
const userController=require("../controllers/user.controller");
//routes
router.all("/", userController.signup);
router.post("/login",userController.login);
router.post("/signup",userController.signup);
module.exports=router;