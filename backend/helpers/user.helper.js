const _ = require("lodash");
const userModel = require("../models/user.model");
const locationModel = require("../models.location.model");
const hashPasswordHelper = require("../helpers/bcrypt.helper");

const login = async userData => {
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

const signup = async userData => {
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

const changeMobile = async userData => {
    let user = await userModel.findOne({email: userData.email}).exec();
    if(_.isEmpty(user)){
        throw new Error("User does not exist. :( ");
    }
    user.mobile = userData.mobile;
    await user.save();
    return "Mobile number successfully updated";
}

const addUserToLocation = async (email, locationName, address) => {
    let loc = await locationModel.find({name: locationName, address:address}).exec();
    loc.workers.push(email);
    if(_.isEmpty(loc.contact)){
        let user = await userModel.find({email: email}).exec();
        loc.contact = user.mobile;
    }
    await loc.save();
    return "You have been successfully registered to the location";
}

module.exports = {
    login: login,
    signup: signup,
    changeMobile: changeMobile,
    addUserToLocation: addUserToLocation,
}
