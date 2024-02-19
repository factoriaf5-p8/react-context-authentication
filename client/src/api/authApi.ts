import axios from 'axios';

const url = 'http://localhost:3001/login';

export const login = (email: string, password: string) => axios.post(url, {
        email, password
});

