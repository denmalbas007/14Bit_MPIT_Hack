import {Bus, BusRouteStation, BusStation, Route, Shift, User} from "../database/models";
import {RouteSim} from "./entities/RouteSim";
import {BusSim} from "./entities/BusSim";
import {StationSim} from "./entities/StationSim";


async function start_simulation() {
    const routes = await Route.findAll({
        include: [
            {
                model: BusRouteStation,
                include: [
                    BusStation
                ]
            },
            {
            model: Shift,
            include: [
                Bus,
                User
            ]
        }]
    });
    const routesSim: Array<RouteSim> = []
    for (const route of routes) {
        const busStations: Array<StationSim> = []
        for (const routeStation of route.busRouteStations) {
            const newStation = new StationSim(routeStation.busStationId,routeStation.busStation.latitude,routeStation.busStation.longitude)
            busStations.push(newStation)
        }
        const newRoute = new RouteSim(route.id, route.name);
        newRoute.stations = busStations;

        for (const shift of route.shifts) {

            const newBus = new BusSim(shift.busId,1,newRoute.stations)
            newRoute.buses.push(newBus);
        }
        routesSim.push(newRoute)
    }
    setInterval(async ()=>{

        for (let i = 0; i < routesSim.length; ++i) {
            routesSim[i].update()
        }
        for (let i = 0; i < routesSim.length; ++i) {
            for (let j = 0; j < routesSim[i].buses.length; ++j) {
                await routesSim[i].buses[j].database_update()
            }
        }
        console.log(routesSim)
    },1000);
}

export default start_simulation()