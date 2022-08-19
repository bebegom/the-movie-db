import {Container} from 'react-bootstrap'
import { getGenre } from '../services/API'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'

const GenresPage = () => {
    const {genreId} = useParams()
    const {data, isLoading, error, isError} = useQuery(['genre', genreId], () => getGenre(genreId))
    console.log(data)
    return (
        <Container>
            This is genres-page

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <>
                   <p>genre: {genreId}</p>

                    <ul>
                        {data.results.map(i => (
                            <li key={i.id}>{i.title}</li>
                        ))}
                    </ul>
                </>
             
            )}
            
        </Container>
    )
}

export default GenresPage
