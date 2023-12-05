"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shift = void 0;
const sequelize_1 = require("sequelize");
class Shift extends sequelize_1.Model {
    static initModel(sequelize) {
        Shift.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            startAt: {
                type: sequelize_1.DataTypes.DATE
            },
            endAt: {
                type: sequelize_1.DataTypes.DATE
            },
            driverId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            busId: {
                type: sequelize_1.DataTypes.BIGINT
            },
            routeId: {
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
        return Shift;
    }
}
exports.Shift = Shift;
//# sourceMappingURL=Shift.js.map