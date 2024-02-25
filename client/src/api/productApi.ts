import axios from 'axios';
import { Product } from '../types/types';

const API_URL = 'http://localhost:3001/products';

export const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createProduct = async (product: Product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};

export const updateProduct = async (id: number, updatedProduct: { name: string; description: string; price: number; }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
    return response.data;
};

export const deleteProduct = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};