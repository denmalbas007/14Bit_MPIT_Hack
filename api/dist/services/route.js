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
 * @param {} options.name
 * @throws {Error}
 * @return {Promise}
 */
function postRoute(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const newRoute = yield models_1.Route.create({
            name: options.name,
        });
        return {
            status: 200,
            data: {
                newRoute
            }
        };
    });
}
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
function getRoute(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const routes = yield models_1.Route.findAll();
        return {
            status: 200,
            data: {
                routes
            }
        };
    });
}
/**
 * @param {Object} options
 * @param {Number} options.driverId
 * @param {Number} options.routeId
 * @param {Date} options.startsAt
 * @param {Date} options.endsAt
 * @throws {Error}
 * @return {Promise}
 */
function postShift(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const newShift = yield models_1.Shift.create({
            driverId: options.driverId,
            routeId: options.routeId,
            startsAt: options.startsAt,
            endsAt: options.endsAt
        });
        return {
            status: 200,
            data: {
                newShift
            }
        };
    });
}
/**
 * @param {Object} options
 * @param {Number} options.routeId
 * @param {Array} options.schedules
 * @throws {Error}
 * @return {Promise}
 */
function putRouteByRouteIdSchedule(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const route = yield models_1.Route.findOne({
            where: {
                id: options.routeId
            }
        });
        yield models_1.RouteSchedule.destroy({
            where: {
                routeId: route.id
            }
        });
        for (const schedule of options.schedules) {
            yield models_1.RouteSchedule.create({
                routeId: route.id,
                timeOfStart: schedule.timeOfStart,
                timeOfEnd: schedule.timeOfEnd,
                frequency: schedule.frequency
            });
        }
        return {
            status: 200,
            data: 'putRouteByRouteidSchedule ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {} options.busStations
 * @param {} options.routeId
 * @throws {Error}
 * @return {Promise}
 */
function putRouteByRouteIdBusStation(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const route = yield models_1.Route.findOne({
            where: {
                id: options.routeId
            }
        });
        yield models_1.BusRouteStation.destroy({
            where: {
                routeId: route.id,
            }
        });
        for (const busStation of options.busStations) {
            yield models_1.BusRouteStation.create({
                routeId: route.id,
                busStationId: busStation.id
            });
        }
        return {
            status: 200,
            data: 'postRouteByRouteidBusStation ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {Number} options.routeId
 * @throws {Error}
 * @return {Promise}
 */
function getRouteByRouteId(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const route = yield models_1.Route.findOne({
            where: {
                id: options.routeId
            },
            include: [
                {
                    model: models_1.RouteSchedule
                },
                {
                    model: models_1.BusRouteStation
                }
            ]
        });
        return {
            status: 200,
            data: {
                route
            }
        };
    });
}
exports.default = {
    postRoute,
    getRoute,
    putRouteByRouteIdSchedule,
    putRouteByRouteIdBusStation,
    getRouteByRouteId,
    postShift
};
//# sourceMappingURL=route.js.map