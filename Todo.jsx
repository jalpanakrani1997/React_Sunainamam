import React, { useState } from 'react'

export default function Todo() {

    const [state, setState] = useState('')
    const [todo, setTodo] = useState([])


    function addTask(e) {
        e.preventDefault()
        setTodo([...todo, state])
        setState('')
    }

    // console.log(state)
    function deleteTask(i) {
        const newValue = [...todo]
        newValue.splice(i, 1)
        setTodo(newValue)

    }
    function editTask(i) {
        // const newValue = [...todo,i];
        // newValue[i] = state
        // setTodo(newValue)
        const newValue = prompt('Edit Task', todo[i])
        const editTask = [...todo]
        editTask[i] = newValue
        setTodo(editTask)
    }

    return (
        <div>

            <h1>Todo List</h1>

            <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter task' />
            <button onClick={addTask}>Add</button>
            {
                todo.map((item, i) => {
                    return <>
                        <p>{item}
                            <button onClick={() => deleteTask(i)} >Delete</button>
                            <button onClick={() => editTask(i)}>Edit</button>
                        </p>
                    </>
                })
            }
        </div>
    )
}
