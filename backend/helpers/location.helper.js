const _ = require("lodash");
const locationModel = require("../models.location.model");

const getLocations = async () => {
    let users = await locationModel.findOne({}).exec();
    return users;
}

const addLocation = async (name, address) => {
    // add capabilities to let users find address using google map.
    let loc = await locationModel.findOne({name: name, address:address}).exec();
    if(!_.isEmpty(loc)){
        return "Location already exists";
    }
    let schema = {
        name: name,
        address: address,
        workers: [],
        neededHelp: 1
    }
    await new locationModel(schema).save();
    return "Location saved";
}

module.exports = {
    getLocations: getLocations,
    addLocation: addLocation,
}
