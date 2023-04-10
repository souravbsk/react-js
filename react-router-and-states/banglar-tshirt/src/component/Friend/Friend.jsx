import React, { useContext } from 'react';
import { EidContext } from '../Grandpa/Grandpa';

const Friend = ({ring}) => {
    const getValue = useContext(EidContext);
    console.log(getValue);
    return (
        <div>
            <p>Friend: {ring}</p>
        </div>
    );
};

export default Friend;