const _ = require("lodash");
const locationHelper = require("../helpers/location.helper");

const getLocations = async () => {
    try{
        let locations = await locationHelper.getLocations();
        locs = {
            locs_that_need_help: [],
            locs_that_have_enough_help: []
        };
        _.forEach(locations, location => {
            if(location.workers.length < location.neededHelp){
                locs.locs_that_need_help.push(location);
            } else {
                locs.locs_that_have_enough_help.push(location);
            }
        });
        return locs;
    } catch(err){
        res.render("error", {message: err.message, error:err});
    }
}