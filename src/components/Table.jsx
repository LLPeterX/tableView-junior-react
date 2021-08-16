import React, { useState, useEffect } from 'react'
import sortIconUp from '../assets/icons/sort_up_icon.svg';
import sortIconDown from '../assets/icons/sort_down_icon.svg';
import sortIconNone from '../assets/icons/sort_none_icon.svg'
import './table.css'

export default function Table({ data, columns, headers, filter = "" }) {
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
  const sortData = (objArray, field, asc = true, filterStr = "") => {
    let filtered = objArray;
    if (filterStr && filterStr.length) {
      filtered = objArray.filter(item => obj2str(item).toLowerCase().includes(filterStr.toLowerCase()));
      console.log(` sortData: filter=[${filterStr}] out len=${filtered.length}`);
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
  const obj2str = (obj) => {
    return Object.values(obj).join('');
  }

  // state for sorting
  const [sortBy, setSortBy] = useState(columns[0]);
  const [sortAsc, setSortAsc] = useState(true);
  // state for active dataset to show in table
  const [currentData, setSurrentData] = useState(sortData(data, sortBy, sortAsc, filter));

  //redraw Table when change sort or filter
  useEffect(() => {
    let sortedData = sortData(data, sortBy, sortAsc, filter);
    console.log('Table useEffect() sorted:', sortBy, sortAsc, filter);
    setSurrentData(sortedData);

  }, [sortBy, sortAsc, filter])

  // click on headers - switch sorting
  const handleHeaderClick = (col) => {
    if (sortBy !== col) {
      setSortBy(col);
    } else {
      setSortBy(col);
      setSortAsc(!sortAsc);
    }
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


