import {createBrowserRouter} from "react-router-dom";
import Menu from "../../view/pages/menu/Menu.tsx";
import GamePage from "@/view/pages/game/GamePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: '/',
        children: [
            {
                path:'/',
                element: <Menu />
            },
            {
                path:'/game',
                element: <GamePage />
            }
        ]
    }
]);

export default router;