import {Container} from 'react-bootstrap'
import { getTopRated } from '../services/API'
import {useQuery} from 'react-query'

const TopRatedPage = () => {
    const {data, isLoading, error, isError} = useQuery(['top_rated'], getTopRated)
    console.log(data)
    return (
        <Container>
            This is top rated-page

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <ul>
                    {data.results.map(i => (
                        <li key={i.id}>{i.title}</li>
                    ))}
                </ul>
            )}
            
        </Container>
    )
}

export default TopRatedPage
