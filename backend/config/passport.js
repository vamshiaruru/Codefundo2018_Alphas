const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const userModel = require("../models/user.model");
const credentials = require("./auth");

passport.use(new googleStrategy({
    clientID: credentials.gAuth.client_id,
    clientSecret: credentials.gAuth.client_secret,
    callbackURL: credentials.gAuth.callback_url
}, (accessToken, refreshToken, profile, done) => {
        userModel.findOne({googleId: profile.id}, (err, user) => {
            if(user){
                console.log("google successfully logged");
                done(null, user);
            } else{
                new User({
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    mobile: 0,
                    password: "a"
                }).save().then( newUser => {
                    done(null, newUser);
                });
            }
        })
    }
));
