
import {useState} from 'react';
import React from 'react'
import "../App.css";
export default function Todoitems({title,deleteItem,id,editItem}) {
    const [isChecked, setisChecked] = useState(false);
    return (
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            
                <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked={isChecked} onChange={()=>setisChecked(!isChecked)}   />
                
                <h6>{title}</h6>
                {isChecked ? 'You done 100%' : null}
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={()=>editItem(id)}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={()=>deleteItem(id)}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
    )
}

