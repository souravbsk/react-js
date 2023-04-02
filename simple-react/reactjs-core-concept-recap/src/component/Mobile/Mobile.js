import React, { useState } from 'react';

const Mobile = () => {
    const [Charge,setCharge] = useState(100);
    const handleCharge = () => {
        const decreaseCharge = Charge - 10;
        if(Charge === 0){
            return
        }
        setCharge(decreaseCharge)
        
    }
    return (
        <div>
            <h2>{Charge}%</h2>
            <button onClick={handleCharge}>Battery Down</button>
        </div>
    );
};

export default Mobile;