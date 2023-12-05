import {BusSim} from "./BusSim"
import {PassengerSim} from "./PassengerSim";
export class RouteSim {
    routeId = 0
    busArray: Array<BusSim>
    stationsArray: Array<PassengerSim>
    constructor(routeId) {
        this.routeId = routeId
    }

    addBus(bus: BusSim) {
        this.busArray.push(bus)
    }
    addPassengers() {
        // TODO: Сделать генерацию пассажиров
    }
    update() {
        for (let i = 0; i<this.busArray.length;++i) {
            this.busArray[i].update();
        }
    }
}
