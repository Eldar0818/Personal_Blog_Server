"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_blog = exports.update_blog = exports.get_blog_by_id = exports.create_blog = exports.get_all_blogs = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
const console_1 = require("console");
function get_all_blogs(res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield Blog_1.default.find();
            res.status(200).json(resp);
        }
        catch (error) {
            res.status(500).json(error);
            (0, console_1.log)(error);
        }
    });
}
exports.get_all_blogs = get_all_blogs;
function create_blog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            Blog_1.default.create(req.body);
            res.status(201).json("New blog has been created.");
        }
        catch (error) {
            res.status(500).json(error);
            (0, console_1.log)(error);
        }
    });
}
exports.create_blog = create_blog;
function get_blog_by_id(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const blogId = req.params.id;
        try {
            const blog = yield Blog_1.default.findById(blogId);
            if (!blog) {
                return res.status(404).json("Blog not found :(");
            }
            res.status(200).json(blog);
        }
        catch (error) {
            res.status(500).json(error);
            (0, console_1.log)(error);
        }
    });
}
exports.get_blog_by_id = get_blog_by_id;
function update_blog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const blogId = req.params.id;
        try {
            const updatedBlog = yield Blog_1.default.findByIdAndUpdate(blogId, req.body, { new: true });
            if (!updatedBlog) {
                return res.status(404).json("Blog not found :(");
            }
            res.status(200).json("Blog has been updated.");
        }
        catch (error) {
            res.status(500).json(error);
            (0, console_1.log)(error);
        }
    });
}
exports.update_blog = update_blog;
function delete_blog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const blogId = req.params.id;
        try {
            yield Blog_1.default.findByIdAndDelete(blogId);
            res.status(200).json("Blog has been deleted.");
        }
        catch (error) {
            res.status(500).json(error);
            (0, console_1.log)(error);
        }
    });
}
exports.delete_blog = delete_blog;
