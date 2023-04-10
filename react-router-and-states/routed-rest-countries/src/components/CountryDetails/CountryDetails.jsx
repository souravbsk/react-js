import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const countryData = useLoaderData();
console.log(countryData);
    return (
        <div>
            <h1>eh</h1>
        </div>
    );
};

export default CountryDetails;