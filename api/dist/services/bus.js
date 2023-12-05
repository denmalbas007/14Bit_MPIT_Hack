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
function getBus(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'getBusByBusid ok!'
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
        return {
            status: 200,
            data: 'getBusByBusid ok!'
        };
    });
}
exports.default = {
    getBus,
    getBusByBusId
};
//# sourceMappingURL=bus.js.map