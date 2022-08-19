import {Container} from 'react-bootstrap'
import { getInTheatres } from '../services/API'
import {useQuery} from 'react-query'

const InTheatresPage = () => {
    const {data, isLoading, error, isError} = useQuery(['theatres'], getInTheatres)
    console.log(data)
    return (
        <Container>
            This is in theatres-page

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

export default InTheatresPage
