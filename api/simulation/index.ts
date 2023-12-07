import {Bus, BusRouteStation, BusStation, Route, Shift, User} from "../database/models";
import {RouteSim} from "./entities/RouteSim";
import {BusSim} from "./entities/BusSim";
import {StationSim} from "./entities/StationSim";
import { Server } from "socket.io";
import neuro  from "../services/neuro"

async function start_simulation(io: Server) {
    await neuro.predictPassengers(1);
//    await neuro.predictIntention("Я хочу вызвать скорую")
    const routes = await Route.findAll({
        include: [
            {
                model: BusRouteStation,
                as: "busRouteStations",
                include: [
                    {
                        model: BusStation,
                        as: "busStation"
                    }
                ]
            },
            {
            model: Shift,
            as: "shifts",
            include: [
                {
                    model: Bus,
                    as: "bus"
                },
                {
                    model: User,
                    as: "driver"
                }
            ]
        }]
    });
    const routesSim: Array<RouteSim> = []


    for (const route of routes) {
        const busStations: Array<StationSim> = []
        for (const routeStation of route.busRouteStations) {
            const newStation = new StationSim(routeStation.busStationId,routeStation.id, routeStation.busStation.latitude,routeStation.busStation.longitude)
            busStations.push(newStation)
        }
        const newRoute = new RouteSim(route.id, route.name);
        newRoute.stations = busStations;
        let i = 0;
        for (const shift of route.shifts) {
            i+=1;
            const newBus = new BusSim(shift.busId,(i%2==0) ? 1 : 0,newRoute.stations)
            newRoute.buses.push(newBus);
        }
        routesSim.push(newRoute)
    }

    setInterval(async ()=>{
        console.log("simulation update")
        for (let i = 0; i < routesSim.length; ++i) {
            await routesSim[i].update()
        }
        for (let i = 0; i < routesSim.length; ++i) {
            for (let j = 0; j < routesSim[i].buses.length; ++j) {
                await routesSim[i].buses[j].database_update()
            }
        }
        io.of('/').emit('simulationData',{
            data: {
                routesSim
            }
        });
        const buses = await Bus.findAll();
        io.of("/").emit("buses",{buses});
    },1000);
}

export default {start_simulation}