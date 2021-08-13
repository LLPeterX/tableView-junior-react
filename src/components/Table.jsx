import React from 'react'
import PropTypes from 'prop-types'

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
          <th scope="col">id</th>
          <th scope="col">firstName</th>
          <th scope="col">lastName</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item =>
          <tr key={item.id + item.firstName + item.lastName}>
            <th scope="row">{item.id}</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        )
        }
      </tbody>
    </table>)
}

Table.propTypes = {
  people: PropTypes.array
}

