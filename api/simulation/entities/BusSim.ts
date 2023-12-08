import {PassengerSim} from "./PassengerSim";
import {StationSim} from "./StationSim";
import {Bus, BusChargeHistory} from "../../database/models";
import {PathPointSim} from "./PathPointSim";

export class BusSim {
    orientation = 0
    has_started = "waiting"

    restTimeElapsed = 0
    timeBetweenStops = 3
    timeForStop = 2
    stopTimeElapsed = 0
    stopActiveId = -1
    path_step = 0
    path_station = 0
    passengers: Array<PassengerSim> = []
    path: Array<PathPointSim> = []
    capacity = 100
    charge = 100
    is_charging = 0
    busId = 0
    latitude = 0
    longitude = 0

    constructor(busId, orientation, path) {
        this.busId = busId;

        this.path = path

        this.orientation = orientation
        if (!orientation) {
            this.path_station = this.path.length - 1;
        }
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
        this.charge = Math.max(0,this.charge - (this.stopActiveId === -1 ? 2 : 1))
        if (this.path_step <= 1  && (this.path_station === 0 || this.path_station === this.path.length - 1)) {

            if (this.is_charging === 1) {
                this.charge = Math.min(this.charge + 5, 100);
                if (this.charge === 100) this.is_charging = 0;
                return
            } else {
                if (this.charge < 40) {
                    this.is_charging = 1;
                    return
                } else {
                    this.is_charging = 0;
                }
            }
        }


        if (this.path_step >= this.timeBetweenStops) {


            if (this.orientation) {
                this.stopActiveId = this.path[this.path_station + 1].stationId
            } else {
                this.stopActiveId = this.path[this.path_station - 1].stationId
            }
            if (this.stopActiveId === -1) {
                this.stopTimeElapsed = this.timeForStop;
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
            if (this.path[this.path_station].stationId !== passenger.exitStationId) {
                newPassengers.push(passenger)
            }
        }
        this.passengers = newPassengers;


        if (this.path_station >= this.path.length - 1 && this.orientation || this.path_station <= 0 && !this.orientation) {

            this.path_station = this.orientation ? this.path.length - 1 : 0
            this.path_step = 0
            this.has_started = "waiting"
            this.orientation = (this.orientation + 1) % 2;
            return;
        }



        if (this.orientation) {
            const deltaLatitude = this.path[this.path_station + 1].latitude - this.path[this.path_station].latitude
            const deltaLongitude = this.path[this.path_station + 1].longitude - this.path[this.path_station].longitude

            this.latitude = this.path[this.path_station].latitude + this.path_step/(this.timeBetweenStops+2) * deltaLatitude
            this.longitude = this.path[this.path_station].longitude + this.path_step/(this.timeBetweenStops+2) * deltaLongitude
        } else {
            const deltaLatitude = this.path[this.path_station - 1].latitude - this.path[this.path_station].latitude
            const deltaLongitude = this.path[this.path_station - 1].longitude - this.path[this.path_station].longitude
            this.latitude = this.path[this.path_station].latitude + this.path_step/(this.timeBetweenStops+2) * deltaLatitude
            this.longitude = this.path[this.path_station].longitude + this.path_step/(this.timeBetweenStops+2) * deltaLongitude
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
        busObject.levelOfCharge = this.charge;
        await busObject.save()

        // await BusChargeHistory.create({
        //     busId: this.busId,
        //     charge: this.charge
        // });
    }
}
