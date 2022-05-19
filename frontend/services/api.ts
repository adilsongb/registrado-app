import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3001',
});

export const getUsers = async (page: number) => {
  const { data } = await api.get(`/users/${page}`);
  return data;
};

export const getQuantityUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};
