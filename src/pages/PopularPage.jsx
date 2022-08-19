import {Container} from 'react-bootstrap'
import { getPopular } from '../services/API'
import {useQuery} from 'react-query'

const PopularPage = () => {
    const lala = useQuery(['pop'], getPopular)
    console.log(lala)
    return (
        <Container>
            This is most popular-page
            <ul>
                {lala.data.results.map(i => (
                    <li key={i.id}>{i.title}</li>
                ))}
            </ul>
        </Container>
    )
}

export default PopularPage
