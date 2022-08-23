import {Container} from 'react-bootstrap'
import { getInTheatres } from '../services/API'
import {useQuery} from 'react-query'
import MovieCard from '../components/MovieCard'

const InTheatresPage = () => {
    const {data, isLoading, error, isError} = useQuery(['in_theatres'], getInTheatres)

    return (
        <Container>
            <h1>Movies in the Theatres</h1>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && <MovieCard data={data} />}
            
        </Container>
    )
}

export default InTheatresPage
