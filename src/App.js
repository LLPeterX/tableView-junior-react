import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './app.css';
import Options from "./components/Options";



function App() {
  //state to hold received data
  const [people, setPeople] = useState([]);
  // state to switch URL. default 50 (50 - small; 1000 - big)
  const [volume, setVolume] = useState(50);
  // state for loading
  const [isLoading, setIsLoading] = useState(true);

  // fetch data from www.filltext.com
  useEffect(() => {
    console.log(' App:useEffect volume=', volume);
    const baseURL = `http://www.filltext.com/?rows=${volume}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    axios.get(baseURL)
      .then(response => {
        console.log('after fetch: ', response.data.length);
        setPeople(response.data);
        setIsLoading(false);
      })
  }, [volume]);

  const handleChangeVolume = (vol) => {
    console.log(' handleChangeVolume:', vol);
    setVolume(vol || 50);
  }


  return (
    <div className="container">
      <Options volume={volume} setVolume={handleChangeVolume} />
      {isLoading ?
        <Loader
          className="centered"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
        :
        <Table
          data={people}
          columns={["id", "firstName", "lastName", "email", "phone"]}
          headers={["#", "Имя", "Фамилия", "Почта", "Телефон"]}
        />
      }
    </div>
  );
}

export default App;
