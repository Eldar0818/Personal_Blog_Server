import { Response, Request } from "express";
import blogModel from "../models/Blog";
import { log } from "console";

export async function get_all_blogs(res: Response) {
    try {
        const resp = await blogModel.find()
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
}

export async function create_blog(req: Request, res: Response) {

    try {
        blogModel.create(req.body)
        res.status(201).json("New blog has been created.")
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }

}

export async function get_blog_by_id(req: Request, res: Response) {
    const blogId = req.params.id
    try {
        const blog = await blogModel.findById(blogId)

        if(!blog)
        {
            return res.status(404).json("Blog not found :(")
        }

        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
}

export async function update_blog(req: Request, res: Response) {
    const blogId = req.params.id
    try {
        const updatedBlog = await blogModel.findByIdAndUpdate(blogId, req.body, {new: true})
        if(!updatedBlog){
            return res.status(404).json("Blog not found :(")
        }
        res.status(200).json("Blog has been updated.")
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
}

export async function delete_blog(req: Request, res: Response) {
    const blogId = req.params.id
    try {
        await blogModel.findByIdAndDelete(blogId)
        res.status(200).json("Blog has been deleted.")
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
}