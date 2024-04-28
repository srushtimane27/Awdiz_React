import React, { useState } from 'react'

const Practice = () => {

  const [todo, setTodo] = useState("");
  console.log(todo, "TODO")

  function handleChange(event){
    // console.log(event.target.value)
    setTodo(event.target.value)
  }






  return (
    <div>
      <h1>ADD TODO</h1>
      <input onChange={handleChange} type="text" placeholder='Type Here...'/><br />
      <button >Submit</button>
    </div>
  )
}

export default Practice