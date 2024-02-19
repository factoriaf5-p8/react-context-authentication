import axios from 'axios';

const url = 'https://localhost:3001/login';

export const login = (email: string, password: string) => axios.post(url, {
        email, password});

