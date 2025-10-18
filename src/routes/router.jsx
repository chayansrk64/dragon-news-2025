import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
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