import {Container} from 'react-bootstrap'
import { getTopRated } from '../services/API'
import {useQuery} from 'react-query'
import MovieCard from '../components/MovieCard'

const TopRatedPage = () => {
    const {data, isLoading, error, isError} = useQuery(['top_rated'], getTopRated)

    return (
        <Container>
            <h1>Top Rated Movies</h1>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && <MovieCard data={data} />}
            
        </Container>
    )
}

export default TopRatedPage
