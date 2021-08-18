import React, { useState } from 'react'
import upImg from '../assets/icons/arrow-up-square.svg'
import downImg from '../assets/icons/arrow-down-square.svg'
import './tableView.css'

export default function TableView({ contactData, sortData, sortDirection, handleCellClick }) {

  const [sortField, setSortField] = useState("id");

  const handleSort = (field) => {
    sortData(field);
    setSortField(field);
  }


  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={() => handleSort('id')}>id
            {
              sortField === 'id' && <img src={sortDirection ? upImg : downImg} alt="Sort sign" className="sortSign" />
            }
          </th>
          <th scope="col" onClick={() => handleSort('firstName')}>firstName
            {
              sortField === 'firstName' && <img src={sortDirection ? upImg : downImg} alt="Sort sign" className="sortSign" />
            }
          </th>
          <th scope="col" onClick={() => handleSort('lastName')}>lastName
            {
              sortField === 'lastName' && <img src={sortDirection ? upImg : downImg} alt="Sort sign" className="sortSign" />
            }
          </th>
          <th scope="col" onClick={() => handleSort('email')}>email
            {
              sortField === 'email' && <img src={sortDirection ? upImg : downImg} alt="Sort sign" className="sortSign" />
            }
          </th>
          <th scope="col" onClick={() => handleSort('phone')}>phone
            {
              sortField === 'phone' && <img src={sortDirection ? upImg : downImg} alt="Sort sign" className="sortSign" />
            }
          </th>
        </tr>
      </thead>
      <tbody>
        {
          contactData.map(item =>
            <tr key={item.id + item.email} onClick={() => handleCellClick(item)}>
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
