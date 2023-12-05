import {BusSim} from "./BusSim"
import {PassengerSim} from "./PassengerSim";
import {StationSim} from "./StationSim";
export class RouteSim {
    routeId = 0
    buses: Array<BusSim>
    stations: Array<StationSim>
    constructor(routeId) {
        this.routeId = routeId
    }

    addBus(bus: BusSim) {
        this.buses.push(bus)
    }
    _willBusGoThroughStation(stationFromId,stationToId, orientation) {
        if (this.stations.findIndex((station) => station.stationId === stationFromId ) >=
            this.stations.findIndex((station) => station.stationId === stationToId)) {
            return orientation === 1
        }
    }
    addPassenger(passenger: PassengerSim, stationId) {
        for (let i = 0; i < this.stations.length; ++i) {
            if (this.stations[i].stationId === stationId) {
                this.stations[i].addPassenger(passenger);
            }
        }
    }
    update() {
        for (let i = 0; i<this.buses.length; ++i) {
            this.buses[i].update();
        }
        for (let i = 0; i < this.stations.length; ++i) {
            this.stations[i].update();

            for (let j = 0; j < this.buses.length; ++j) {
                if (this.buses[j].stopActiveId !== -1) {

                    this.buses[j].passengers = this.buses[j].passengers.filter((passenger)=>{
                        return passenger.exitStationId !== this.stations[i].stationId;
                    })

                    this.stations[i].passengers = this.stations[i].passengers.filter((passenger)=>{
                        if (this.buses[j].passengers.length >= this.buses[j].capacity) return true
                        if (this._willBusGoThroughStation(this.stations[i].stationId,passenger.exitStationId,this.buses[j].orientation)) return true
                        this.buses[j].passengers.push(passenger);
                        return false;
                    })
                }

            }
        }


    }
}
