import {Container, Card, Button} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { getMovie } from '../services/API'
import {useQuery} from 'react-query'

const MoviePage = () => {
    const {movieId} = useParams()
    const {data, isLoading, error, isError} = useQuery(['movie', movieId], () => getMovie(movieId))
    const baseIMG = "https://image.tmdb.org/t/p/w300"
    return (
        <Container className='my-3'>
            {isLoading && (<p>Loading movie...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <>
                    <div>
                        {data.poster_path && (
                            <img src={`${baseIMG}${data.poster_path}`}  alt="poster" />
                        )}
                        <h1>{data.title}</h1>
                        <div className='d-flex flex-column'>
                            <span><strong>Genre:</strong> {data.genres.map(i => i.name).join(' - ')}</span>
                            <span><strong>Release Date:</strong> {data.release_date}</span>
                            <span><strong>Original Language:</strong> {data.original_language}</span>
                            <span>
                            <strong>Ratings:</strong> {data.vote_average} 
                                <span className='text-muted'> ({data.vote_count})</span>
                            </span>
                        </div>
                        <h3>Overview</h3>
                        <p>{data.overview}</p>
                    </div>

                    <div>
                            
                        <h3>Cast</h3>
                        <div className='d-flex flex-wrap'>
                            {data.credits.cast.map(i => (
                                <Card key={i.id} className='w-25'>
                                    {i.profile_path && (
                                        <Card.Img variant="top" src={`${baseIMG}${i.profile_path}`} />
                                    )}
                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title>{i.name}</Card.Title>
                                        <Card.Text className='text-muted'>{i.character}</Card.Text>
                                        <Button className='mt-auto' as={Link} to={`/actor/${i.id}`} variant="dark">Read more</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                            
                    </div>
                </>
            )}
        </Container>
    )
}

export default MoviePage
