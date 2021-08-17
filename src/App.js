import React, { useState, useEffect } from "react";
import axios from "axios";
import TableView from "./components/TableView";
import Loader from './components/Loader'

function App() {
  const BASE_URL = 'http://www.filltext.com/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';

  // state for data
  const [smallData, setSmallData] = useState([]);
  //state for loading data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(BASE_URL).then(res => {
      setSmallData(res.data);
      setIsLoading(false);
    })
  }, []);

  const sortData = (sortBy) => {
    console.log(' Sort by', sortBy);
    let sortedData = [...smallData].sort((a, b) => {
      let aValue = a[sortBy], bValue = b[sortBy];
      if (typeof aValue === 'number') {
        return aValue - bValue;
      } else {
        return aValue.localeCompare(bValue);
      }
    });
    setSmallData(sortedData);
  }

  return (
    <div className="container">
      {isLoading
        ? <Loader />
        : <TableView
          contactData={smallData}
          sortData={sortData}
        />
      }
    </div>
  );
}

export default App;

