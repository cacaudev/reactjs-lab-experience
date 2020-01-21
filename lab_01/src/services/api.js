import axios from 'axios';

const api = axios.create({ baseURL: 'https://rocketseact-node.herokuapp.com/api' });

export default api;