import React from 'react';

const Country = (props) => {
    console.log(props);
    const {flags,name,region,maps} = props.country;
    return (
        <div className="col">
            <div className="card">
                <img src={flags.png} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name.common}</h5>
                        <p className="card-text">{region}</p>
                    </div>
            </div>
        </div>
    );
};

export default Country;