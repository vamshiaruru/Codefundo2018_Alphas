const router = require("express").Router();
const userController = require("../controllers/user.controller");
//routes
router.get("/", (req, res) => {
    res.render("index", {title: "User"});
});
router.get("/signup", (req, res) => {
    res.render("signup");
});
router.get("/login", (req, res) => {
    res.render("login");
})
router.post("/login", userController.login);
router.post("/signup", userController.signup);
module.exports = router;
