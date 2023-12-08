export class PathPointSim {
    stationId
    routeStationId
    latitude
    longitude
    constructor(stationId,routeStationId,latitude,longitude) {
        this.stationId = stationId
        this.routeStationId = routeStationId
        this.latitude = latitude
        this.longitude = longitude
    }
    update() {
    }
}