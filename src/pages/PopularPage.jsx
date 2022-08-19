import {Container} from 'react-bootstrap'
import { getPopular } from '../services/API'
import {useQuery} from 'react-query'

const PopularPage = () => {
    const {data, isLoading, error, isError} = useQuery(['popular'], getPopular)
    console.log(data)
    const baseIMG = "https://image.tmdb.org/t/p/w500"

    return (
        <Container>
            This is most popular-page

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <ul>
                    {data.results.map(i => (
                        <li key={i.id}><img src={`${baseIMG}${i.backdrop_path}`} /><span>{i.title}</span></li>
                    ))}
                </ul>
            )}
            
        </Container>
    )
}

export default PopularPage
