import {Container} from 'react-bootstrap'
import { getGenre, getGenres } from '../services/API'
import {useQuery} from 'react-query'
import {useParams, useSearchParams} from 'react-router-dom'
import Pagination from '../components/Pagination'
import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'

const GenresPage = () => {
    const [nameOfGenre, setNameOfGenre] = useState('')
    const [searchParams, setSearchParams] = useSearchParams({query: '', page: 1})
    const page = searchParams.get('page')
    const {genreId} = useParams()
    const {data, isLoading, error, isError, isPreviousData} = useQuery(['genre', genreId, page], () => getGenre(genreId, page), {
        keepPreviousData: true
    })

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
                        {nameOfGenre}
                    </h1>

                    <MovieCard data={data} />

                    <Pagination page={page} changePage={setSearchParams} isPreviousData={isPreviousData} />
                </>
            )}
            

            

        </Container>
    )
}

export default GenresPage
