const userHelper = require("../helpers/user.helper");
// todo: add data sanitization before updating db. Use express-validator.
const login = (req, res) => {
    userHelper.login(req.body).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send("error");
    });

};
const signup = (req, res) => {
    userHelper.signup(req.body).then((response)=>{
        res.send(response);
    }).catch((err)=>{
        res.send("error");
    });
};
module.exports = {
    login:login,
    signup:signup
}