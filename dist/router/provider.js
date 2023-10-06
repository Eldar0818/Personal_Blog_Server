"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_route_1 = __importDefault(require("./blog.route"));
function apiRoutes() {
    const router = (0, express_1.Router)();
    (0, blog_route_1.default)(router);
    return router;
}
exports.default = apiRoutes;
