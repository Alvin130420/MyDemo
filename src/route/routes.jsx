import Navbar from "../pages/Navbar"
import Hero from "../pages/Hero"
import NotFound from "../pages/NotFound"
import Footer from "../pages/Footer"



const routes = [
    { path: "/",  
        children: [ 
            { path: "hero", element: <Hero /> },
            
            

            
        ] ,
       },
    { path: "*", element: <NotFound />, },
]
export default routes