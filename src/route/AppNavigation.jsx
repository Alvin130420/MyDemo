import { useRoutes } from "react-router-dom";
import routes from "./routes";

function AppNavigation(){
    const routing = useRoutes(routes)
    return routing
}
export default AppNavigation