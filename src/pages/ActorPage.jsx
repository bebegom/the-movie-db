import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import { getActor } from '../services/API'
import {Container} from 'react-bootstrap'

const ActorPage = () => {
    const {actorId} = useParams()
    const {data, isLoading, error, isError} = useQuery(['actor', actorId], () => getActor(actorId))
    return (
        <Container>
            {isLoading && (<p>Loading actor</p>)}
            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <>
                <h1>{data.name}</h1>
                <h2>{data.birthday}</h2>
                </>
            )}
        </Container>
    )
}

export default ActorPage
