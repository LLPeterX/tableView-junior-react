import React, { useState, useEffect } from "react";
import axios from "axios";
import TableView from "./components/TableView";

function App() {
  const BASE_URL = 'http://www.filltext.com/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';

  // state for data
  const [smallData, setSmallData] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL).then(res => {
      console.log(res.data);
      setSmallData(res.data);
    })
  }, [])

  return (
    <div className="container">
      <TableView smallData={smallData} />
    </div>
  );
}

export default App;

