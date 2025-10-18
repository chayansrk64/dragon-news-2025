import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <div>auth layout</div>
    },
    {
        path: '/news',
        element: <div>news layout</div>
    },
    {
        path: '/*',
        element: <div>ERROR 404</div>
    }
])

export default router;