const bcrypt=require("bcrypt");
const saltRounds = 7;
const hashPassword = (password) => {
    return bcrypt.hashSync(password, saltRounds);
}
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}
module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword
}
