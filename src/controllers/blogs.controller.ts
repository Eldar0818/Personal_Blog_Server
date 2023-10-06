import { Request, Response } from 'express'
import { 
    create_blog, 
    delete_blog, 
    get_all_blogs, 
    get_blog_by_id, 
    update_blog 
} from '../services/blogs.service'

export const getAllBlogs = (req: Request, res: Response) => {
    return get_all_blogs(res)
}

export const createBlog = (req: Request, res: Response) => {
    return  create_blog(req, res)
}

export const getBlogById = (req: Request, res: Response) => {
    return get_blog_by_id(req, res)
}

export const updateBlog = (req: Request, res: Response) => {
    return update_blog(req, res)
}

export const deleteBlog = (req: Request, res: Response) => {
    return delete_blog(req, res)
}