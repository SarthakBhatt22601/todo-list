import React, { useState } from 'react';
import './AddTodo.css';

export default function AddTodo(props) {
    const [content, setContent] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!content)
            alert("ToDo can't be blank!!");
        else
            props.addTodo(content);
        setContent("");        
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label>Add ToDo : </label>
                <input type="text" id="content" value={content} onChange={(e)=>setContent(e.target.value)} />
                <button type="submit">Add</button>
                </form>
        </div>
    )
}
