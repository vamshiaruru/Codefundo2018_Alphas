const userHelper=require("../helpers/user.helper");
const login=(req,res)=>{
    userHelper.login(req.body).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send("error");
    });

};
const signin=(req,res)=>{
    userHelper.signin(req.body).then((response)=>{
        res.send(response);
    }).catch((err)=>{
        res.send("error");
    });
};
module.exports={
    login:login,
    signin:signin
}