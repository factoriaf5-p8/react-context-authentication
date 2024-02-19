import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Products } from "../pages/Products";
import { Users } from "../pages/Users";
import { AuthLayout } from "../components/AuthLayout";


export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/admin', element: <Dashboard /> },
            { path: '/users', element: <Users /> },
            { path: '/products', element: <Products /> }]
    }
])