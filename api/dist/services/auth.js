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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../database/models");
const auth_1 = __importDefault(require("../config/auth"));
const crypto_1 = __importDefault(require("crypto"));
/**
 * @param {Object} options
 * @param {String} options.email
 * @param {String} options.password
 * @throws {Error}
 * @return {Promise}
 */
function postAuthSignIn(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield models_1.User.findOne({
            where: {
                email: options.email
            }
        });
        if (user === null) {
            return {
                status: 401
            };
        }
        if (bcrypt_1.default.compareSync(options.password, user.passwordHash)) {
            user.secureSessionId = crypto_1.default.randomBytes(auth_1.default.token_size).toString("hex");
            yield user.save();
            return {
                status: 200,
                data: {
                    secureSessionId: user.secureSessionId
                }
            };
        }
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
        const [user, created] = yield models_1.User.findOrCreate({
            where: {
                email: options.email
            }
        });
        if (!created) {
            return {
                status: 401,
            };
        }
        user.passwordSalt = bcrypt_1.default.genSaltSync(auth_1.default.salt_rounds);
        user.passwordHash = bcrypt_1.default.hashSync(options.password, user.passwordSalt);
        Object.assign(user, {
            firstName: options.firstName,
            lastName: options.lastName,
            userType: options.userType
        });
        yield user.save();
        return {
            status: 200,
            data: {}
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