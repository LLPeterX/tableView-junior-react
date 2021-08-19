import React, { useState, useEffect } from "react";
//import axios from "axios";
import TableView from "./components/TableView";
import Loader from './components/Loader'
import Details from "./components/Details";
import { useServerData } from './hooks/useServerData'

function App() {
  const BASE_URL = 'http://www.filltext.com/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';

  // state for data
  //const [, setSmallData] = useState([]);
  //state for loading data
  //const [, setIsLoading] = useState(true);
  // state for sort
  const [sortDirection, setSortDirection] = useState(true);
  // current object to display
  const [row, setRow] = useState(null);

  //using hook useServerData
  const [{ contactData, setContactData, isLoading }, getData] = useServerData(BASE_URL);

  // useEffect(() => {
  //   axios.get(BASE_URL).then(res => {
  //     // setSmallData(res.data);
  //     // setIsLoading(false);
  //     getData(BASE_URL);
  //   })
  // }, []);
  //useEffect(getData, []);

  const sortData = (sortBy) => {
    //console.log(' Sort by', sortBy, sortDirection);
    let sortedData = [...contactData].sort((a, b) => {
      let aValue = a[sortBy], bValue = b[sortBy];
      if (typeof aValue === 'number') {
        return sortDirection ? aValue - bValue : bValue - aValue
      } else {
        return sortDirection ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
    });
    setContactData(sortedData);
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
          contactData={contactData}
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

