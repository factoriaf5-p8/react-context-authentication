import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/AuthService';

export const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

	const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await loginService(username, password);
			navigate('/admin');
		} catch (error) {
			console.error('error', error);
		}
	};

	return (
		<>
				<form onSubmit={onSubmit}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						value={username}
						onChange={onChangeUsername}
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChangePassword}
					/>
					<button type='submit'>Login</button>
				</form>
		</>
	);
}
