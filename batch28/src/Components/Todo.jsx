import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    console.log(todo, "todo")
    console.log(todos, "todos")

    function handleChange(event){
        setTodo(event.target.value)
    }

    function handleSubmit(){
        setTodos([...todos, todo])
        setTodo("")
    }


  return (
    <div>
        <h3>ADD TODO</h3>
        <input value={todo} onChange={handleChange} type="text" placeholder='Type Here....' />
        <button onClick={handleSubmit}>Submit</button>
        {todos.length ? <div>
            <h2>Your Todos : </h2>
            {todos.map((todo, i) => (
                <p>{i+1}.{todo}</p>
            ))}
        </div> : <h1>No Todos Found</h1>}
    </div>
  )
}

export default Todo