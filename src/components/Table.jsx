import React, { useState, useEffect } from 'react'
import sortIconUp from '../assets/icons/sort_up_icon.svg';
import sortIconDown from '../assets/icons/sort_down_icon.svg';
import sortIconNone from '../assets/icons/sort_none_icon.svg'
import './table.css'
import ReactPaginate from 'react-paginate';

export default function Table({ data, columns, headers, filter, rowsPerPage }) {
  if (!data) {
    data = [{ id: 0 }];
  }
  if (!Array.isArray(columns)) {
    columns = Object.keys(data[0]);
  }
  if (!Array.isArray(headers)) {
    headers = columns;
  }
  if (!filter) filter = "";

  // sort data by some field.
  const sortData = (objArray, field, asc = true, filterStr = "") => {
    let filtered = objArray;
    if (filterStr && filterStr.length) {
      let lw = filterStr.toLowerCase();
      filtered = objArray.filter(item => obj2str(item, columns).indexOf(lw) >= 0);
    } else {
      filtered = objArray;
    }
    return filtered.sort((a, b) => {
      let aValue = a[field], bValue = b[field];
      if (typeof aValue === 'number') {
        return asc ? aValue - bValue : bValue - aValue;
      } else if (typeof aValue === 'string') {
        return asc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      } else {
        console.log('err: pass ', typeof aValue)
        return 0;
      }
    });
  }

  // convert object to string (for search etc.)
  //   obj: an object
  //   fields: array of properties of object obj
  const obj2str = (obj, fields = null) => {
    let oStr;
    if (!fields) {
      oStr = Object.values(obj).join('');
    } else {
      let properties = Object.keys(obj).filter(p => fields.includes(p));
      oStr = properties.reduce((str, p) => str + obj[p], "");
    }
    return oStr.toLowerCase();
  }

  // state for sorting
  const [sortBy, setSortBy] = useState(columns[0]);
  const [sortAsc, setSortAsc] = useState(true);
  // state for active dataset to show in table
  const [currentData, setSurrentData] = useState(sortData(data, sortBy, sortAsc, filter));
  //state for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);

  //redraw Table when change sort or filter
  useEffect(() => {
    let sortedData = sortData(data, sortBy, sortAsc, filter);
    const offset = currentPage * rowsPerPage;
    console.log('Table useEffect() sorted:', sortBy, sortAsc, filter);
    setPages(Math.ceil(sortedData.length / rowsPerPage));
    setSurrentData(sortedData.slice(offset, offset + rowsPerPage));
    // eslint-disable-next-line
  }, [sortBy, sortAsc, filter, currentPage]);

  // click on headers - switch sorting
  const handleHeaderClick = (col) => {
    if (sortBy !== col) {
      setSortBy(col);
    } else {
      setSortBy(col);
      setSortAsc(!sortAsc);
    }
  }

  const handleSelectPage = (e) => {
    setCurrentPage(e.selected)
  }


  return (
    <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            {
              headers.map((h, i) => {
                let sortIcon = sortIconNone;
                if (columns[i] === sortBy) {
                  sortIcon = sortAsc ? sortIconUp : sortIconDown;
                }
                return <th
                  onClick={(e) => handleHeaderClick(columns[i])}
                  scope="col"
                  key={h}>{h}
                  <img src={sortIcon} id={columns[i]} alt={`Sort by ${headers[i]}`} className="sortSign" />

                </th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, i) =>
            <tr key={obj2str(item, columns)}>
              {columns.map((col) => <td key={col}>{item[col]}</td>)}
            </tr>
          )
          }
        </tbody>
      </table>
      {pages > 1 && <ReactPaginate
        pageCount={pages}
        // pageRangeDisplayed={20}
        marginPagesDisplayed={4}
        onPageChange={handleSelectPage}
        previousLabel="Prev"
        nextLabel="Next"
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />}
    </div>
  )
}


