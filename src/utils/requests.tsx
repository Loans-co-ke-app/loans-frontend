import axios from "axios";
import BASE_URL from "../api/api";

const publicAxios = axios.create({
    baseURL:BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default publicAxios;