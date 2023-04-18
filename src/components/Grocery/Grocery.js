import React, { useState, useEffect } from 'react'
import './Grocery.css'

function Grocery({ name, src, onGroceryClick }) {
  const [isMarked, setIsMarked] = useState(false)

  async function handleClick() {
    await setIsMarked(!isMarked)
  }

  useEffect(() => {
    onGroceryClick({ name, src, isMarked })
  }, [isMarked])

  return (
    <div onClick={handleClick} className='grocery-container'>
      <img src={src} className={`grocery-item ${isMarked ? 'marked-grocery' : ''}`}/>
    </div>
  )
}

export default Grocery
