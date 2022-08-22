import {Container, Card, Button} from 'react-bootstrap'
import { getGenre } from '../services/API'
import {useQuery} from 'react-query'
import {useParams, Link} from 'react-router-dom'
import Pagination from '../components/Pagination'
import { useState, useEffect } from 'react'

const GenresPage = () => {
    const [page, setPage] = useState(1)
    const {genreId} = useParams()
    const {data, isLoading, error, isError, isPreviousData} = useQuery(['genre', genreId, page], () => getGenre(genreId, page), {
        keepPreviousData: true
    })
    const baseIMG = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        getGenre(genreId, page)
    }, [page])

    return (
        <Container>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <>
                    <h1>
                        genre: {/* TODO: fix so that you can see what genre you are looking at */}
                    </h1>

                    <div className='d-flex flex-wrap justify-content-between'>
                        {data.results.map(i => (
                            <Card bg='light' border='dark' className='w-25 p-3 mt-3' key={i.id}>
                                <Card.Img variant="top" src={`${baseIMG}${i.poster_path}`} />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text className='text-muted'>{i.overview}</Card.Text>
                                    <Button className='mt-auto' as={Link} to={`/movie/${i.id}`} variant="dark">Read more</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    {/* <div className="d-flex justify-content-between align-items-center">
                        <Button disabled={page <= 1} onClick={() => setPage(prevValue => prevValue - 1)} variant='dark'>Previous</Button>
                            <span>page: {page}</span>
                        <Button disabled={page >= 500} onClick={() => setPage(prevValue => prevValue + 1)} variant='dark'>Next</Button> 
                    </div> */}

                    <Pagination page={page} changePage={setPage} isPreviousData={isPreviousData} />
                </>
            )}
            

            

        </Container>
    )
}

export default GenresPage
