import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,area,population,region,flags} = props.country;
    return (
        <div className='countryDiv'>
            <img src={flags.png} alt="" />
            <h3>Country Name : {name.common}</h3>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Region : {region}</p>
        </div>
    );
};

export default Country;