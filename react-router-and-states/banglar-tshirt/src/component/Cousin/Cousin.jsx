import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children,ring}) => {
    return (
        <div>
            <h4>{children}</h4>
            <section className='flex'>
           {
            ring &&  <Friend ring={ring}></Friend>
           }
            </section>
        </div>
    );
};

export default Cousin;