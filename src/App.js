import React, { useState } from 'react';
import './App.css';




function Todo() {

  const [text, setText] = useState("")
  const [itens, setItems] = useState([])
  function handlechange(event) {
    let t = event.target.value;
    setText(t)
  }

  function AddItem(event) {
    
      event.preventDefault();
      if (text) {
      setItems([...itens, text])
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
      <ul>
        <li>{itens.map(item => <li>{item}</li>)}</li>
      </ul>
    </div>
  );
}

export default Todo;

