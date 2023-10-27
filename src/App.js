import React, { useState } from 'react';
import './App.css';
import List from './List';



function Todo() {

  const [text, setText] = useState("")
  const [items, setItems] = useState([])
  function handlechange(event) {
    let t = event.target.value;
    setText(t)
  }

  function AddItem(event) {
    
      event.preventDefault();
      if (text) {
      setItems([...items, text])
      setText("")
    }
  }
  return (
    <div className="container">
      <h1>paulo</h1>
      <form>
        <input type='text' value={text} onChange={handlechange}>

        </input>
        <button onClick={AddItem}>
          Add
        </button>
      </form>
      <List items={items}></List>
  
    </div>
  );
}


export default Todo;

