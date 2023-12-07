import {PassengerSim} from "./PassengerSim";
import {StationSim} from "./StationSim";
import {Bus} from "../../database/models";

export class BusSim {
    orientation = 0
    has_started = "waiting"

    restTimeElapsed = 0
    timeBetweenStops = 2
    timeForStop = 2
    stopTimeElapsed = 0
    stopActiveId = -1
    path_step = 0
    path_station = 0
    passengers: Array<PassengerSim> = []
    stations: Array<StationSim> = []
    capacity = 100
    busId = 0
    latitude = 0
    longitude = 0

    constructor(busId, orientation, stations) {
        this.busId = busId;

        this.stations = stations

        this.orientation = orientation
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


            if (this.orientation) {
                this.stopActiveId = this.stations[this.path_station + 1].stationId
            } else {
                this.stopActiveId = this.stations[this.path_station - 1].stationId
            }
            this.stopTimeElapsed += 1
            if (this.stopTimeElapsed <= this.timeForStop) return;

            this.stopTimeElapsed = 0
            this.path_station += this.orientation ? 1 : -1
            this.path_step = 0
            this.stopActiveId = -1
        } else {
            this.path_step += 1 + Math.random() * 2

        }



        const newPassengers = [];
        for (const passenger of this.passengers) {
            if (this.stations[this.path_station].stationId !== passenger.exitStationId) {
                newPassengers.push(passenger)
            }
        }
        this.passengers = newPassengers;


        if (this.path_station >= this.stations.length - 1 && this.orientation || this.path_station <= 0 && !this.orientation) {

            this.path_station = this.orientation ? this.stations.length - 1 : 0
            this.path_step = 0
            this.has_started = "waiting"
            this.orientation = (this.orientation + 1) % 2;
            return;
        }



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
    async database_update() {
        const busObject = await Bus.findOne({
            where: {
                id: this.busId
            }
        })
        busObject.latitude = this.latitude;
        busObject.longitude = this.longitude;
        busObject.passengerCount = this.passengers.length;
        await busObject.save()
    }
}
