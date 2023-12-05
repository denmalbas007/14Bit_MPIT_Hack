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
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("../services/route"));
const router = express_1.default.Router();
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        name: req.body['name']
    };
    try {
        const result = yield route_1.default.postRoute(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.post('/:routeId/shift', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        driverId: req.body['driverId'],
        startsAt: req.body['startsAt'],
        endsAt: req.body['endsAt'],
        routeId: req.params['routeId']
    };
    try {
        const result = yield route_1.default.postShift(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {};
    try {
        const result = yield route_1.default.getRoute(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.put('/:routeId/schedule', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        schedules: req.body['schedules'],
        routeId: req.params['routeId']
    };
    try {
        const result = yield route_1.default.putRouteByRouteIdSchedule(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.put('/:routeId/bus_station', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        busStationId: req.body['busStationId'],
        routeId: req.params["routeId"]
    };
    try {
        const result = yield route_1.default.putRouteByRouteIdBusStation(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.get('/:routeId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        routeId: req.params['routeId']
    };
    try {
        const result = yield route_1.default.getRouteByRouteId(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
exports.default = router;
//# sourceMappingURL=route.js.map