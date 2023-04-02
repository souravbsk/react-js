import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo'
import './Todos.css'

const Todos = () => {
    const [todos,setTodos] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    },[])
    return (
        <div>
            <h1>Todo List</h1>
            <div className='todoDiv'>
            {
                todos.map(todo => <Todo key={todo.id}  todo={todo} ></Todo>)
            }
            </div>
        </div>
    );
};

export default Todos;