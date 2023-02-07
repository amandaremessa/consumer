import axios from "axios";

export const createUser = (baseURL = 'http://localhost:3333', email) => axios.create({
    baseURL
}).post("/users", {
    email
});

export const createFood = (baseURL = 'http://localhost:3333', name, healthy=true) => axios.create({
    baseURL
}).post("/food", {
    name,
    healthy
});

export const getFood = (baseURL = 'http://localhost:3333') => axios.create({
    baseURL
}).get("/food");

export const getFoodById = (baseURL = 'http://localhost:3333', id) => axios.create({
    baseURL
}).get("/food" + id);