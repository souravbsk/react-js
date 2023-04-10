import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Country = () => {
    const countrys = useLoaderData();
    console.log(countrys);
    return (
        <div>
            {
                countrys.map(country => <li>{country.name.common}
                <Link to={`/countryDetails/${country.name.common}`}>show more</Link>
                </li>)
            }
        </div>
    );
};

export default Country;