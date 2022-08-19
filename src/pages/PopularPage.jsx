import {Container} from 'react-bootstrap'
import { getPopular } from '../services/API'
import {useQuery} from 'react-query'

const PopularPage = () => {
    const {data, isLoading, error, isError} = useQuery(['pop'], getPopular)
    console.log(data)
    return (
        <Container>
            This is most popular-page

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

export default PopularPage
