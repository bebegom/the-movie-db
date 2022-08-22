import {Button} from 'react-bootstrap'
// import {Link, useParams} from 'react-router-dom'

const Pagination = ({page, changePage, isPreviousData}) => {
    // const {genreId} = useParams()
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Button disabled={isPreviousData || page <= 1} onClick={() => changePage(prevValue => prevValue - 1)} variant='dark'>Previous</Button>
                <span>page: {page}/500</span>
            <Button disabled={isPreviousData || page >= 500} onClick={() => changePage(prevValue => prevValue + 1)} variant='dark'>Next</Button> {/* TODO: fix disabled, check total_pages - why pages < 500 not working */}
        </div>
    )
}

export default Pagination
