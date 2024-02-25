import axios from 'axios';
import { User } from '../types/types';

const url = 'http://localhost:3001/login';

export const login = async (email: string, password: string): Promise<User> => {
        const result = await axios.post(url, { email, password });
        return result.data;
}

