import { BookMarked, Pen, Plus, Trash } from 'lucide-react'
import React, { useState } from 'react'

export default function TodoList() {

  const[items, setItems]=useState({
    text:"",
    date:""
  })

  const[itemList, setitemList]=useState([])

  function getValue(e) {
    let{name, value}=e.target

    setItems({...items, [name]:value})
  } 
  function addItem() {
    setitemList([...itemList, items])
    setItems({ text: "", date: "" })
  }



  // const filteredItems=items.filter((item)=> item !== itemToDelete)
  //  setitems(filteredItems);

  function deleteItem(itemToDelete) {
    const filteredItem=itemList.filter((currentItem)=> currentItem !== itemToDelete)
    setitemList(filteredItem)
  }
  function editItem(itemToEdit) {
    const filteredItem=itemList.filter((currentItem)=> currentItem !== itemToEdit)
    setitemList(filteredItem)
    setItems(itemToEdit)
  }
  
  return (
    <div className='h-screen bg-black flex flex-col items-center justify-center'>
      <div className='bg-[#3d3d3d] rounded-2xl p-4 space-y-4'>
        <h1 className='text-white text-center text-5xl font-bold'>Add Item</h1>
        <div className='flex space-x-4'>
        <input
          type="text"
          placeholder="Enter item"
          value={items.text}
          onChange={getValue}
          name='text'
          className="flex-1 text-white px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 "
        />
        <input name='date' value={items.date} onChange={getValue} className='bg-[#0b647f] px-4 py-2 rounded-full' type='date' />
        <button onClick={addItem} className='px-4 py-2 rounded-full bg-green-600'><Plus/></button>
        </div>
        <div>{itemList.map((item, index)=>(
          <div className='flex justify-between mb-2' key={index}>
            <div className='flex space-x-4'>
            <p className='text-white'>{item.text}</p>
            <p className='text-white'>
              {item.date ? new Date(item.date).getTime()-new Date().getTime() : (<h1>no time</h1>)}
              </p>
            </div>

            <div className='flex space-x-1'>
            <button className='cursor-pointer px-1 py-1 rounded bg-green-400'><BookMarked/></button>
            <button onClick={()=>editItem(item)} className='cursor-pointer px-1 py-1 rounded bg-green-400'><Pen/></button>
            <button onClick={()=>deleteItem(item)} className='cursor-pointer px-1 py-1 rounded bg-green-400'><Trash/></button>
            </div>
            
          </div>
        ))}</div>
      </div>
    </div>
  )
}
