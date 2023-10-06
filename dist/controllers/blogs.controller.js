"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlogs = void 0;
const blogs_service_1 = require("../services/blogs.service");
const getAllBlogs = (req, res) => {
    return (0, blogs_service_1.get_all_blogs)(res);
};
exports.getAllBlogs = getAllBlogs;
