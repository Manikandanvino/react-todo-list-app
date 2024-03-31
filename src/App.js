import AddItems from './AddItems';
import './App.css';
import Content from './Content';
import Fooder from './Fooder';
import Header from './Header';
import { useState } from 'react';
import SearchItem from './SearchItem';

function App() {
  const [items ,setItems] = useState(JSON.parse(localStorage.getItem('to-do-list-app')))
  const [newItem ,setNewItem] = useState('')
  const [search,setSearch] = useState('')


  const handleCheck = (id)=>{
   const listItem = items.map((value)=>
    value.id===id ? {...value, checked:!value.checked} : value
   )
   setItems(listItem)
   localStorage.setItem("to-do-list-app",JSON.stringify(listItem))
}

const handleDelete = (id)=>{
   const listItem = items.filter((value)=>
       value.id!==id
   )
   setItems(listItem)
   localStorage.setItem("to-do-list-app",JSON.stringify(listItem))
}

const addItem =(item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
const addNewItem =  {id,checked:false,item}
const listItems = [...items, addNewItem]
setItems(listItems)
localStorage.setItem("to-do-list-app",JSON.stringify(listItems))
}

const handleSubmit = (e)=>{
  e.preventDefault()
  if (!newItem) return;
  addItem(newItem)
  setNewItem('')
}
  return (
    <div className="App">
      <Header title="To Do List"/>
      <AddItems 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content 
      items={items.filter((value)=>(value.item).toLowerCase().includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Fooder 
      length={items.length}
      />
    </div>
  );
}

export default App;
