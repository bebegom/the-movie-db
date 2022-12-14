import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}

/* ------------------------- GET most popular movies ------------------------ */ 
export const getPopular = () => {
    return get(`/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
}

/* ------------------------- GET movies in theatres ------------------------- */
export const getInTheatres = () => {
    return get(`/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
}

/* ------------------------- GET top rated movies ------------------------- */
export const getTopRated = () => {
    return get(`/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
}

/* ------------------------- GET genres ------------------------- */
export const getGenres = () => {
    return get(`/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
}

export const getGenre = (genre, page) => {
    return get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genre}&page=${page}`)
}

/* -------------------------- GET a specific movie -------------------------- */
export const getMovie = (id) => {
    return get(`/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&append_to_response=credits`)
}

/* -------------------------------- GET actor ------------------------------- */
export const getActor = (id) => {
    return get(`/person/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&append_to_response=credits`)
}