import React from 'react'
import PropTypes from 'prop-types'

// const formatPhone = (str) => {
//   if (!str || str.length === 0) {
//     return "";
//   }
//   if (str.length !== 10) {
//     return str;
//   }
//   return `(${str.slice(0, 3)})${str.slice(3, 6)}-${str.slice(6)}`;
// }

export default function Table({ people }) {
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
        {people.map(item =>
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

