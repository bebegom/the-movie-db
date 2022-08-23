import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CastCard = ({data}) => {
    const baseIMG = "https://image.tmdb.org/t/p/w300"

    return (
        <div className='d-flex flex-wrap'>
            {data.credits.cast.map(i => (
                <Card key={i.id} className='w-25'>
                    {i.poster_path && (
                        <Card.Img variant="top" src={`${baseIMG}${i.poster_path}`} />
                    )}
                    {i.profile_path && (
                        <Card.Img variant="top" src={`${baseIMG}${i.profile_path}`} />
                    )}
                    <Card.Body>
                        <Card.Title>{i.title ? i.title : i.name}</Card.Title>
                        <Card.Text>{i.character}</Card.Text>
                        <Button className='mt-auto' as={Link} to={`/${i.title ? 'movie': 'actor'}/${i.id}`} variant="dark">Read more</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default CastCard
