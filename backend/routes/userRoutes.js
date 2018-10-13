const router = require("express").Router();
const userController = require("../controllers/user.controller");
const _ = require("lodash");
//routes
router.get("/", (req, res) => {
    res.render("index", {title: "User"});
});
// since we are using only google auth system, just redirect there.
router.get("/signup", (req, res) => {
    res.redirect("/google/login");
});
router.get("/login", (req, res) => {
    res.redirect("/google/login")
});
// to change mobile number. Should be accessible only if the user is logged in.
router.get("/changeMobile", (req, res) => {
    if(_.isEmpty(req.session.email)){
        res.send("You need to be logged in to see this page..");
    }
    res.render("changeMobile");
})

router.post("/changeMobile", userController.changeMobile);

module.exports = router;
