
import TodoItem from './Todoitems';
import React from 'react'

export default function Todolist({title,setList,deleteItem,editItem}) {
    return (
        <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {title.map((item)=>{
                    return <TodoItem key={item.id} {...item} deleteItem={deleteItem} editItem={editItem} />
                })}
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={(e)=>setList([])}>
                    clear list
                </button>
        </ul>
    )
}

