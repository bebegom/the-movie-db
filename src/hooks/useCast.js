import {useQuery} from 'react-query'
import { getCast } from '../services/API'

const useCast = (id) => {
    return useQuery(['movieCast', id], () => getCast(id))
}

export default useCast
