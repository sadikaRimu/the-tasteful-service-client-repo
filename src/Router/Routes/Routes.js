import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../components/AddServices/AddServices";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home/Home";
import ServiceDetails from "../../components/Home/Services/ServiceDetails";
import Login from "../../components/Login/Login";
import ReviewFood from "../../components/ReviewFood/ReviewFood";
import Reviews from "../../components/Reviews/Reviews";
import ServicesAll from "../../components/ServicesAll/ServicesAll";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://sadika-assignment11-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/servicesall',
                element: <ServicesAll></ServicesAll>,
                loader: () => fetch('https://sadika-assignment11-server.vercel.app/servicesall')
            }
        ]
    }
]);
export default router;