let router = require("express").Router();
const passport = require("passport");
const passportStrategy = require("../config/passport");
const _ = require("lodash");

router.get("/", (req, res) => {
    res.send("in google");
})

router.get("/login", (req, res, next) => {
    if (_.isEmpty(req.session.username)){
        next();
    }else{
        consle.log("non empty username");
    }
}, passport.authenticate("google", {
    scope: [
        "profile",
        "email"
    ]
}));

router.get("/redirect", (req, res, next) => {
    console.log(req);
});

module.exports = router;
