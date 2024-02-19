import { useState, useEffect, createContext, Dispatch } from 'react';
import { ChildrenProps, User } from '../types/types';
import { isAuthenticated } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

type CurrentUserType = [User, Dispatch<User>];

export const UserContext = createContext<CurrentUserType>([{ accessToken: '' },()=>{}]);

export const UserProvider = ({ children }: ChildrenProps) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({ accessToken: '' });

    useEffect(() => {
        const checkLoggedIn = async () => {
            let cuser = isAuthenticated();
            console.log(cuser);

            if (!cuser) {
                localStorage.setItem('user', '');
                cuser = '';
                navigate('/login')
            }

            setCurrentUser(cuser);
        };

        checkLoggedIn();
    }, []);

    // console.log('usercontext', currentUser);

    return (
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </UserContext.Provider>
    );
};