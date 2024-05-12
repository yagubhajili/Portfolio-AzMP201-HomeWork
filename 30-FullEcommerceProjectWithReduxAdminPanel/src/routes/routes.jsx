import Layout from "../assets/layout/Layout"
import Admin from "../assets/pages/Companies/Companies"
import Basket from "../assets/pages/Basket/Basket"
import Cards from "../assets/pages/Cards/Cards"
import Edit from "../assets/pages/Edit/Edit"
import Favorites from "../assets/pages/Favorites/Favorites"
import Detals from "../assets/pages/Home/Details/Detals"
import Home from "../assets/pages/Home/Home"
import ForgetPassword from "../assets/pages/LoginRegister/ForgetPassword"
import Login from "../assets/pages/LoginRegister/Login"
import Register from "../assets/pages/LoginRegister/Register"
import Post from "../assets/pages/Post/Post"
import User from "../assets/pages/User/User"
import UserDetail from "../assets/pages/User/components/UserDetail"
import Companies from "../assets/pages/Companies/Companies"
import Admins from "../assets/pages/Admin/Admins"

const routers = [
    {
        path: "/",
        element: <Layout />,
        children: [

            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home/:id",
                element: <Detals />,
            },

            {
                path: "/cards",
                element: <Cards />,
            },
            {
                path: "/basket",
                element: <Basket />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/forget",
                element: <ForgetPassword />,
            },

        ]
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/admins",
                element: <Admins />,
            },
            {
                path: "/edit",
                element: <Edit />,
            },
            {
                path: "/post",
                element: <Post />,
            },
            {
                path: "/user",
                element: <User />,
            },
            {
                path: "/user/:id",
                element: <UserDetail />,
            },
            {
                path: '/companies',
                element: <Companies />,
            },
        ]
    },

]


export default routers