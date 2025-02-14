import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function LocalboxMiner() {

    const [state, setState] = useState('')
    const [todo, setTodo] = useState([])

    function addTask(e) {
        e.preventDefault()
        setTodo([...todo, state])
        const user = JSON.parse(localStorage.getItem('user')) || []
        user.push(state)
        localStorage.setItem('user', JSON.stringify(user))
        setState('')
    }

    function deleteTask(i) {
        const deldata = [...todo]
        deldata.splice(i, 1)
        setTodo(deldata)
        localStorage.setItem('user', JSON.stringify(deldata))
    }

    function editData(i) {
        const editdata = prompt('Edit Task', todo[i])
        const UpdateData = [...todo]
        UpdateData[i] = editdata
        setTodo(UpdateData)
        localStorage.setItem('user', JSON.stringify(UpdateData))
    }

    return (
        // <div>
        //     <h1>LocalboxMiner</h1>
        //     <input onChange={(e)=>setState(e.target.value)} placeholder='Enter Task' value={state}/>
        //     <button onClick={addTask}>Add Task</button>
        //     {
        //         todo.map((el,i)=>{
        //             return <>
        //             <p>{el}</p>
        //             <button onClick={()=>deleteTask(i)}>Delete</button>
        //             <button onClick={()=>editData(i)}>Edit</button>
        //             </>
        //         })
        //     }
        // </div>
        <div className="container mt-5">
            <h2 className="text-center mb-4">Task Manager</h2>
            <div className="mb-3 d-flex">
                <input type="text" className="form-control me-2" placeholder="Enter Task" value={state} onChange={(e) => setState(e.target.value)} />
                <button className="btn btn-primary" onClick={addTask}> Add Task</button>
            </div>
            {todo.length > 0 ? (
                <ul className="list-group">
                    {todo.map((el, i) => (
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center mb-2 border rounded p-2 fs-5" >
                            {el}
                            <div>
                                <button className="btn btn-sm btn-warning me-2" onClick={() => editData(i)}> Edit </button>
                                <button className="btn btn-sm btn-danger" onClick={() => deleteTask(i)}> Delete </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-muted">No tasks added yet.</p>
            )}
        </div>
    )
}
