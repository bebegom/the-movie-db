import {Container, Card, Button} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { getMovie } from '../services/API'
import {useQuery} from 'react-query'
import useCast from '../hooks/useCast'

const MoviePage = () => {
    const {movieId} = useParams()
    const {data, isLoading, error, isError} = useQuery(['movie', movieId], () => getMovie(movieId))
    const {data: cast, isLoading: castIsLoading, error: castError, isError: castIsError} = useCast(movieId)
    const baseIMG = "https://image.tmdb.org/t/p/w300"
    return (
        <Container>
            {isLoading && (<p>Loading movie...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <>
                    <h1>{data.title}</h1>
                    <div>
                        <img src={`${baseIMG}${data.poster_path}`}  alt="poster" />
                        <span>{data.release_date}</span>
                        <p>{data.overview}</p>
                    </div>

                    <div>
                        {castIsLoading && (<p>Loading cast...</p>)}
                        {castIsError && (<p>ERROR {error.message}</p>)}

                        {cast && (
                            <>
                                <h2>Cast</h2>
                                <div className='d-flex flex-wrap'>
                                    {cast.cast.map(i => (
                                        <Card key={i.id} className='w-25'>
                                            <Card.Img variant="top" src={`${baseIMG}${i.profile_path}`} />
                                            <Card.Body>
                                                <Card.Title>{i.name}</Card.Title>
                                                <Card.Text className='text-muted'>{i.character}</Card.Text>
                                                <Button className='mt-auto' as={Link} to={`/actor/${i.id}`} variant="dark">Read more</Button> {/* TODO: change the path */}
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </Container>
    )
}

export default MoviePage
