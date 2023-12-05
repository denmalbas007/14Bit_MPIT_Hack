"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoom = void 0;
const sequelize_1 = require("sequelize");
class ChatRoom extends sequelize_1.Model {
    static initModel(sequelize) {
        ChatRoom.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
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
        return ChatRoom;
    }
}
exports.ChatRoom = ChatRoom;
//# sourceMappingURL=ChatRoom.js.map