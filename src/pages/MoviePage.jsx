import {Container} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
    const {id} = useParams()
    return (
        <Container>
            Specific movie-page for id: {id}
        </Container>
    )
}

export default MoviePage
