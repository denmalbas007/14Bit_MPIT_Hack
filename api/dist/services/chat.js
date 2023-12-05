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
 * @throws {Error}
 * @return {Promise}
 */
function getChat(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'getChat ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {} options.userId
 * @param {} options.firstMessageAt
 * @throws {Error}
 * @return {Promise}
 */
function getChatByUserid(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'getChatByUserid ok!'
        };
    });
}
/**
 * @param {Object} options
 * @param {} options.userId
 * @param {} options.content
 * @throws {Error}
 * @return {Promise}
 */
function postChatByUserid(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            status: 200,
            data: 'postChatByUserid ok!'
        };
    });
}
exports.default = {
    getChat,
    getChatByUserid,
    postChatByUserid
};
//# sourceMappingURL=chat.js.map