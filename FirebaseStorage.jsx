// import React, { useState } from 'react'
// import { app } from '../Firebase';
// import { addDoc, collection, getDocs, getFirestore, QuerySnapshot } from 'firebase/firestore';
// import { get } from 'firebase/database';

// const data = getFirestore(app);
// export default function FirebaseStorage() {
//     const [state, setState] = useState({
//         name: '',
//         email: ''
//     })
//     const [userList, setUserList] = useState([]);


//     function sendData(e) {
//         e.preventDefault();
//         if (!state.name || !state.email) {
//             alert("Please fill all fields");
//             return;
//         }
//         addDoc(collection(data, "UserData/"), {
//             name: state.name,
//             email: state.email

//         })
//         alert("Data Add SuccessFully")
//         setState({ name: '', email: '' })
//     }

//     function getData() {
//        const querySnapshot= getDocs(collection(data, "UserData"), {
//             const users = querySnapshot.docs.map(doc => ({
//                 id: doc.id, ...doc.data()
//             }))
//             setUserList(users);
//         })
//     }
//     return (
//         <div>
//             <h1>FirebaseStorage</h1>
//             <form onSubmit={sendData}>
//                 <input type="text" value={state.name} placeholder='Name'
//                     onChange={(e) => setState({ ...state, name: e.target.value })} />
//                 <input type="text" value={state.email} placeholder='Email'
//                     onChange={(e) => setState({ ...state, email: e.target.value })} />
//                 <button type='submit'>Add</button>
//             </form>
//             <ul>
//                 {userList.map((user) => (
//                     <li key={user.id}>
//                         {user.name} - {user.email}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }



import React, { useEffect, useState } from 'react';
import { app } from '../Firebase';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const data = getFirestore(app);

export default function FirebaseStorage() {
    const [state, setState] = useState({
        name: '',
        email: ''
    });
    const [userList, setUserList] = useState([]);
 
    function sendData(e) {
        e.preventDefault();

        if (!state.name || !state.email) {
            alert("Please fill all fields");
            return;
        }

        addDoc(collection(data, "UserData"), {
            name: state.name,
            email: state.email
        })
            .then(() => {
                alert("Data Added Successfully");
                setState({ name: '', email: '' });
                getData(); 
            })
    }

    function getData() {
        getDocs(collection(data, "UserData"))
            .then((querySnapshot) => {
                const users = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUserList(users);
            })

    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Firebase Storage</h1>
            <form onSubmit={sendData}>
                <input type="text" value={state.name} placeholder="Name"
                    onChange={(e) => setState({ ...state, name: e.target.value })} />
                <input type="email" value={state.email} placeholder="Email"
                    onChange={(e) => setState({ ...state, email: e.target.value })} />
                <button type="submit">Add</button>
            </form>

            <h2>Users List</h2>
            <ul>
                {userList.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
