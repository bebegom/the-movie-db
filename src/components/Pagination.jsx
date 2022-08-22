import {Button} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'

const Pagination = ({page, changePage}) => {
    const {genreId} = useParams()
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Button as={Link} to={`/genres/${genreId}/${page-1}`} disabled={page <= 1} onClick={() => changePage(prevValue => prevValue - 1)} variant='dark'>Previous</Button>
                <span>page: {page}</span>
            <Button as={Link} to={`/genres/${genreId}/${page+1}`} disabled={page >= 500} onClick={() => changePage(prevValue => prevValue + 1)} variant='dark'>Next</Button> {/* TODO: fix disabled */}
        </div>
    )
}

export default Pagination
