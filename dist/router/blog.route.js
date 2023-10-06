"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blogs_controller_1 = require("../controllers/blogs.controller");
function blog_routes(router) {
    router.get('/blogs', blogs_controller_1.getAllBlogs);
    router.post('/blogs', blogs_controller_1.createBlog);
    router.get('/blogs/:id', blogs_controller_1.getBlogById);
    router.put('/blogs/:id', blogs_controller_1.updateBlog);
    router.delete('/blogs/:id', blogs_controller_1.deleteBlog);
}
exports.default = blog_routes;
