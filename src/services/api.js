import axios from "axios";

const api = (baseURL = 'http://localhost:3333') => axios.create({
    baseURL
});

export default api;