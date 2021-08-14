import React, { useState, useEffect } from 'react'
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

  // sort data by some field.
  const sortData = (objArray, field, asc) => {
    return objArray.sort((a, b) => {
      //debugger;
      let aValue = a[field], bValue = b[field];
      //console.log(`  sort by ${field}: a=${aValue}, b=${bValue}  types: ${typeof aValue}/${typeof bValue}`);
      if (typeof aValue === 'number') {
        return asc ? aValue - bValue : bValue - aValue;
      } else if (typeof aValue === 'string') {
        return asc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      } else {
        console.log('err: pass ', typeof aValue)
        return 0;
      }
    })
  }

  const obj2str = (obj) => {
    return Object.values(obj).join('');
  }

  // state for sorting
  const [sortBy, setSortBy] = useState(columns[0]);
  const [sortAsc, setSortAsc] = useState(true);
  // state for active dataset to show in table
  const [currentData, setSurrentData] = useState(sortData(data, sortBy, sortAsc));

  // filter & sort in useEffect
  useEffect(() => {
    let sortedData = sortData(currentData, sortBy, sortAsc);
    //console.log('useEffect() sorted:', sortBy, sortedData);
    setSurrentData(sortedData);

  }, [currentData, sortBy, sortAsc])

  // click on headers - switch sorting
  const handleHeaderClick = (col) => {
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
          <tr key={obj2str(item)}>
            {columns.map((col) => <td key={col}>{item[col]}</td>)}
          </tr>
        )
        }
      </tbody>
    </table>)
}


