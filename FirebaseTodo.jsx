// // import React, { useEffect, useState } from 'react'
// // import { getDatabase, onValue, push, ref, set } from 'firebase/database'
// // import { app } from '../Firebase';

// // const database = getDatabase(app)
// // export default function FirebaseTodo() {

// //     const [state, setState] = useState('')
// //     const [todo, setTodo] = useState([])

// //     function addData() {
// //         const todoFire = push(ref(database, 'Todo/'))
// //         set(todoFire, { title: state })
// //         setState('')
// //     }

// //     useEffect(() => {
// //         const todoRef = ref(database, 'Todo/')
// //         onValue(todoRef, (snapshot) => {
// //             const data = snapshot.val()
// //             if (data) {

// //                 const todoList = Object.values(data).map(task => task.title)
// //                 setTodo(todoList)
// //             } else {
// //                 setTodo([])
// //             }
// //         })
// //     }, [])

// //     return (
// //         <div>
// //             <h1>Todo List</h1>
// //             <form onSubmit={(e) => e.preventDefault()}>
// //                 <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder='Title' />
// //                 {/* <input type="text" placeholder='Details' /> */}
// //                 <button onClick={addData}>Add</button>
// //             </form>
// //             {
// //                 todo.map((el) => {
// //                     return <>
// //                         <li>
// //                             <p>{el.title}</p>
// //                             {/* <p>{el.title}</p> */}
// //                         </li>
// //                     </>
// //                 })
// //             }
// //         </div>
// //     )
// // }









// import React, { useState, useEffect } from 'react';
// import { getDatabase, ref, push, onValue, remove, update, set } from 'firebase/database';
// import { app } from '../Firebase';

// const database = getDatabase(app);

// export default function FirebaseTodo() {

//     const [state, setState] = useState({ title: '', body: '' })
//     const [todo, setTodo] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((res) => res.json())
//             .then((data) => {
//                 data.slice(0, 10).forEach((post) => {
//                     const newTask = {
//                         id: post.id,
//                         title: post.title,
//                         body: post.body
//                     };
//                     const todoRef = ref(database, `Todo/${post.id}`);
//                     set(todoRef, newTask)
//                 });
//             })
//             .catch((err) => console.error('Error fetching data:', err));
//     }, []);

//     useEffect(() => {
//         const todoRef = ref(database, 'Todo/');
//         onValue(todoRef, (snapshot) => {
//             const data = snapshot.val();
//             if (data) {
//                 const newTodos = Object.keys(data).map((key) => ({
//                     id: key,
//                     title: data[key].title,
//                     body: data[key].body
//                 }));
//                 setTodo(newTodos);
//             } else {
//                 setTodo([]);
//             }
//         });
//     }, []);

//     function addData() {
//         if (!state.title.trim() || !state.body.trim()) {
//             alert("Please enter both title and body!");
//             return;
//         }
//         const newTask = {
//             title: state.title,
//             body: state.body
//         };
//         const todoRef = ref(database, 'Todo/');
//         push(todoRef, newTask);
//         setState({ title: '', body: '' });
//     }

//     function deleteData(id) {
//         const taskRef = ref(database, `Todo/${id}`);
//         remove(taskRef);
//     }

//     function updateData(id) {
//         const newTitle = prompt('Enter new title:');
//         const newBody = prompt('Enter new body:');
//         if (newTitle && newBody) {
//             const taskRef = ref(database, `Todo/${id}`);
//             update(taskRef, { title: newTitle, body: newBody });
//         }
//     }

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <form onSubmit={(e) => e.preventDefault()}>

//                 <input
//                     type="text"
//                     value={state.title}
//                     onChange={(e) => setState({ ...state, title: e.target.value })}
//                     placeholder='Title'
//                 />
//                 <input
//                     type="text"
//                     value={state.body}
//                     onChange={(e) => setState({ ...state, body: e.target.value })}
//                     placeholder='Body'
//                 />
//                 <button onClick={addData}>Add</button>
//             </form>
//             <ul>
//                 {todo.map((el) => (
//                     <li>
//                         <h5>{el.id}</h5>
//                         <p><strong>{el.title}</strong>: {el.body} </p>
//                         <button onClick={() => updateData(el.id)}>Edit</button>
//                         <button onClick={() => deleteData(el.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }






import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue, remove, update } from 'firebase/database';
import { app } from '../Firebase';

const database = getDatabase(app);

export default function FirebaseTodo() {

    const [state, setState] = useState({ title: '', body: '' });
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const todoRef = ref(database, 'Todo/');
        onValue(todoRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const newTodos = Object.keys(data).map((key) => ({
                    id: key,
                    title: data[key].title,
                    body: data[key].body
                }));
                setTodo(newTodos);
            } else {
                setTodo([]);
            }
        });
    }, []);

    function addData() {
        if (!state.title.trim() || !state.body.trim()) {
            alert("Please enter both title and body!");
            return;
        }
        const newTask = {
            title: state.title,
            body: state.body
        };
        const todoRef = ref(database, 'Todo/');
        push(todoRef, newTask);
        setState({ title: '', body: '' });
    }

    function deleteData(id) {
        const taskRef = ref(database, `Todo/${id}`);
        remove(taskRef);
    }

    function updateData(id) {
        const newTitle = prompt('Enter new title:');
        const newBody = prompt('Enter new body:');
        if (newTitle && newBody) {
            const taskRef = ref(database, `Todo/${id}`);
            update(taskRef, { title: newTitle, body: newBody });
        }
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={state.title}
                    onChange={(e) => setState({ ...state, title: e.target.value })}
                    placeholder='Title'
                />
                <input
                    type="text"
                    value={state.body}
                    onChange={(e) => setState({ ...state, body: e.target.value })}
                    placeholder='Body'
                />
                <button onClick={addData}>Add</button>
            </form>
            <ul>
                {todo.map((el) => {
                    return <>
                        <li>
                            {/* <h5>{el.id}</h5> */}
                            <p><strong>{el.title}</strong>: {el.body} </p>
                            <button onClick={() => updateData(el.id)}>Edit</button>
                            <button onClick={() => deleteData(el.id)}>Delete</button>
                        </li>
                    </>
                })}
            </ul>
        </div>
    );
}
