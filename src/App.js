import React, { useState , useEffect } from 'react';
import './App.css';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';

const SAVED_ITEMS = "savedItems"

function Todo() {

  const [items, setItems] = useState([])

  useEffect(()=>{
    console.log(localStorage.getItem(SAVED_ITEMS))
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems){
      setItems(savedItems);
      console.log("teste1")
    }
  },[])

  useEffect(()=>{
localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
console.log("teste2")
  }, [items])

  function onAddItem(text){
let item = new Item(text)

setItems([...items, item])
  }

function onItemDeleted(item){
  let filteredItems = items.filter(it=>it.id !== item.id)
setItems(filteredItems)
}

function onDone(item){
let updatedItems = items.map(it=>{
  if(it.id === item.id){
    it.done = !it.done;
  }
  return it;
})
setItems(updatedItems)
}
  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List onDone={onDone}  onItemDeleted={onItemDeleted} items={items}></List>

    </div>
  );
}


export default Todo;

