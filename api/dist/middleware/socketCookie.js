"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_1 = __importDefault(require("cookie"));
function default_1(socket, next) {
    try {
        if (socket.request.headers.cookie) {
            socket.request.cookies = cookie_1.default.parse(socket.request.headers.cookie);
            Object.keys(socket.request.cookies).forEach((cookie) => {
                try {
                    socket.request.cookies[cookie] = JSON.parse(socket.request.cookies[cookie]);
                }
                catch (e) { }
            });
        }
    }
    catch (_a) { }
    next();
}
exports.default = default_1;
;
//# sourceMappingURL=socketCookie.js.map