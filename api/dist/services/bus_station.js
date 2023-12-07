"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../database/models");
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
function getBusStations(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const busStations = yield models_1.BusStation.findAll();
        return {
            status: 200,
            data: {
                busStations
            }
        };
    });
}
/**
 * @param {Object} options
 * @param {} options.name
 * @throws {Error}
 * @return {Promise}
 */
function postBusStation(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const busStation = yield models_1.BusStation.create({
            name: options.name
        });
        return {
            status: 200,
            data: {
                busStation
            }
        };
    });
}
/**
 * @param {Object} options
 * @param {Number} options.busStationId
 * @throws {Error}
 * @return {Promise}
 */
function getBusStationByBusStationId(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const busStation = yield models_1.BusStation.findOne({
            where: {
                id: options.busStationId
            }
        });
        const busRouteStations = yield models_1.BusRouteStation.findAll({
            where: {
                busStationId: busStation.id
            }
        });
        const routes = [];
        for (const routeStation of busRouteStations) {
            const route = yield models_1.Route.findOne({
                where: {
                    id: routeStation.routeId
                }
            });
            routes.push(route);
        }
        return {
            status: 200,
            data: {
                busStation,
                routes
            }
        };
    });
}
exports.default = {
    getBusStations,
    postBusStation,
    getBusStationByBusStationId
};
//# sourceMappingURL=bus_station.js.map