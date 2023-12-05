"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
const sequelize_1 = require("sequelize");
class ChatMessage extends sequelize_1.Model {
    static initModel(sequelize) {
        ChatMessage.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            roomId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            senderId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE
            }
        }, {
            sequelize
        });
        return ChatMessage;
    }
}
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=ChatMessage.js.map