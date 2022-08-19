import {Container, Card, Button} from 'react-bootstrap'
import { getPopular } from '../services/API'
import {useQuery} from 'react-query'

const PopularPage = () => {
    const {data, isLoading, error, isError} = useQuery(['popular'], getPopular)
    console.log(data)
    const baseIMG = "https://image.tmdb.org/t/p/w500"

    return (
        <Container>
            <h1>Most Popular Movies</h1>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <ul>
                    {data.results.map(i => (
                        <li key={i.id}>
                            <img src={`${baseIMG}${i.backdrop_path}`} />
                            <span>{i.title}</span>
                        </li>
                    ))}
                </ul>
            )}
            
        </Container>
    )
}

export default PopularPage
