 import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AxiosForm() {
    const [data, setData] = useState({ id: '', title: '' });
    const [form, setForm] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchAxios();
    }, []);

    const fetchAxios = () => {
        axios.get('http://localhost:3007/Todo')
            .then((res) => setForm(res.data))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.id.trim() || !data.title.trim()) {
            alert('Both ID and Title are required');
            return;
        }

        const numericId = String(data.id);
        if (edit) {
            axios.put(`http://localhost:3007/Todo/${editId}`, { id: editId, title: data.title })
                .then(() => {
                    fetchAxios();
                    resetForm();
                })
        } else {
            axios.post('http://localhost:3007/Todo', { id: numericId, title: data.title })
                .then(() => {
                    fetchAxios();
                    resetForm();
                })
        }
    };

    const resetForm = () => {
        setData({ id: '', title: '' });
        setEdit(false);
        setEditId(null);
    };

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3007/Todo/${id}`)
            .then(() => fetchAxios())
    };

    const handleEdit = (id) => {
        const editTodo = form.find((todo) => todo.id === id);
        if (editTodo) {
            setData({ id: editTodo.id.toString(), title: editTodo.title });
            setEdit(true);
            setEditId(id);
        }
    };

    return (
        <div>
            <h2>Axios CRUD Todo List</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ID" name="id" value={data.id} onChange={handleInputChange} disabled={edit} />
                <input type="text" placeholder="Title" name="title" value={data.title} onChange={handleInputChange} />
                <button type="submit">{edit ? 'Update' : 'Submit'}</button>
                {edit && <button type="button" onClick={resetForm}>Cancel</button>}
            </form>
            <ul>
                {form.map((el) => (
                    <li key={el.id}>
                        ID: {el.id} - {el.title}
                        <button onClick={() => handleEdit(el.id)}>Edit</button>
                        <button onClick={() => handleDelete(el.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
