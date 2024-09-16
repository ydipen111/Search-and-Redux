import React, { useEffect, useState } from 'react'
import Carddd from '../Components/card'
import { Testimanial } from '../Components/Testimanial'

export default function Clear() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <button className='bg-gray-400 px-4 py-4 rounded-md text-4xl ' onClick={handleClick}>Click me</button>

      {open && <Testimanial />}
      {/* <Testimanial /> */}

    </div>
  )
}
