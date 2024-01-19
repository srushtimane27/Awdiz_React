// import React, { memo } from 'react'
// import toast from 'react-hot-toast'

// const Todos = ({ AddTodo, todos }) => {
//     toast.success("Hi from todos..")
    
//     return (
//         <div>
//             <h1>Todos</h1>
//             {todos.map((todo) => (
//                 <h2>{todo}</h2>
//             ))}
//             <button onClick={AddTodo}> Add todo</button>
//         </div>
//     )
// }

// export default memo(Todos);



import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodos] = useState('');
    const [allTodos, setAllTodos] = useState([]);


    console.log(allTodos, "allTodos")

    const handleSubmit = () => {
        setAllTodos([...allTodos, todo])

    }

    const DeleteTodo = (i) => {
        allTodos.splice(i, 1)
        setAllTodos(allTodos)
    }
    return (
        <div>
            <input onChange={(e) => setTodos(e.target.value)} value={todo} />
            <button onClick={handleSubmit}>Submit</button>

            {allTodos?.length && <div>
                {allTodos.map((todo, i) => (
                    <>
                        <h1>{todo}</h1>
                        <button onClick={() => DeleteTodo(i)}>Delete</button>
                    </>

                ))}
            </div>}
        </div>
    )
}

export default Todo