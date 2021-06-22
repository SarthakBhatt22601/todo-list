import React from 'react';
import './TodoItem.css'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div>
            <ul>
                <li><h4> {todo.content}</h4></li>
                <button type="submit" onClick={()=>{onDelete(todo)}}>Delete</button>   
            </ul>
            <hr />
        </div>
    )
}
