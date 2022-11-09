import axios from "axios"; 

export const api = axios.create({
    baseURL: "https://rocketnotes-api-9.herokuapp.com"
});
