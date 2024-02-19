import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import UserContext from '../context/UserContext';

export const Header = () => {
    const [currentUser, setCurrentUser] = useContext(UserContext) || [null, () => { }];
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setCurrentUser({});
        navigate('/');
    };

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                    <button
                        type='button'
                        onClick={handleLogOut}
                    >
                        Log out
                    </button>
                </nav>
            </header>
        </>
    );
};