import React from 'react'
import {FaPlus} from 'react-icons/fa'
import './AddItems.css'

const AddItems = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm'  onSubmit={handleSubmit}>
        <input
        autoFocus
        id='add item'
        type='text'
        required
        placeholder='Add Item'
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
        />
        <button type='submit' >
         <FaPlus/>
        </button>

    </form>
  )
}

export default AddItems