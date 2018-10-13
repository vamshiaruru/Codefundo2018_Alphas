const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const userModel = require("../models/user.model");
require('dotenv').config();

passport.use(new googleStrategy({
    clientID: process.env.client_id,
    clientSecret: process.env.client_secret,
    callbackURL: process.env.callback_url
}, (accessToken, refreshToken, profile, done) => {
        userModel.findOne({googleId: profile.id}, (err, user) => {
            if(user){
                done(null, user);
            } else{
                new userModel({
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    mobile: 0,
                }).save().then( newUser => {
                    done(null, newUser);
                });
            }
        })
    }
));
