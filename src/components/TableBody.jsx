import React from 'react'
import Loader from './Loader'
import TableView from './TableView'
import Details from './Details'

export default function TableBody({ contactData, sortData, sortDirection, isLoading, row, setRow }) {

  const handleCellClick = (obj) => {
    setRow(obj);
  }

  return (
    <div>
      {isLoading
        ? <Loader />
        : <TableView
          contactData={contactData}
          sortData={sortData}
          sortDirection={sortDirection}
          handleCellClick={handleCellClick}
        />
      }
      {row && <Details row={row} />}
    </div>
  )
}
