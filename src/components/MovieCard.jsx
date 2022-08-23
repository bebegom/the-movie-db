import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

const MovieCard = ({data}) => {
    const baseIMG = "https://image.tmdb.org/t/p/w500"

    return (
        <div className='d-flex flex-wrap justify-content-between'>
                    {data.results.map(i => (
                        <Card bg='light' border='dark' className='w-25 p-3 mt-3' key={i.id}>
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
    )
}

export default MovieCard
