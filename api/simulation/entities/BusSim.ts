import {PassengerSim} from "./PassengerSim";
import {StationSim} from "./StationSim";
export class BusSim {
    orientation = 0
    has_started = "waiting"

    restTimeElapsed = 0
    timeBetweenStops = 100
    timeForStop = 15
    stopTimeElapsed = 0
    path_step = 0
    path_station = 0
    passengers: Array<PassengerSim>
    stations: Array<StationSim>
    capacity = 100
    busId = 0
    latitude = 0
    longitude = 0
    constructor({busId, orientation, stations}) {
        this.busId = busId;
        this.orientation = orientation
        this.stations = stations
    }
    addPassenger(passenger: PassengerSim) {
        this.passengers.push(passenger)
    }
    startShift() {
        this.has_started = "driving";
    }
    update() {
        if (this.has_started === "waiting") {
            this.restTimeElapsed += 1
            return;
        }



        if (this.path_step >= this.timeBetweenStops) {
            this.path_step = this.timeBetweenStops

            this.stopTimeElapsed += 1
            if (this.stopTimeElapsed < this.timeForStop) return;

            this.stopTimeElapsed = 0
            this.path_station += this.orientation ? 1 : -1
            this.path_step = 0
        } else {
            this.path_step += 1 + Math.random() * 2

        }

        if (this.path_station >= this.stations.length || this.path_station < 0) {

            this.path_station = this.orientation ? this.stations.length - 1 : 0
            this.path_step = 0
            this.has_started = "waiting"
            this.orientation = (this.orientation + 1) % 2;
            return;
        }



        const newPassengers = [];
        for (const passenger of this.passengers) {
            if (this.stations[this.path_station].stationId !== passenger.exitStationId) {
                newPassengers.push(passenger)
            }
        }
        this.passengers = newPassengers;
        if (this.orientation) {
            const deltaLatitude = this.stations[this.path_station + 1].latitude - this.stations[this.path_station].latitude
            const deltaLongitude = this.stations[this.path_station + 1].longitude - this.stations[this.path_station].longitude

            this.latitude = this.stations[this.path_station].latitude + this.path_step/100 * deltaLatitude
            this.longitude = this.stations[this.path_station].latitude + this.path_step/100 * deltaLongitude
        } else {
            const deltaLatitude = this.stations[this.path_station].latitude - this.stations[this.path_station - 1].latitude
            const deltaLongitude = this.stations[this.path_station].longitude - this.stations[this.path_station - 1].longitude
            this.latitude = this.stations[this.path_station].latitude + this.path_step/100 * deltaLatitude
            this.longitude = this.stations[this.path_station].latitude + this.path_step/100 * deltaLongitude
        }

    }

}
