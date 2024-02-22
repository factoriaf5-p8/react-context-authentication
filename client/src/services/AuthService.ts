import { login } from '../api/authApi';

export const loginService = async (email: string, password: string) => {
	const response = await login(email, password);
	console.log(response.data);

	const token = response.data.accessToken;
	if (token) {
		localStorage.setItem('user', JSON.stringify(response.data));

	}

	return response.data;
};

export const isAuthenticated = () => {
	const user = localStorage.getItem('user');
	if (!user) {
		return null
	}
	return JSON.parse(user);
};