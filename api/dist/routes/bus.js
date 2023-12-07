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
const bus_1 = __importDefault(require("../services/bus"));
const router = express_1.default.Router();
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        plateNumber: req.body['plateNumber'],
        modelName: req.body['modelName'],
        serialNumber: req.body['serialNumber']
    };
    try {
        const result = yield bus_1.default.postBus(options);
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
        const result = yield bus_1.default.getBuses(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.get('/:busId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        busId: req.params['busId']
    };
    try {
        const result = yield bus_1.default.getBusByBusId(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.put('/:busId/location', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        busId: req.body['busId'],
        latitude: req.body['latitude'],
        longitude: req.body['longitude']
    };
    try {
        const result = yield bus_1.default.putLocation(options);
        res.status(200).send({
            status: 200,
        });
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
exports.default = router;
//# sourceMappingURL=bus.js.map