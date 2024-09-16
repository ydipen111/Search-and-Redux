import { Input } from '@material-tailwind/react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Search1() {
  const [query, setQuery] = useState('avatar');
  const [data, setData] = useState([]);
  const sig = new AbortController();

  const getData = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com', {
        signal: sig.signal,
        params: {
          t: query,
          apiKey: `6905a701`
        }
      });
      setData(response.data)

    } catch (error) {
      console.log(error);


    }
  }

  useEffect(() => {
    getData();
    return () => {
      sig.abort();

    }
  }, [query])
  console.log(data);


  return (
    <div>
      <p className='bg-gray-300 px-3 py-3'>
        < Input type="text"
          label="search movie"
          onChange={(e) => {
            setQuery(e.target.value)
          }} />
        <p>{query}</p>
      </p>


    </div>
  )
}
