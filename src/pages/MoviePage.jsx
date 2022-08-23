import {Container, Card, Button} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { getMovie } from '../services/API'
import {useQuery} from 'react-query'
// import CastCard from '../components/CastCard'

const MoviePage = () => {
    const {movieId} = useParams()
    const {data, isLoading, error, isError} = useQuery(['movie', movieId], () => getMovie(movieId))
    const baseIMG = "https://image.tmdb.org/t/p/w300"
    return (
        <Container>
            {isLoading && (<p>Loading movie...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <>
                    <h1>{data.title}</h1>
                    <div>
                        {data.poster_path && (
                            <img src={`${baseIMG}${data.poster_path}`}  alt="poster" />
                        )}
                        <div className='d-flex flex-column'>
                            <span>Genre: {data.genres.map(i => i.name).join(' - ')}</span>
                            <span>Release Date: {data.release_date}</span>
                            <span>Original Language: {data.original_language}</span>
                            <span>
                                Ratings: {data.vote_average} 
                                <span className='text-muted'> ({data.vote_count})</span>
                            </span>
                        </div>
                        <p>{data.overview}</p>
                    </div>

                    <div>
                            
                        <h2>Cast</h2>
                        {/* <CastCard data={data} /> */}
                        <div className='d-flex flex-wrap'>
                            {data.credits.cast.map(i => (
                                <Card key={i.id} className='w-25'>
                                    {i.profile_path && (
                                        <Card.Img variant="top" src={`${baseIMG}${i.profile_path}`} />
                                    )}
                                    <Card.Body>
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
