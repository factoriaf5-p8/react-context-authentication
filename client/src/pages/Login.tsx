import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginDto, User } from '../types/types';
import { login } from '../api/authApi';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [, setUser] = useLocalStorage('user', '');
	const navigate = useNavigate();

	const mutationFn = async ({ email, password }: LoginDto) => login(email, password);

	const mutation = useMutation<User, Error, LoginDto>(
		{
			mutationFn,
			onSuccess: (data) => {


				setUser(data)
				navigate('/admin')
			},
			onError: (error) => console.log('error', error)

		})

	const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutation.mutate({ email, password })
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<label htmlFor='email'>email</label>
				<input
					type='text'
					name='email'
					value={email}
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
