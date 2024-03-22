import './App.css';
import Header from './MyComponent/Header';
import AddTodos from './MyComponent/AddTodos';
import Todos from './MyComponent/Todos';
import About from './MyComponent/About';
import Footer from './MyComponent/Footer';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("add the new TOdo", title, desc);
    let srno;
    if (todos.length === 0) {
      srno = 0;
    }
    else {
      srno = todos[todos.length - 1].srno + 1;
    }
    const myTodo = {
      srno: srno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="MyTodosList" search={false} />
        <Routes>
          <Route exact path="/" element={<>
            <AddTodos addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
