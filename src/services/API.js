import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}

/* ------------------------- GET most popular movies ------------------------ */ 
export const getPopular = () => {
    return get(`/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`) // TODO: add page as parameter
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
    // return get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&with_genres=${genre}`)
    return get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&page=${page}`)
}

/* -------------------------- GET a specific movie -------------------------- */
export const getMovie = (id) => {
    return get(`/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
}

/* ------------------------ GET the cast of the movie ----------------------- */
export const getCast = (id) => {
    return get(`/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
}

/* -------------------------------- GET actor ------------------------------- */
export const getActor = (id) => {
    return get(`/person/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
}

export const getActorsMovies = (id) => {
    return get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${id}`)
}