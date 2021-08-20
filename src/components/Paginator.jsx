import React from 'react'

function Paginator({ totalPages, currentPage, setPage }) {
  const handlePageClick = (pageNo) => {
    if (pageNo !== currentPage) {
      setPage(pageNo);
    }
  }

  const handlePrevClick = () => {
    const newPage = currentPage - 1;
    if (newPage > 0) {
      setPage(newPage);
    }
  }

  const handleNextClick = () => {
    const newPage = currentPage + 1;
    if (newPage <= totalPages) {
      setPage(newPage);
    }
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination" style={{ justifyContent: 'center' }}>
        <li className="page-item"><button className="page-link" onClick={handlePrevClick}>Prev</button></li>
        {
          Array((totalPages || 1)).fill().map((_, i) =>
            <li className={"page-item" + (i + 1 === currentPage ? " active" : "")} key={i} >
              <button className={"page-link"}
                onClick={() => handlePageClick(i + 1)}
              >{i + 1}
              </button></li>
          )
        }
        <li className="page-item"><button className="page-link" onClick={handleNextClick}>Next</button></li>
      </ul>
    </nav>
  )
}

export default Paginator
