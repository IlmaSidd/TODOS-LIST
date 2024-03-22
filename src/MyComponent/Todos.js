import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh",
    margin: "40px auto",
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0? "No Todos Remaining":
      props.todos.map((todo)=> {
        // console.log(todo.srno);
        return <TodoItem todo={todo} key={todo.title} onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}

export default Todos
