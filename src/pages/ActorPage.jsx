import {useQuery} from 'react-query'
import {useParams, Link} from 'react-router-dom'
import { getActor } from '../services/API'
import {Container, Card, Button} from 'react-bootstrap'

const ActorPage = () => {
    const {actorId} = useParams()
    const {data, isLoading, error, isError} = useQuery(['actor', actorId], () => getActor(actorId))
    const baseIMG = "https://image.tmdb.org/t/p/w300"

    return (
        <Container className='my-3'>
            {isLoading && (<p>Loading actor</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <>
                    <h1>{data.name}</h1>
                    {data.profile_path && (
                        <img src={`${baseIMG}${data.profile_path}`} alt="" />
                    )}
                    <div><strong>Born:</strong> {data.birthday}</div>
                    <div><strong>From:</strong> {data.place_of_birth}</div>
                    <h3>Biography:</h3> {data.biography}

                    <h3>Filmography</h3>
                    <div className='d-flex flex-wrap'>
                        {data.credits.cast.map(i => (
                            <Card key={i.id} className='w-25'>
                                {i.poster_path && (
                                    <Card.Img variant="top" src={`${baseIMG}${i.poster_path}`} />
                                )}
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text>{i.character}</Card.Text>
                                    <Button className='mt-auto' as={Link} to={`/movie/${i.id}`} variant="dark">Read more</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </>
            )}

        </Container>
    )
}

export default ActorPage
