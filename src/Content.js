import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import './Content.css'
const Content = ({items,handleCheck,handleDelete}) => {
   
  return (
    <main>
        {(items.length) ? (
           <ul>
           {items.map((value)=>(
               <li className='item' key={value.id}>
                   <input
                   type='checkbox'
                   checked={value.checked}
                   onChange={()=>handleCheck(value.id)}
                   />
                   <label onDoubleClick={()=>handleCheck(value.id)} style ={ (value.checked) ? {textDecoration : "line-through"} : null}>
                       {value.item}
                   </label>
                   <FaRegTrashCan
                    role='button'
                    tabIndex='0'
                    onClick={()=>handleDelete(value.id)}
                   />
               </li>
           ))}
          </ul>
         ) : (
            <p>your list is empty</p>
             )
        }
       
    </main>
  )
}

export default Content