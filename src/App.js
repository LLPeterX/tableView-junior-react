import React, { useState } from "react";
//import axios from "axios";
// import TableView from "./components/TableView";
// import Loader from './components/Loader'
// import Details from "./components/Details";
import { useServerData } from './hooks/useServerData'
import Switcher from "./components/Switcher";
import { DATA_VOLUMES } from './constants'
import TableBody from "./components/TableBody";

function App() {
  // state for sort
  const [sortDirection, setSortDirection] = useState(true);
  // current object to display
  const [row, setRow] = useState(null);
  // data volume
  const [volume, setVolume] = useState(DATA_VOLUMES[0])

  //using hook useServerData
  const [{ contactData, setContactData, isLoading }, getData] = useServerData(volume);

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
  // const handleCellClick = (obj) => {
  //   setRow(obj);
  // }

  // handle click on button of data volume
  const buttonHandler = (v) => {
    // if (v !== volume) {
    //   setRow(null);
    // }
    setVolume(v);
  }


  return (
    <div className="container">
      <Switcher volume={volume} buttonHandler={buttonHandler} />
      <TableBody
        contactData={contactData}
        isLoading={isLoading}
        sortData={sortData}
        sortDirection={sortDirection}
        row={row}
        setRow={setRow}
      />
      {/* {isLoading
        ? <Loader />
        : <TableView
          contactData={contactData}
          sortData={sortData}
          sortDirection={sortDirection}
          handleCellClick={handleCellClick}
        />
      }
      {row && <Details row={row} />} */}
    </div>
  );
}

export default App;

