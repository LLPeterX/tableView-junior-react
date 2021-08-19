import { useState } from 'react';
import axios from "axios";

export const useServerData = (url) => {
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    axios.get(url).then(res => {
      setContactData(res.data);
      setIsLoading(false);
      console.log('getData():', contactData);
    })
  }

  return [{ contactData, setContactData, isLoading, setIsLoading }, getData];
}