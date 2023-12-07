import {PassengerSim} from "./PassengerSim";
export class StationSim {
    stationId
    routeStationId
    latitude
    longitude
    passengers: Array<PassengerSim> = []
    constructor(stationId,routeStationId,latitude,longitude) {
        this.stationId = stationId
        this.routeStationId = routeStationId
        this.latitude = latitude
        this.longitude = longitude
    }
    addPassenger(passenger: PassengerSim) {
        this.passengers.push(passenger)
    }
    update() {
        for (let i = 0; i < this.passengers.length; ++i) {
            this.passengers[i].update();
        }
    }

}