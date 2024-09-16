import axios from "axios";
import { useEffect, useState } from "react";

export const useApiHooks = (url) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
    } catch (error) {

    }


  }
  useEffect(() => {
    getData();
  }, []);
  return data;


}