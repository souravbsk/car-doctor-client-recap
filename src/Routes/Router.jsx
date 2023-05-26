import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import CheckOut from "../Shareds/CheckOut/CheckOut";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import NotFound from "../Shareds/NotFound/NotFound";
import AddService from "../Pages/AddService/AddService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import AllOrder from "../DeshBoard/AllOrder/AllOrder";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {

                path:"/",
                element:<Home></Home>
            },
            {
                path:"/all-service",
                element:<PrivateRoute><AllOrder></AllOrder></PrivateRoute>
            },
            {
                path:"/Checkout/:id",
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params}) => fetch(`https://car-doctor-recap-server.vercel.app/services/${params.id}`)
            },
            {
                path:"/bookings",
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path:"/register",
                element:<Registration></Registration>
            },

            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/add-service",
                element:<AddService></AddService>
            },
            {
                path:"*",
                element:<NotFound></NotFound>
            }
        ]
    }
])

export default router;