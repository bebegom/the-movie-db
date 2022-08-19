import {Container} from 'react-bootstrap'
import { getTopRated } from '../services/API'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'

const GenresPage = () => {
    const {genre} = useParams()
    const {data, isLoading, error, isError} = useQuery(['genre', genre], getTopRated)
    console.log(data)
    return (
        <Container>
            This is genres-page

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <p>genre: {genre}</p>
            )}
            
        </Container>
    )
}

export default GenresPage
