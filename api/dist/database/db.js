"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const env = process.env.NODE_ENV || 'development';
// @ts-ignore
const db = new sequelize_1.Sequelize(Object.assign({}, db_1.default));
exports.default = db;
//# sourceMappingURL=db.js.map