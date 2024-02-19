import {
    Outlet
} from 'react-router-dom';
import { UserProvider } from '../context/UserContext';

export const AuthLayout = () => (
    <UserProvider>
        <Outlet />
    </UserProvider>
);