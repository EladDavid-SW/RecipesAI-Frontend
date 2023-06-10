import React, { useState, useEffect } from 'react'
import './Grocery.css'

function Grocery({ name, src, onGroceryClick }) {
  const [isMarked, setIsMarked] = useState(false)

  function handleClick() {
    setIsMarked(!isMarked)
  }

  useEffect(() => {
    onGroceryClick({ name, src, isMarked })
  }, [isMarked])

  return (
    <div onClick={handleClick} className='grocery-container'>
      <div className={`grocery-item ${isMarked ? 'marked-grocery' : ''}`}>
        <img src={src} alt={name} style={{ width: '100%', height: '100%' }} />
        <div className="hover-text">{name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</div>
      </div>
    </div>
  )
}

export default Grocery
