import {Container, Card, Button} from 'react-bootstrap'
import { getTopRated } from '../services/API'
import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'

const TopRatedPage = () => {
    const {data, isLoading, error, isError} = useQuery(['top_rated'], getTopRated)
    const baseIMG = "https://image.tmdb.org/t/p/w500"

    return (
        <Container>
            <h1>Top Rated Movies</h1>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <div className='d-flex flex-wrap justify-content-between'>
                    {data.results.map(i => (
                            <Card bg='light' border='dark' className='w-25 p-3 mt-3' key={i.id}>   {/* TODO: change style to className */}
                                {i.poster_path && (
                                    <Card.Img variant="top" src={`${baseIMG}${i.poster_path}`} />
                                )}
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text className='text-muted'>{i.overview}</Card.Text>
                                    <Button className='mt-auto' as={Link} to={`/movie/${i.id}`} variant="dark">Read more</Button>
                                </Card.Body>
                            </Card>
                    ))}
                </div>
            )}
            
        </Container>
    )
}

export default TopRatedPage
