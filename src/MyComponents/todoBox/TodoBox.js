import React from 'react';
import './TodoBox.css';
import AddTodo from '../addTodo/AddTodo';
import {TodoItem} from '../todoItem/TodoItem';

export default function TodoBox(props){
    return (
        <div>
            <div className="inputBox">
                <AddTodo addTodo={props.addTodo} />
            </div>
            <div className="todoBox">
                <h1 style={{textDecoration:'underline'}}>My Todos</h1>
                {props.todos.length === 0?<h3 style={{textAlign:'center',color:'orangered'}}>"No ToDo's to display"</h3>:
                props.todos.map((todo)=>{
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                })}
            </div>
        </div>
    )
}
