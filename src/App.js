import React, { useState, useEffect } from "react";
import axios from "axios";
import TableView from "./components/TableView";
import Loader from './components/Loader'
import Details from "./components/Details";

function App() {
  const BASE_URL = 'http://www.filltext.com/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';

  // state for data
  const [smallData, setSmallData] = useState([]);
  //state for loading data
  const [isLoading, setIsLoading] = useState(true);
  // state for sort
  const [sortDirection, setSortDirection] = useState(true);
  // current object to display
  const [row, setRow] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL).then(res => {
      setSmallData(res.data);
      setIsLoading(false);
    })
  }, []);

  const sortData = (sortBy) => {
    console.log(' Sort by', sortBy, sortDirection);
    let sortedData = [...smallData].sort((a, b) => {
      let aValue = a[sortBy], bValue = b[sortBy];
      if (typeof aValue === 'number') {
        return sortDirection ? aValue - bValue : bValue - aValue
      } else {
        return sortDirection ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
    });
    setSmallData(sortedData);
    setSortDirection(!sortDirection);
  }
  // handle cell click
  const handleCellClick = (obj) => {
    setRow(obj);
  }


  return (
    <div className="container">
      {isLoading
        ? <Loader />
        : <TableView
          contactData={smallData}
          sortData={sortData}
          sortDirection={sortDirection}
          handleCellClick={handleCellClick}
        />
      }
      {row && <Details row={row} />}
    </div>
  );
}

export default App;

