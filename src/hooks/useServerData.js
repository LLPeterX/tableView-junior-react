import { useState, useEffect } from 'react';
import axios from "axios";

export const useServerData = (volume) => {
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const url = `http://www.filltext.com/?rows=${volume || 10}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(XXX)XXX-XXXX}&address={addressObject}&description={lorem|32}`;

  const getData = (offset, rows) => contactData.slice(offset, offset + rows);

  useEffect(() => {
    axios.get(url).then(res => {
      setContactData(res.data);
      setIsLoading(false);
      setDataLoaded(true);
    })
  }, [url]);


  return [{ contactData, setContactData, isLoading, setIsLoading, dataLoaded }, getData];
}