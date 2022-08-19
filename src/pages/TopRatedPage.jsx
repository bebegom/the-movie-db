import {Container, Card, Button} from 'react-bootstrap'
import { getTopRated } from '../services/API'
import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'

const TopRatedPage = () => {
    const {data, isLoading, error, isError} = useQuery(['top_rated'], getTopRated)
    const baseIMG = "https://image.tmdb.org/t/p/w500"

    return (
        <Container>
            This is top rated-page

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <ul>
                    {data.results.map(i => (
                        <li key={i.id}>
                            {/* <a href={`/movie/${i.id}`}>
                            <img src={`${baseIMG}${i.backdrop_path}`} />
                            <span>{i.title}</span>
                            </a> */}
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={`${baseIMG}${i.backdrop_path}`} />
                                <Card.Body>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text>{i.overview}</Card.Text>
                                    <Button as={Link} to={`/movie/${i.id}`} variant="primary">Read more</Button>
                                </Card.Body>
                            </Card>
                        </li>
                    ))}
                </ul>
            )}
            
        </Container>
    )
}

export default TopRatedPage
