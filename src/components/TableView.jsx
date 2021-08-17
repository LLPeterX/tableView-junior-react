import React from 'react'

export default function TableView(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">forstName</th>
          <th scope="col">lastName</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>
        {
          props.smallData.map(item =>
            <tr key={item.id + item.email}>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}
