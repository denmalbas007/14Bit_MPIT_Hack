export class PassengerSim {
    exitStationId = 0
    insideBus = 0
    waitTime = 0
    constructor(exitStation) {
     this.exitStationId = exitStation
    }
    update() {
        if (!this.insideBus) {
            this.waitTime += 1;
        }
        if (this.insideBus) {
            this.waitTime = 0;
        }

    }

}