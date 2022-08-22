import {Container, Card, Button} from 'react-bootstrap'
import { getGenre, getGenres } from '../services/API'
import {useQuery} from 'react-query'
import {useParams, Link, useSearchParams} from 'react-router-dom'
import Pagination from '../components/Pagination'
import { useState, useEffect } from 'react'

const GenresPage = () => {
    const [nameOfGenre, setNameOfGenre] = useState('')
    // const [page, setPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams({query: '', page: 1})
    // const query = searchParams.get('query')
    const page = searchParams.get('page')
    const {genreId} = useParams()
    const {data, isLoading, error, isError, isPreviousData} = useQuery(['genre', genreId, page], () => getGenre(genreId, page), {
        keepPreviousData: true
    })
    const baseIMG = "https://image.tmdb.org/t/p/w500"

    const getNameOfActiveGenre = async () => {
        const allGenresData = await getGenres()
        const thisGenre = allGenresData.genres.find(i => i.id == genreId)
        setNameOfGenre(thisGenre.name)
    }

    useEffect(() => {
        getGenre(genreId, page)
        getNameOfActiveGenre()
    }, [page, genreId])

    return (
        <Container>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <>
                    <h1>
                        {nameOfGenre} {/* TODO: fix so that you can see what genre you are looking at */}
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

                    <Pagination page={page} changePage={setSearchParams} isPreviousData={isPreviousData} />
                </>
            )}
            

            

        </Container>
    )
}

export default GenresPage
