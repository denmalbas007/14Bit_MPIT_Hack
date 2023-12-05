"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const bus_station_1 = __importDefault(require("./routes/bus_station"));
const chat_1 = __importDefault(require("./routes/chat"));
const bus_1 = __importDefault(require("./routes/bus"));
const auth_1 = __importDefault(require("./routes/auth"));
const route_1 = __importDefault(require("./routes/route"));
const statistics_1 = __importDefault(require("./routes/statistics"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
/*
 * Routes
 */
app.use('/chat', chat_1.default);
app.use('/bus_station', bus_station_1.default);
app.use('/bus', bus_1.default);
app.use('/route', route_1.default);
app.use('/auth', auth_1.default);
app.use('/statistics', statistics_1.default);
// catch 404
app.use((req, res, next) => {
    console.error(`Error 404 on ${req.url}.`);
    res.status(404).send({ status: 404, error: 'Not found' });
});
// catch errors
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const msg = err.error || err.message;
    console.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
    res.status(status).send({ status, error: msg });
});
exports.default = app;
//# sourceMappingURL=app.js.map