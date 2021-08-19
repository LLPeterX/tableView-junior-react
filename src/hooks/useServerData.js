import { useState, useEffect } from 'react';
import axios from "axios";

export const useServerData = (url, isButtonClick) => {
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const getData = () => {
  //   axios.get(url).then(res => {
  //     setContactData(res.data);
  //     setIsLoading(false);
  //     console.log('getData():', contactData);
  //   })
  // }

  // variant with useEffect()

  const getData = () => { }
  useEffect(() => {
    axios.get(url).then(res => {
      setContactData(res.data);
      setIsLoading(false);
    })
  }, [url]);


  return [{ contactData, setContactData, isLoading, setIsLoading }, getData];
}