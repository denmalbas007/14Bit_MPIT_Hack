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
 * @param {Number} options.plateNumber
 * @param {Number} options.modelName
 * @param {Number} options.serialNumber
 * @throws {Error}
 * @return {Promise}
 */
function postBus(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const newBus = yield models_1.Bus.create({
            plateNumber: options.plateNumber,
            modelName: options.modelName,
            serialNumber: options.serialNumber
        });
        return {
            status: 200,
            data: {
                newBus
            }
        };
    });
}
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
function getBuses(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const buses = yield models_1.Bus.findAll({});
        return {
            status: 200,
            data: {
                buses
            }
        };
    });
}
/**
 * @param {Object} options
 * @param {Number} options.busId
 * @throws {Error}
 * @return {Promise}
 */
function getBusByBusId(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const bus = models_1.Bus.findOne({
            where: {
                id: options.busId
            },
        });
        const nowDate = Date.now();
        const shift = yield models_1.Shift.findOne({
            where: {
                busId: options.busId,
                startsAt: {
                    [models_1.Op.lt]: nowDate
                },
                endsAt: {
                    [models_1.Op.gt]: nowDate
                }
            }
        });
        const driver = yield models_1.User.findOne({
            where: {
                id: shift.driverId
            }
        });
        const route = yield models_1.Route.findOne({
            where: {
                id: shift.routeId
            }
        });
        return {
            status: 200,
            data: {
                bus,
                driver,
                route
            }
        };
    });
}
/**
 * @param {Object} options
 * @param {Number} options.busId
 * @param {Number} options.latitude
 * @param {Number} options.longitude
 * @throws {Error}
 * @return {Promise}
 */
function putLocation(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const bus = yield models_1.Bus.findOne({
            where: {
                id: options.busId
            }
        });
        bus.latitude = options.latitude;
        bus.longitude = options.longitude;
        yield bus.save();
        return bus;
    });
}
exports.default = {
    getBuses,
    getBusByBusId,
    postBus,
    putLocation
};
//# sourceMappingURL=bus.js.map