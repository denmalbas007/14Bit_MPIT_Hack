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
 * @param {String} options.email
 * @param {String} options.password
 * @throws {Error}
 * @return {Promise}
 */
const models_1 = require("../database/models");
function postAuthSignIn(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'getBusByBusid ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {String} options.firstName
 * @param {String} options.lastName
 * @param {String} options.email
 * @param {String} options.password
 * @param {String} options.userType
 * @throws {Error}
 * @return {Promise}
 */
function postAuthSignup(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'getBusByBusid ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {String} options.email
 * @param {String} options.SSID
 * @throws {Error}
 * @return {Promise}
 */
function verifySession(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield models_1.User.findOne({
            where: {
                email: options.email,
            },
        });
        return options.SSID === user.secureSessionId;
    });
}
exports.default = {
    postAuthSignIn,
    postAuthSignup,
    verifySession
};
//# sourceMappingURL=auth.js.map