import React from 'react'

export default function Table({ data, columns, headers }) {
  if (!data) {
    data = [{ id: 0 }];
  }
  if (!Array.isArray(columns)) {
    columns = Object.keys(data[0]);
  }
  if (!Array.isArray(headers)) {
    headers = Object.keys(data[0]);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {
            headers.map((h) => <th scope="col" key={h}>{h}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) =>
          <tr key={i}>
            {columns.map((col, j) => <td key={i + "_" + j}>{item[col]}</td>)}
          </tr>
        )
        }
      </tbody>
    </table>)
}


