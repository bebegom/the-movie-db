import {Container} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getMovie } from '../services/API'
import {useQuery} from 'react-query'

const MoviePage = () => {
    const {id} = useParams()
    const {data, isLoading, error, isError} = useQuery(['movie', id], () => getMovie(id))
    return (
        <Container>
            Specific movie-page for id: {id}

            {isLoading && (<p>Loading movie...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (<h1>{data.title}</h1>)}
        </Container>
    )
}

export default MoviePage
