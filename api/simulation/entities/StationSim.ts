import {PassengerSim} from "./PassengerSim";

export class StationSim {
    stationId
    latitude
    longitude
    passengers: Array<PassengerSim>
    constructor(stationId,latitude,longitude) {
        this.stationId = stationId
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