import React from 'react'
import './SearchItem.css'
const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()} >
        <input 
        type='search'
        placeholder='search Item'
        id='search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem