import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.magicthegathering.io/v1' });

export default API;
