import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const {title,completed} = props.todo;
    return (
        <div className='todoList'>
            <h3>Title:{title}</h3>
            <p>status: {completed ? 'completed' : 'no complted'}</p>
        </div>
    );
};

export default Todo;