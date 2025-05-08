import Hero from "../pages/Hero"
import NotFound from "../pages/NotFound"
import Navbar from "../pages/Navbar"
import { Children } from "react"


const routes = [
    { path: "/", element:<Hero/>, 
        children:[{path:"/", element:<Hero/>}]
     },
    { path: "*", element: <NotFound />, },
]
export default routes