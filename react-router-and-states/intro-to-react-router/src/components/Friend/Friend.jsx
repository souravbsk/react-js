import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    console.log(friend
        );
    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <Link to={`/friend/${friend.id}`}>see details</Link>
        </div>
    );
};

export default Friend;