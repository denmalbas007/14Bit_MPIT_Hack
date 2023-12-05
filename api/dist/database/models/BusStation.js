"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusStation = void 0;
const sequelize_1 = require("sequelize");
class BusStation extends sequelize_1.Model {
    static initModel(sequelize) {
        BusStation.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: sequelize_1.DataTypes.TEXT
            },
            longitude: {
                type: sequelize_1.DataTypes.DOUBLE
            },
            latitude: {
                type: sequelize_1.DataTypes.DOUBLE
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
        return BusStation;
    }
}
exports.BusStation = BusStation;
//# sourceMappingURL=BusStation.js.map