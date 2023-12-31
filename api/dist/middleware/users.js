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
const auth_1 = __importDefault(require("../services/auth"));
const models_1 = require("../database/models");
function useUserSessionMiddleware(request, response, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        request.activeUser = {
            hasUser: false
        };
        try {
            const userCookie = JSON.parse((_a = request === null || request === void 0 ? void 0 : request.cookies) === null || _a === void 0 ? void 0 : _a.user);
            const successVerify = auth_1.default.verifySession(userCookie);
            if (successVerify) {
                const user = yield models_1.User.findOne({
                    where: {
                        email: userCookie.email
                    }
                });
                request.activeUser = {
                    email: userCookie === null || userCookie === void 0 ? void 0 : userCookie.email,
                    hasUser: true
                };
                return next();
            }
        }
        catch (e) { }
        next();
    });
}
exports.default = {
    useUserSessionMiddleware,
};
//# sourceMappingURL=users.js.map