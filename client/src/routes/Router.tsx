import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Products } from '../pages/Products';
import { Users } from '../pages/Users';

export const router = createBrowserRouter([
            {path:'/', element:<Home/>},
			{path:'/login', element:<Login/>},
			{path:'/admin', element:<Dashboard/>},
			{path:'/users', element:<Users/>},
			{path:'/products', element:<Products/>},
]);
