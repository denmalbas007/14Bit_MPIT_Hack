"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require('../config/db');
const env = process.env.NODE_ENV || 'development';
const db = new sequelize_1.Sequelize(Object.assign(Object.assign({}, config), { define: {
        underscored: true
    } }));
exports.default = db;
//# sourceMappingURL=db.js.map