import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "./components/Table";

// format phone number to (xxx)xxx-xxxx

function App() {
  //state to hold received data
  const [people, setPeople] = useState([]);
  // state to switch URL
  const [volume, setVolume] = useState(50);

  // fetch data from www.filltext.com
  useEffect(() => {
    const baseURL = `http://www.filltext.com/?rows=${volume}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    axios.get(baseURL)
      .then(response => {
        //console.log(response.data);
        setPeople(response.data);
      })
  }, [volume]);


  return (
    <div className="container">
      <Table people={people} />
    </div>
  );
}

export default App;
