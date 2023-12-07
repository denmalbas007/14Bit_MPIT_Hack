import {Accident} from "../database/models";

async function getAccidents(options) {
    const accidents = await Accident.findAll({});
    return {
        status: 200,
        data: {
            accidents
        }
    };
}

async function postAccident(options) {
    const accident = await Accident.create({
        driverId: options.driverId,
        busId: options.busId
    });
    return {
        status: 200,
        data: {
            accident
        }
    }
}
export default  {
    getAccidents,
    postAccident,
}