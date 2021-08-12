import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "./components/Table";

// format phone number to (xxx)xxx-xxxx

function App() {
  const baseURL = 'http://www.filltext.com/?rows=5&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';


  //state to hold received data
  const [people, setPeople] = useState([]);

  // fetch data from www.filltext.com
  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        //console.log(response.data);
        setPeople(response.data);
      })
  }, []);

  return (
    <div className="container">
      <Table people={people} />
    </div>
  );
}

export default App;
