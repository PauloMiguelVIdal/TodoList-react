import React, { useState } from 'react';
import './App.css';




function Todo() {

  const [text, setText] = useState("")

function handlechange(event){
 let t = event.target.value;
 setText(t)
}

  return (
    <div className="container">
<h1>paulo</h1>
<form>
  <input type='text' onChange={handlechange}>

  </input>
  <button>
    Add
  </button>
</form>
<ul>
  <li>{text}</li>
</ul>
    </div>
  );
}

export default Todo;
