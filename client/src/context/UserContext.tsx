import { createContext, useEffect, useState, Dispatch } from "react"
import { isAuthenticated } from "../services/AuthService";
import { Login } from "../pages/Login";

// export type IUserContext = {
//     currentUser: string;
//     setCurrentUser: Dispatch<any>
// }
const UserContext = createContext<[currentUser: string,
    setCurrentUser: Dispatch<any>] | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const checkLoggedIn = async () => {
            let cuser = isAuthenticated();
            if (cuser === null) {
                localStorage.setItem('user', '');
                cuser = '';
            }

            setCurrentUser(cuser);
        };

        checkLoggedIn();
    }, []);

    return (
        <UserContext.Provider value={currentUser !== null ? [ currentUser, setCurrentUser ] : null}>
            {(currentUser as any)?.token ? children : <Login />}
        </UserContext.Provider>
    );
}

export default UserContext;