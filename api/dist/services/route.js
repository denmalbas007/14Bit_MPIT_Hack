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
/**
 * @param {Object} options
 * @param {} options.name
 * @throws {Error}
 * @return {Promise}
 */
function postRoute(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'postRoute ok!'
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
        return {
            status: 200,
            data: 'getRoute ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {Array} options.schedules
 * @throws {Error}
 * @return {Promise}
 */
function putRouteByRouteIdSchedule(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'putRouteByRouteidSchedule ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {} options.busStationId
 * @throws {Error}
 * @return {Promise}
 */
function postRouteByRouteIdBusStation(options) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return {
            status: 200,
            data: 'getRouteByRouteid ok!'
        };
    });
}
exports.default = {
    postRoute,
    getRoute,
    putRouteByRouteIdSchedule,
    postRouteByRouteIdBusStation,
    getRouteByRouteId
};
//# sourceMappingURL=route.js.map