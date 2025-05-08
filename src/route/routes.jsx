import Hero from "../pages/Hero"
import NotFound from "../pages/NotFound"


const routes = [
    { path: "", element:<Hero/>},
    { path: "*", element: <NotFound />, },
]
export default routes