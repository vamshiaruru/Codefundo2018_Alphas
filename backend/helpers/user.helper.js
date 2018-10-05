const _=require("underscore");
const userModel=require("../models/user.model");
const hashPasswordHelper=require("../helpers/bcrypt.helper");

const login=(userData)=>{
    return new Promise((resolve,reject)=>{
        console.log(userData);
        let queryPromise=userModel.findOne({mobile:userData.mobile}).exec();
        queryPromise.then((dbData)=>{
            if(_.isEmpty(dbData)){
                resolve("user not found");
            }
            else{
                if(hashPasswordHelper.comparePassword(userData.password,dbData.password)){
                    resolve("success")
                }
                else{
                    resolve("wrong password")

                }
            }
        }).catch((err)=>{
            reject(err);
        })

    });
};
const signup=(userData)=>{
    return new Promise((resolve,reject)=>{
        let queryPromise=userModel.findOne({mobile:userData.mobile}).exec();
        queryPromise.then((dbData)=>{
            if(!_.isEmpty(dbData)){
                resolve("user already exists")
            }
            else{
                new userModel({
                    mobile:userData.mobile,
                    password:hashPasswordHelper.hashPassword(userData.password)
                }).save((err,user)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve("user saved");
                    }
                })
            }
        }).catch((err)=>{
            reject(err)
        })
    });
};
module.exports={
    login:login,
    signup:signup
}
