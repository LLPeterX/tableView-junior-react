import React, { useState, useEffect } from "react";
//import axios from "axios";
// import TableView from "./components/TableView";
// import Loader from './components/Loader'
// import Details from "./components/Details";
import { useServerData } from './hooks/useServerData'
import Switcher from "./components/Switcher";
import { DATA_VOLUMES, ROWS_PER_PAGE } from './constants'
import TableBody from "./components/TableBody";
import Paginator from "./components/Paginator";

function App() {
  // state for sort
  const [sortDirection, setSortDirection] = useState(true);
  // current object to display
  const [row, setRow] = useState(null);
  // data volume
  const [volume, setVolume] = useState(DATA_VOLUMES[0])
  // pages
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [page, setPage] = useState(1)

  //using hook useServerData
  const [{ contactData, setContactData, isLoading, dataLoaded }, getData] = useServerData(volume);

  useEffect(() => {
    if (!dataLoaded) {
      return;
    }
    const pages = Math.ceil(contactData.length / ROWS_PER_PAGE);
    setTotalPagesCount(pages);
    //console.log('setting totalCountPage: ', pages, 'len=', contactData.length);
  }, [contactData.length, dataLoaded]);

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

  // handle click on button of data volume
  const buttonHandler = (v) => {
    if (v !== volume) {
      setRow(null);
    }
    setVolume(v);
    setPage(1);
    console.log('set volume to', v);
  }

  // handler switch page
  const handlePage = (pageNo) => {
    setPage(pageNo);
    console.log(`set page to ${pageNo}, total=${totalPagesCount}`);
  }


  return (
    <div className="container">
      <Switcher volume={volume} buttonHandler={buttonHandler} />
      <TableBody
        contactData={getData((page - 1) * ROWS_PER_PAGE, ROWS_PER_PAGE)}
        isLoading={isLoading}
        sortData={sortData}
        sortDirection={sortDirection}
        row={row}
        setRow={setRow}
      />
      <Paginator
        totalPages={totalPagesCount}
        currentPage={page}
        setPage={handlePage}
      />
    </div>
  );
}

export default App;

