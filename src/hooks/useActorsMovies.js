import {useQuery} from 'react-query'
import { getActorsMovies } from '../services/API'

const useActorsMovies = (id) => {
    return useQuery(['actorsMovie', id], () => getActorsMovies(id))
}

export default useActorsMovies
