import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../components/AddServices/AddServices";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login";
import Reviews from "../../components/Reviews/Reviews";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            }
        ]
    }
]);
export default router;