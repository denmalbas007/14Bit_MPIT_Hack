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
 * @throws {Error}
 * @return {Promise}
 */
function getBusStation(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'getBusStation ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {} options.longitude
 * @param {} options.latitude
 * @param {} options.name
 * @throws {Error}
 * @return {Promise}
 */
function postBusStation(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'postBusStation ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {Integer} options.busStationId
 * @throws {Error}
 * @return {Promise}
 */
function getBusStationByBusStationId(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'getBusStationByBusstationid ok!'
        };
    });
}
exports.default = {
    getBusStation,
    postBusStation,
    getBusStationByBusStationId
};
//# sourceMappingURL=bus_station.js.map