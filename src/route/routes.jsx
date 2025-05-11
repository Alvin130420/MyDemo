import Hero from "../pages/Hero"
import NotFound from "../pages/NotFound"
import Footer from "../pages/Footer"
import Pricing from "../pages/Pricing"
import Institutions from "../pages/Institutions"

import Navbar from "../pages/Navbar"
import { Children } from "react"


const routes = [
    { path: "", element:<Hero/>},
    { path: "*", element: <NotFound />, },
    // { path: "pricing", element: <Pricing />, },
    // { path: "institutions", element: <Institutions />, }
]
export default routes