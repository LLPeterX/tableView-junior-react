import React from 'react'
import upImg from '../assets/icons/arrow-up-square.svg'
import downImg from '../assets/icons/arrow-down-square.svg'

export default function TableView({ contactData, sortData }) {

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={() => sortData('id')}>id <img src={upImg} /></th>
          <th scope="col" onClick={() => sortData('firstName')}>firstName  <i className="bi bi-arrow-down-square"></i></th>
          <th scope="col" onClick={() => sortData('lastName')}>lastName</th>
          <th scope="col" onClick={() => sortData('email')}>email</th>
          <th scope="col" onClick={() => sortData('phone')}>phone</th>
        </tr>
      </thead>
      <tbody>
        {
          contactData.map(item =>
            <tr key={item.id + item.email}>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}
