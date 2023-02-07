import axios from "axios";

export const createUser = (baseURL = 'http://localhost:3333', email) => axios.create({
    baseURL
}).post("/users", {
    email
});