import { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setCurrentUser({accessToken:''});
        navigate('/login');
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
}
