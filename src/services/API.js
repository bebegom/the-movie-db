import axios from 'axios'
// require('dotenv').config()

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}

/* ------------------------- GET most popular movies ------------------------ */
export const getPopular = () => {
    return get(`/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
}