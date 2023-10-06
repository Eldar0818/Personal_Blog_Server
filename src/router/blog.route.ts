import { Router } from "express"
import { 
    createBlog, 
    deleteBlog, 
    getAllBlogs, 
    getBlogById, 
    updateBlog 
} from "../controllers/blogs.controller"

export default function blog_routes(router: Router) {

    router.get('/blogs', getAllBlogs)

    router.post('/blogs', createBlog)

    router.get('/blogs/:id', getBlogById)

    router.put('/blogs/:id', updateBlog)

    router.delete('/blogs/:id', deleteBlog)

}