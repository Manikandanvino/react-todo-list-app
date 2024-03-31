import React from 'react'
import './Fooder.css'
const Fooder = ({length}) => {
  return (
    <div className='footer'>
        <h3>{length} List {length===1 ? "item" : "items"}</h3>
    </div>
  )
}

export default Fooder