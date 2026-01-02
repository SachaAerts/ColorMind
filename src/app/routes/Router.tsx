import {createBrowserRouter} from "react-router-dom";
import Menu from "../../view/pages/menu/Menu.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: '/',
        children: [
            {
                path:'/',
                element: <Menu/>
            }
        ]
    }
]);

export default router;