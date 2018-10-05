const router=require("express").Router();
const userController=require("../controllers/user.controller");
//routes
router.get("/", (req, res) => {
    res.render("index", {title: "User"});
});
router.post("/login",userController.login);
router.post("/signup",userController.signup);
module.exports=router;