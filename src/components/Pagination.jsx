import {Button} from 'react-bootstrap'

const Pagination = ({page, changePage, isPreviousData}) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Button disabled={isPreviousData || page <= 1} onClick={() => changePage({
                page: Number(page) - 1,
            })} variant='dark'>Previous</Button>
                <span>page: {page}/500</span>
            <Button disabled={isPreviousData || page >= 500} onClick={() => changePage({
                page: Number(page) + 1,
            })} variant='dark'>Next</Button>
        </div>
    )
}

export default Pagination
