"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusRouteStation = void 0;
const sequelize_1 = require("sequelize");
class BusRouteStation extends sequelize_1.Model {
    static initModel(sequelize) {
        BusRouteStation.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            routeId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            busStationId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            previousRouteStationId: {
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
        return BusRouteStation;
    }
}
exports.BusRouteStation = BusRouteStation;
//# sourceMappingURL=BusRouteStation.js.map