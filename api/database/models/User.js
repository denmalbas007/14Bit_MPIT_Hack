"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
    static initModel(sequelize) {
        User.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: sequelize_1.DataTypes.TEXT
            },
            lastName: {
                type: sequelize_1.DataTypes.TEXT
            },
            dateOfBirth: {
                type: sequelize_1.DataTypes.DATEONLY
            },
            secureSessionId: {
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
        return User;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map