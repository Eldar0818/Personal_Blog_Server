"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.getBlogById = exports.createBlog = exports.getAllBlogs = void 0;
const blogs_service_1 = require("../services/blogs.service");
const getAllBlogs = (req, res) => {
    return (0, blogs_service_1.get_all_blogs)(res);
};
exports.getAllBlogs = getAllBlogs;
const createBlog = (req, res) => {
    return (0, blogs_service_1.create_blog)(req, res);
};
exports.createBlog = createBlog;
const getBlogById = (req, res) => {
    return (0, blogs_service_1.get_blog_by_id)(req, res);
};
exports.getBlogById = getBlogById;
const updateBlog = (req, res) => {
    return (0, blogs_service_1.update_blog)(req, res);
};
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => {
    return (0, blogs_service_1.delete_blog)(req, res);
};
exports.deleteBlog = deleteBlog;
