const userHelper = require("../helpers/user.helper");
// todo: add data sanitization before updating db. Use express-validator.
const login = async (req, res) => {
    try {
        response = await userHelper.login(req.body);
        res.send(response);
    } 
    catch (err){
        res.render("error", {message: err.message, error:err});
    }
};
const signup = async (req, res) => {
    try {
        response = await userHelper.login(req.body);
        res.send(response);
    } 
    catch (err){
        res.render("error", {message: err.message, error:err});
    }
};
module.exports = {
    login:login,
    signup:signup
}
