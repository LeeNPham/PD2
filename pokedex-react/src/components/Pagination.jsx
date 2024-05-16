import React from 'react'

export default function Pagination({ gotoNextPage, gotoPreviousPage }) {
    return (
        <div>
            {gotoPreviousPage && <button onClick={gotoPreviousPage} type='button'>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage} type='button'>Next</button>}
        </div>
    )
}
