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
const chat_1 = __importDefault(require("../services/chat"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {};
    try {
        const result = yield chat_1.default.getChat(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.get('/:userId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        userId: req.params['userId'],
        firstMessageAt: req.query['firstMessageAt']
    };
    try {
        const result = yield chat_1.default.getChatByUserid(options);
        res.status(200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
}));
router.post('/:userId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        userId: req.params['userId'],
        content: req.query['content']
    };
    try {
        const result = yield chat_1.default.postChatByUserid(options);
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
//# sourceMappingURL=chat.js.map