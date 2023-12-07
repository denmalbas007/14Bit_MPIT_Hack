"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomParticipant = void 0;
const sequelize_1 = require("sequelize");
class ChatRoomParticipant extends sequelize_1.Model {
    static initModel(sequelize) {
        ChatRoomParticipant.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            participantId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            roomId: {
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
        return ChatRoomParticipant;
    }
}
exports.ChatRoomParticipant = ChatRoomParticipant;
//# sourceMappingURL=ChatRoomParticipant.js.map