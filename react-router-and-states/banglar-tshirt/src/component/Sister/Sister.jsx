import React, { useContext } from 'react';
import { monyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(monyContext)
    return (
        <div>
            <h4>Sister {money}</h4>
        </div>
    );
};

export default Sister;