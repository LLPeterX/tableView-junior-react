import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const BASE_URL = 'http://www.filltext.com/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';

  // state for data
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL).then(res => {
      console.log(res.data);
      setData(res.data);
    })
  }, [])

  return (
    <div className="container">
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
            data.map(item =>
              <tr>
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

    </div>
  );
}

export default App;

