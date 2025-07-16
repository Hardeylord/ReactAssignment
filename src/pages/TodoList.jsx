import { BookMarked, Pen, Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function TodoList() {
  const [items, setItems] = useState({
    text: "",
    date: ""
  });

  const [itemList, setitemList] = useState([]);
  const [countDown, setcountDown] = useState({});

  const formatData = (dateString) => {
    const dates = new Date(dateString);
    return dates.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  function getValue(e) {
    let { name, value } = e.target;
    setItems({ ...items, id: Date.now(), [name]: value, status: "false" });
  }

  function addItem() {
    // ✅ Input Validation
    if (!items.text.trim()) {
      alert("Please enter a valid task.");
      return;
    }

    if (!items.date) {
      alert("Please select a date and time.");
      return;
    }

    const now = new Date();
    const selectedDate = new Date(items.date);

    if (selectedDate <= now) {
      alert("The date and time must be in the future.");
      return;
    }

    // ✅ Add task
    setitemList([...itemList, items]);
    setItems({ text: "", date: "" });
  }

  function deleteItem(itemToDelete) {
    const filteredItem = itemList.filter((currentItem) => currentItem !== itemToDelete);
    setitemList(filteredItem);
  }

  function editItem(itemToEdit) {
    const filteredItem = itemList.filter((currentItem) => currentItem !== itemToEdit);
    setitemList(filteredItem);
    setItems(itemToEdit);
  }

  function doneItem(itemIdToMark) {
    setitemList(itemList.map((task) =>
      task.id === itemIdToMark ? { ...task, status: "true" } : task
    ));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newcountDown = {};
      itemList.forEach((task) => {
        const now = new Date().getTime();
        const endDate = new Date(task.date);
        const distance = endDate - now;

        if (distance <= 0) {
          newcountDown[task.id] = `00:00:00:00`;
          doneItem(task.id);
          return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((distance / (1000 * 60)) % 60);
        let seconds = Math.floor((distance / 1000) % 60);

        newcountDown[task.id] =
          `${String(days).padStart(2, "0")} : ${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
      });

      setcountDown(newcountDown);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [itemList]);

  return (
    <div className='h-screen bg-black flex flex-col items-center justify-center'>
      <div className='bg-[#3d3d3d] rounded-2xl p-4 space-y-4 w-[90%] max-w-2xl'>
        <h1 className='text-white text-center text-5xl font-bold'>Add Item</h1>

        <div className='flex flex-col sm:flex-row gap-4'>
          <input
            type="text"
            placeholder="Enter item"
            value={items.text}
            onChange={getValue}
            name='text'
            className="flex-1 text-black px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2"
          />
          <input
            name='date'
            value={items.date}
            onChange={getValue}
            className='bg-[#0b647f] px-4 py-2 rounded-full text-white'
            type='datetime-local'
          />
          <button
            onClick={addItem}
            className='px-4 py-2 rounded-full bg-green-600 text-white flex items-center justify-center'
          >
            <Plus />
          </button>
        </div>

        <div className='space-y-2'>
          {itemList.map((item, index) => (
            <div className='flex justify-between items-start bg-[#2e2e2e] p-2 rounded' key={index}>
              <div className='flex flex-col text-white'>
                <p className='font-semibold'>{item.text}</p>
                <p className='text-sm'>
                  {item.date
                    ? (<span>due: {formatData(item.date)} <br /> {countDown[item.id]}</span>)
                    : (<span>no time</span>)
                  }
                </p>
              </div>

              <div className='flex space-x-1'>
                {/* <button onClick={() => doneItem(item.id)} className='cursor-pointer px-1 py-1 rounded bg-green-400'><BookMarked /></button> */}
                <button onClick={() => editItem(item)} className='cursor-pointer px-1 py-1 rounded bg-yellow-400'><Pen /></button>
                <button onClick={() => deleteItem(item)} className='cursor-pointer px-1 py-1 rounded bg-red-500'><Trash /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
