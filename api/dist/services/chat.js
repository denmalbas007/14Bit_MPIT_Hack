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
const models_1 = require("../database/models");
const sequelize_1 = require("sequelize");
function __getRoomByUserId(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield models_1.ChatRoom.findOne({
            include: {
                model: models_1.ChatRoomParticipant,
                where: {
                    userId: {
                        [sequelize_1.Op.in]: [options.fromUserId, options.toUserId]
                    }
                }
            }
        });
    });
}
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
function getChats(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const chats = yield models_1.ChatRoom.findAll();
        return {
            status: 200,
            data: {
                chats
            }
        };
    });
}
/**
 * @param {Object} options
 * @param {} options.fromUserId
 * @param {} options.toUserId
 * @param {} options.firstMessageAt
 * @throws {Error}
 * @return {Promise}
 */
function getChatByUserid(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const room = yield __getRoomByUserId(options);
        const messages = yield models_1.ChatMessage.findAll({
            where: {
                createdAt: {
                    [sequelize_1.Op.lte]: options.firstMessageAt
                },
                roomId: room.id
            },
            order: ['createdAt', 'DESC'],
            limit: 10,
            include: models_1.ChatMessageContent
        });
        return {
            status: 200,
            data: {
                room,
                messages
            }
        };
    });
}
/**
 * @param {Object} options
 * @param {} options.userId
 * @param {} options.fromUserId
 * @param {} options.toUserId
 * @param {Array} options.content
 * @throws {Error}
 * @return {Promise}
 */
function postChatByUserid(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const room = yield __getRoomByUserId(options);
        const newMessage = yield models_1.ChatMessage.create({
            roomId: room.id,
            senderId: options.fromUserId
        });
        for (const content of options.content) {
            yield models_1.ChatMessageContent.create({
                messageId: newMessage.id,
                contentType: content.type,
                content: content.text
            });
        }
        return {
            status: 200,
            data: {
                newMessage
            }
        };
    });
}
exports.default = {
    getChats,
    getChatByUserid,
    postChatByUserid
};
//# sourceMappingURL=chat.js.map