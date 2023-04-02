import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [Countries,setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1 className='fs-3 fw-semibold text-primary text-center my-5 text-opacity-75'>Rest Countrys</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

            {
                Countries.map(country => <Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;