const _ = require("lodash");
const userModel = require("../models/user.model");
const hashPasswordHelper = require("../helpers/bcrypt.helper");

const login = async (userData) => {
    let dbData = await userModel.findOne({mobile: userData.mobile}).exec();
    if(_.isEmpty(dbData)){
        return "User not found!";
    }
    else{
        if(hashPasswordHelper.comparePassword(userData.password, dbData.password)){
            return "success!";
        }
        else{
            throw new Error("Wrong password");
        }
    }
}

const signup = async (userData) => {
    let dbData = await userModel.findOne({mobile: userData.mobile}).exec();
    if(!_.isEmpty(dbData)){
        return "User already exists";
    }
    else{
        let schema = {
            mobile: userData.mobile,
            password: hashPasswordHelper.hashPassword(userData.password)
        }
        let status = await new userModel(schema).save();
        return "User saved";
    }
}

module.exports = {
    login: login,
    signup: signup
}
