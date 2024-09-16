import React, { useEffect, useRef, useState } from 'react'
import Clear from '../Hooks/Clear';
import Search from '../Components/Search';

export default function Account() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState();

  const getData = () => {
    try {

    } catch (error) {

    }
  }




  return (
    <div className='px-5'>
      {/* <Clear /> */}
      <Search />

    </div>
  )
}
