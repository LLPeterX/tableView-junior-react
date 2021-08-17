//import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './app.css';
import Options from "./components/Options";
import { DATA_VOLUMES, ROWS_PER_PAGE } from './constants'

function App() {
  const volumes = DATA_VOLUMES || [5, 10];
  //state to hold received data
  const [people, setPeople] = useState([]);
  // state to switch URL. default 50 (50 - small; 1000 - big)
  const [volume, setVolume] = useState(volumes[0]);
  // state for loading
  const [isLoading, setIsLoading] = useState(true);
  // state for filter
  const [filter, setFilter] = useState("");

  // fetch data from www.filltext.com
  useEffect(() => {
    async function fetchData() {
      const baseURL = `http://www.filltext.com/?rows=${volume}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
      const response = await fetch(baseURL);
      if (response.ok) {
        let data = await response.json();
        setPeople(data);
      }
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchData();

  }, [volume]);

  const handleChangeVolume = (vol) => {
    setVolume(vol || 50);
  }

  const handleSetFilter = (str) => {
    setFilter(str);
  }


  return (
    <div className="container">
      <Options
        volumes={volumes} volume={volume} setVolume={handleChangeVolume}
        filter={filter}
        setFilter={handleSetFilter}
      />
      {isLoading ?
        <Loader
          className="centered"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
        :
        <React.Fragment>
          <Table
            data={people}
            columns={["id", "firstName", "lastName", "email", "phone"]}
            headers={["#", "Имя", "Фамилия", "Почта", "Телефон"]}
            filter={filter}
            rowsPerPage={ROWS_PER_PAGE || 50}
          />
        </React.Fragment>
      }
    </div>
  );
}

export default App;
