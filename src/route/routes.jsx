import Home from "../pages/Home"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import Homes from "../pages/Homes"

const routes = [
    { path: "/", element: <Home />, 
        children: [
            { index: true, element: <Homes /> }, 
            { path: "homes", element: <Homes /> },
            
        ] 
    },
    { path: "/about", element: <About />, },
    { path: "*", element: <NotFound />, },
]
export default routes