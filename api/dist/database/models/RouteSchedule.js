"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteSchedule = void 0;
const sequelize_1 = require("sequelize");
class RouteSchedule extends sequelize_1.Model {
    static initModel(sequelize) {
        RouteSchedule.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            routeId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            timeOfStart: {
                type: sequelize_1.DataTypes.DATE
            },
            timeOfEnd: {
                type: sequelize_1.DataTypes.DATE
            },
            frequency: {
                type: sequelize_1.DataTypes.TEXT
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
        return RouteSchedule;
    }
}
exports.RouteSchedule = RouteSchedule;
//# sourceMappingURL=RouteSchedule.js.map