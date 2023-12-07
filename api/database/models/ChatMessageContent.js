"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageContent = void 0;
const sequelize_1 = require("sequelize");
class ChatMessageContent extends sequelize_1.Model {
    static initModel(sequelize) {
        ChatMessageContent.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            messageId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            contentType: {
                type: sequelize_1.DataTypes.STRING
            },
            content: {
                type: sequelize_1.DataTypes.STRING
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
        return ChatMessageContent;
    }
}
exports.ChatMessageContent = ChatMessageContent;
//# sourceMappingURL=ChatMessageContent.js.map