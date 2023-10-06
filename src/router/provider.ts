import { Router } from "express"
import blog_routes from "./blog.route"

function apiRoutes() {

    const router = Router()
   
    blog_routes(router)

    return router

}

export default apiRoutes