import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        default: "",
    },
    text: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const blogModel = mongoose.model("Blog", blogSchema)

export default blogModel