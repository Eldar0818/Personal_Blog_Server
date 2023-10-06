"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blogs_controller_1 = require("../controllers/blogs.controller");
function apiRoutes(router) {
    router.get('/blogs', blogs_controller_1.getAllBlogs);
    return router;
}
exports.default = apiRoutes;
