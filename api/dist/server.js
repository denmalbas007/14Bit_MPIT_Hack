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
const db_1 = __importDefault(require("./database/db"));
const models_1 = require("./database/models");
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app_1 = __importDefault(require("./app"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, models_1.initModels)(db_1.default);
        yield db_1.default.sync();
        console.log("Init models");
        const httpServer = http_1.default.createServer(app_1.default);
        const io = new socket_io_1.Server(httpServer, {
            cookie: true,
            transports: ["polling"],
        });
        app_1.default.set("io", io);
        const port = process.env.PORT || 3001;
        httpServer.listen(port);
    });
}
run();
//# sourceMappingURL=server.js.map