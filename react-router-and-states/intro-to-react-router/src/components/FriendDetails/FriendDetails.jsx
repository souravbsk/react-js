import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData); 
    return (
        <div>
            <h1>Everything about this friend</h1>
            <p>{detailsData.name}</p>
            <p>{detailsData.phone}</p>
            <p>{detailsData.email}</p>
        </div>
    );
};

export default FriendDetails;