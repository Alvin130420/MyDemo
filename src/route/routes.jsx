import Hero from "../pages/Hero"
import NotFound from "../pages/NotFound"
import Footer from "../pages/Footer"
import Pricing from "../pages/Pricing"
import Institutions from "../pages/Institutions"



const routes = [
    { path: "/", element:<Hero/>, 
        children:[{path:"/", element:<Hero/>}]
     },
    { path: "*", element: <NotFound />, },
    { path: "pricing", element: <Pricing />, },
    { path: "institutions", element: <Institutions />, }
]
export default routes