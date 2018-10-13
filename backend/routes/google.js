let router = require("express").Router();
const passport = require("passport");
const passportStrategy = require("../config/passport");
const _ = require("lodash");

router.get("/", (req, res) => {
    res.send("in google");
})

router.get("/login", (req, res, next) => {
    if (_.isEmpty(req.session.email)){
        next();
    }else{
        consle.log("non empty username");
        // todo: redirect to home page.
    }
}, passport.authenticate("google", {
    scope: [
        "profile",
        "email"
    ]
}));

router.get("/redirect", passport.authenticate("google", {
    failureRedirect: "/login",
    session: false
}), (req, res) => {
    req.session.email = req.user.email;
    if (req.user.mobile === 0){
        res.redirect("/changeMobile");
    }
    res.send(`hi ${req.session.email}`);
});

module.exports = router;
