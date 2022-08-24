import {Container} from 'react-bootstrap'
import { getPopular } from '../services/API'
import {useQuery} from 'react-query'
import MovieCard from '../components/MovieCard'

const PopularPage = () => {
    const {data, isLoading, error, isError} = useQuery(['popular'], getPopular)

    return (
        <Container>
            <h1>20 Most Popular Movies</h1>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && <MovieCard data={data} />}
            
        </Container>
    )
}

export default PopularPage
