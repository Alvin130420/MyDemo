import Hero from "../pages/Hero"
import NotFound from "../pages/NotFound"
import Footer from "../pages/Footer"
import About from "../pages/About"
import Features from "../pages/Features"


const routes = [
    { path: "/", element:<Hero/>, 
        children:[{path:"/", element:<Hero/>}]
     },
    { path: "*", element: <NotFound />, },
    { path: "/about", element: <About />, },
    { path: "/features", element: <Features />, },
    ]
export default routes