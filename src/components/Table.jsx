import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
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
  // state for active dataset to show in table
  const [currentData, setSurrentData] = useState(data);
  // state for sorting


  // main handler
  const clickHandler = (event) => {
    const target = event.target;
    const parent = target.parentNode;
    console.log(target, parent);
  }

  return (
    <table className="table table-hover table-bordered" onClick={clickHandler}>
      <thead>
        <tr>
          {
            headers.map((h, i) =>
              <th
                scope="col"
                key={h}>{h}
                <FontAwesomeIcon icon={faSortUp} /></th>)
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


