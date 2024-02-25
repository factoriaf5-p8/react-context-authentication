import { useAuth } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [, setCurrentUser] = useAuth();

    const handleLogOut = () => {
        setCurrentUser({
            accessToken: ''
        });
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
