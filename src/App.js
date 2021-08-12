import axios from "axios";
import React, { useState, useEffect } from "react";

// format phone number to (xxx)xxx-xxxx
const formatPhone = (str) => {
  if (!str || str.length === 0) {
    return "";
  }
  if (str.length !== 10) {
    return str;
  }
  return `(${str.slice(0, 3)})${str.slice(3, 6)}-${str.slice(6)}`;

}

function App() {
  const baseURL = 'http://www.filltext.com/?rows=5&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';


  //state to hold received data
  const [people, setPeople] = useState([]);

  // fetch data from www.filltext.com
  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        console.log(response.data);
        setPeople(response.data);
      })
  }, []);

  return (
    <div className="container">
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
            <tr key={item.id + item.firstName}>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{formatPhone(item.phone)}</td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
