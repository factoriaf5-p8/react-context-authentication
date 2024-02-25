import { useEffect, createContext, Dispatch, useContext } from 'react';
import { ChildrenProps, User } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

type CurrentUserType = [User | null, Dispatch<User>];

const AuthContext = createContext<CurrentUserType>([null, () => { }]);

const AuthProvider = ({ children }: ChildrenProps) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useLocalStorage('user', '');

    useEffect(() => {
         (() => !currentUser || currentUser.accessToken === ''? navigate('/login'):null)();
    }, [currentUser]);

    return (
        <AuthContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth}

