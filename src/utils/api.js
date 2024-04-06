import axios from "axios";

const API_KEY=process.env.REACT_APP_API_KEY
const api = axios.create({
    baseURL: 'http://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    },
    timeout: 1000,
})

export default api