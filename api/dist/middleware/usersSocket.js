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
module.exports = (socket, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const userCookie = (_b = (_a = socket === null || socket === void 0 ? void 0 : socket.request) === null || _a === void 0 ? void 0 : _a.cookies) === null || _b === void 0 ? void 0 : _b.user;
        const successVerify = auth_1.default.verifySession(userCookie);
        if (successVerify) {
            yield socket.join(`user:${userCookie === null || userCookie === void 0 ? void 0 : userCookie.email}`);
        }
        else {
            yield socket.leave(`user:${userCookie === null || userCookie === void 0 ? void 0 : userCookie.email}`);
        }
    }
    catch (e) { }
    next();
});
//# sourceMappingURL=usersSocket.js.map