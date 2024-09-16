
// import { Card } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Card from './Components/card
import { useParams } from 'react-router-dom';


export default function Detailspage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log(response.data);
      setData(response.data);

    } catch (error) {

    }


  }
  useEffect(() => {
    getData();
  }, [])
  console.log(data);

  return (
    <div className='grid grid-cols-3 gap-4 sm:grid-cols-2 rounded-sm px-4 py-4'>



      {/* <Useref /> */}






    </div>
  )
}
