import {BusSim} from "./BusSim"
import {PassengerSim} from "./PassengerSim";
import {StationSim} from "./StationSim";
import neuro from "../../services/neuro"
import {StationPassengerHistory} from "../../database/models";

export class RouteSim {
    routeId = 0
    routeName = ""
    buses: Array<BusSim> = []
    stations: Array<StationSim> = []
    constructor(routeId, routeName) {
        this.routeId = routeId
    }

    addBus(bus: BusSim) {
        this.buses.push(bus)
    }

    __startBusOrientation(orientation) {
        let maxRestElapsed = 0
        let maxRestBusIndex = 0
        for (let i = 0; i < this.buses.length; ++i) {
            if (this.buses[i].orientation === orientation && this.buses[i].has_started === "waiting" && this.buses[i].restTimeElapsed > maxRestElapsed) {
                maxRestElapsed = this.buses[i].restTimeElapsed;
                maxRestBusIndex = i
            }
        }
        this.buses[maxRestBusIndex].startShift()

    }
    startBus() {
        this.__startBusOrientation(1);
        this.__startBusOrientation(0);
    }
    _willBusGoThroughStation(stationFromId,stationToId, orientation) {
        if (this.stations.findIndex((station) => station.stationId === stationFromId ) >=
            this.stations.findIndex((station) => station.stationId === stationToId)) {
            return orientation !== 1
        }
        return orientation === 1
    }
    addPassenger(passenger: PassengerSim, stationId) {
        for (let i = 0; i < this.stations.length; ++i) {
            if (this.stations[i].stationId === stationId) {
                this.stations[i].addPassenger(passenger);
            }
        }
    }
    tick = 0

    bus_add_queue: number = 0
    async update() {
        this.tick += 1
        if (this.tick % 5 == 0) {
            this.tick = 0
            for (let i = 0; i < this.stations.length; ++i) {
                //let predictedPassengers =  await neuro.predictPassengers(this.stations[i].routeStationId);
                let predictedPassengers = 5
                predictedPassengers += (Math.random() >0.5 ? -1 : 1) * (Math.random() * 5)
                predictedPassengers = Math.max(0,predictedPassengers);
                predictedPassengers = Math.ceil(predictedPassengers)
                await StationPassengerHistory.create({
                    routeStationId: this.stations[i].routeStationId,
                    passengerCount: predictedPassengers
                })
                for (let j = 0; j < predictedPassengers; ++j) {
                    let indexBusStop = Math.floor(Math.random()* (this.stations.length - 1))
                    if (indexBusStop === i) {
                        indexBusStop = Math.max(0,indexBusStop - 1);
                    }
                    if (indexBusStop === i) {
                        indexBusStop = Math.min(this.stations.length - 1, indexBusStop + 1);
                    }
                    this.stations[i].addPassenger(new PassengerSim(this.stations[indexBusStop].stationId));
                }
            }
        }
        let averagePassengersCount = 0;
        if (this.tick % 10 == 0) {
            for (const station of this.stations) {
                averagePassengersCount += station.passengers.length
            }
            averagePassengersCount = averagePassengersCount / this.stations.length;
            averagePassengersCount = Math.ceil(averagePassengersCount / 20);
            this.bus_add_queue += averagePassengersCount
        }
        if (this.bus_add_queue > 0) {
            this.startBus();
            this.bus_add_queue -= 1;
        }


        for (let i = 0; i < this.stations.length; ++i) {
            this.stations[i].update();

            for (let j = 0; j < this.buses.length; ++j) {
                if (this.buses[j].stopActiveId !== -1) {

                    this.buses[j].passengers = this.buses[j].passengers.filter((passenger)=>{
                        return passenger.exitStationId !== this.buses[j].stopActiveId;
                    })

                    this.stations[i].passengers = this.stations[i].passengers.filter((passenger)=>{
                        if (this.buses[j].passengers.length >= this.buses[j].capacity) return true
                        if (!(this.buses[j].stopActiveId === this.stations[i].stationId)) return true
                        if (!this._willBusGoThroughStation(this.stations[i].stationId,passenger.exitStationId,this.buses[j].orientation)) return true
                        this.buses[j].passengers.push(passenger);

                        console.log("passenger in ",this.stations[i].stationId, "wanting to go to", passenger.exitStationId,"goes to bus  ",this.buses[j].busId, " with orientation ",this.buses[j].orientation )
                        return false;
                    })
                }

            }
        }
        for (let i = 0; i<this.buses.length; ++i) {
            this.buses[i].update();
        }



    }
}
