import {Button} from 'react-bootstrap'

const Pagination = ({page, changePage}) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Button disabled={page <= 1} onClick={() => changePage(prevValue => prevValue - 1)} variant='dark'>Previous</Button>
                <span>page: {page}</span>
            <Button disabled={page >= 500} onClick={() => changePage(prevValue => prevValue + 1)} variant='dark'>Next</Button> {/* TODO: fix disabled */}
        </div>
    )
}

export default Pagination
