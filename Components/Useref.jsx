import React, { useRef } from 'react'

export default function Useref() {
  const some = useRef();
  const handleclick = () => {
    console.log(some.current);
  }
  return (
    <div>
      <h1 onClick={handleclick}>click me</h1>

    </div>
  )
}
