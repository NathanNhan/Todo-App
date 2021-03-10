import {useReducer,useState} from 'react'
import Todolist from './components/Todolist';
import Todoinput from './components/Todoinput';

import "bootstrap/dist/css/bootstrap.min.css";

import { v4 as uuidv4 } from 'uuid';
import React from 'react'

export default function App() {
  const [name, setName] = useState('');
  const [list,setList] = useState([]);
  const [editElement, seteditElement] = useState(false);
  const [editId, seteditId] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      setList([]);
    } else if(name && editElement){
      setList(list.map((item)=>{
        if (item.id === editId){
          
          return {...item,title:name}
          
        }
        return item;
      }))
      setName('');
      seteditElement(false);
      seteditId(null);
    }
    else{
      const newValue = {id:uuidv4(),title:name}
      setList([...list,newValue])
      setName("");
    }
  }
  const deleteItem = (id) =>{
    let newvalue=list.filter((item)=>item.id !== id)
    setList(newvalue)
  }
  const editItem = (id)=>{
    const editItem = list.find((item)=>item.id === id);
    seteditElement(true);
    seteditId(id);
    setName(editItem.title);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <Todoinput name={name} setName={setName} handleSubmit={handleSubmit} editElement={editElement}/>
          <Todolist title={list} setList={setList} deleteItem={deleteItem} editItem={editItem}/>
        </div>
      </div>
    </div>
  )
}

