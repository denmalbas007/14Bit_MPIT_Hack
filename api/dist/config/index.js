"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("./db");
const mailer = require("./mailer");
const storage = require("./storage");
const translator = require("./translator");
exports.default = Object.assign(Object.assign({ serverBaseUrl: "/api/v1/", serverDomain: "https://14-bit.ru" }, db), mailer);
//# sourceMappingURL=index.js.map