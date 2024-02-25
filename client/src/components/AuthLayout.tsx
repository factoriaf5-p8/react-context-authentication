import {
    Outlet
} from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuthContext';

export const AuthLayout = () => (
    <AuthProvider>
        <Outlet />
    </AuthProvider>
);