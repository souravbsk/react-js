import React, { useContext } from 'react';
import { UserContext } from '../Home/Home';

const HelloWold = () => {
    const user = useContext(UserContext);
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default HelloWold;