import './App.css';
import Header from './MyComponents/header/Header';
import TodoBox from './MyComponents/todoBox/TodoBox';
import { About } from './MyComponents/about/About';
import { Footer } from "./MyComponents/footer/Footer";
import React,{ useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (content) => {
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const todo = {
      sno: sno,
      content: content
    };
    setTodos([...todos,todo]);
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
      <>
        <Router>
          <Header title="ToDo List" />
          <Switch>
          <Route exact path="/" render={()=>{
            return(
              <><TodoBox todos={todos} onDelete={onDelete} addTodo={addTodo} /></>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
          <Footer developer="Sarthak Bhatt" />
        </Router>
      </>
  );
}

export default App;
