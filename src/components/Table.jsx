import React, { useState } from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSortUp } from '@fortawesome/free-solid-svg-icons'
//import sortIcon from '../assets/icons/icons8-sort-down-50.png';
import sortIconUp from '../assets/icons/sort_up_icon.svg';
import sortIconDown from '../assets/icons/sort_down_icon.svg';
import sortIconNone from '../assets/icons/sort_none_icon.svg'
import './table.css'

export default function Table({ data, columns, headers }) {
  if (!data) {
    data = [{ id: 0 }];
  }
  if (!Array.isArray(columns)) {
    columns = Object.keys(data[0]);
  }
  if (!Array.isArray(headers)) {
    headers = columns;
  }
  // function - processor for filter/sort data and create new currentData to display



  // state for active dataset to show in table
  const [currentData, setSurrentData] = useState(data);
  // state for sorting
  const [sortBy, setSortBy] = useState(columns[0]);
  const [sortAsc, setSortAsc] = useState(true);

  // main handler
  const clickHandler = (event) => {
    const target = event.target;
    const parent = target.parentNode;
    console.log(target, parent);
  }
  // click on headers
  const handleHeaderClick = (event, col) => {
    let el = event.currentTarget;
    console.log(' click on ', el, col);
    // find inner img
    let img = el.childNodes;
    console.log('  child=', img);
    setSortBy(col);
    setSortAsc(!sortAsc);
  }

  return (
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
                onClick={(e) => handleHeaderClick(e, columns[i], `sort`)}
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
          <tr key={i}>
            {columns.map((col, j) => <td key={i + "_" + j}>{item[col]}</td>)}
          </tr>
        )
        }
      </tbody>
    </table>)
}


