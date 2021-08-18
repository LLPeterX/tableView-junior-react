import React from 'react'
import './details.css'

export default function Details({ row }) {
  return (
    <div className="container border border-info pe-10">
      <b>Подробная информация</b>
      <ul>
        <li>id: <span>{row.id}</span></li>
        <li>First Name: <span>{row.firstName}</span></li>
        <li>Last Name: <span>{row.lastName}</span></li>
        <li>Email: <span>{row.email}</span></li>
        <li>Phone: <span>{row.phone}</span></li>
        <li>Address:
          <ul>
            <li>Street Address: <span>{row.address?.streetAddress || ''}</span> </li>
            <li>City: <span>{row.address?.city || ''}</span> </li>
            <li>State: <span>{row.address?.state || ''}</span> </li>
            <li>ZIP: <span>{row.address?.zip || ''}</span> </li>
          </ul>

        </li>
      </ul>
      <div>
        {row.description}
      </div>

    </div>
  )
}
