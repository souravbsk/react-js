import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const angti = useContext(RingContext);
    return (
        <div>
            <h4>Brother: {angti}</h4>
        </div>
    );
};

export default Brother;