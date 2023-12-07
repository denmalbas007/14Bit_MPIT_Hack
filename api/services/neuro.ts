
import axios from "axios"
import {BusRouteStation, StationPassengerHistory} from "../database/models";

async function predictIntention(prompt) {
    const answer = await axios("/intention",{
        baseURL: "http://localhost:6969",
        method: "POST",
        data: {
            prompt
        }
    })
    console.log(answer.data);
    return answer.data
}
async function predictPassengers(routeStationId) {
    const routeStation = await BusRouteStation.findOne({
        where: {
            id: routeStationId
        },
        include: [{
            model: StationPassengerHistory,
            as: "stationPassengerHistories",
            order: [["id", "ASC"]],
            limit: 10
        }],

    });
    let data = {}
    for (let i = 0; i < 10; ++i) {
        if (i< routeStation.stationPassengerHistories.length) {
            data[`Количество людей_${i+1}h_назад`] = routeStation.stationPassengerHistories[i].passengerCount
        } else {
            data[`Количество людей_${i+1}h_назад`] = routeStation.stationPassengerHistories[0].passengerCount
        }
    }
    data[`Индекс остановки`] = routeStation.busStationId;
    const answer = await axios("/prediction",{
        baseURL: "http://localhost:6970",
        method: "POST",
        data: {
            history: data
        }
    })

    console.log(answer.data);
    return answer.data.prediction
}
export default  {
    predictPassengers,
    predictIntention
}
