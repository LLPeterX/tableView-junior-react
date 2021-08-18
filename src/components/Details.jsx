import React from 'react'
import './details.css'

export default function Details({ row }) {
  return (
    <div className="container">
      <b>Подробная информация</b>
      <ul>
        <li>id: <span>{row.id}</span></li>
        <li>First Name: <span>{row.firstName}</span></li>
        <li>Last Name: <span>{row.lastName}</span></li>
        <li>Email: <span>{row.email}</span></li>
        <li>Phone: <span>{row.phone}</span></li>
        <li>Address:
          <ul>
            <li>Почтовый индекс: </li>
            <li>Штат: </li>
          </ul>

        </li>

      </ul>

    </div>
  )
}
