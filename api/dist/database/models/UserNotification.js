"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotification = void 0;
const sequelize_1 = require("sequelize");
class UserNotification extends sequelize_1.Model {
    static initModel(sequelize) {
        UserNotification.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            userId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            content: {
                type: sequelize_1.DataTypes.TEXT
            },
            type: {
                type: sequelize_1.DataTypes.TEXT
            },
            isSuggestion: {
                type: sequelize_1.DataTypes.BOOLEAN
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
        return UserNotification;
    }
}
exports.UserNotification = UserNotification;
//# sourceMappingURL=UserNotification.js.map