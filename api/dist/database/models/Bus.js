"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bus = void 0;
const sequelize_1 = require("sequelize");
class Bus extends sequelize_1.Model {
    static initModel(sequelize) {
        Bus.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            plateNumber: {
                type: sequelize_1.DataTypes.TEXT
            },
            modelName: {
                type: sequelize_1.DataTypes.TEXT
            },
            serialNumber: {
                type: sequelize_1.DataTypes.TEXT
            },
            latitude: {
                type: sequelize_1.DataTypes.DOUBLE
            },
            longitude: {
                type: sequelize_1.DataTypes.DOUBLE
            },
            levelOfCharge: {
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
        return Bus;
    }
}
exports.Bus = Bus;
//# sourceMappingURL=Bus.js.map